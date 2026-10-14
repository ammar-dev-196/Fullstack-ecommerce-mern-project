import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import Cart from "../models/cart.model.js";
import mongoose from "mongoose";

/**
 * Add a product to the cart or increment quantity if it exists
 * @route POST api/v1/cart/item/:productId
 * @access Private (Authenticated users only)
 */

export const addToCart = asyncHandler(async (request, response) => {
  const userId = request.user?._id;
  const { productId, quantity = 1 } = request.body;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new ApiError(400, "Invalid ");
  }

  if (Number(quantity) < 1) {
    throw new ApiError(400, "Quantity must be at least 1");
  }

  let cart = await Cart.findOneAndUpdate(
    { userId, "items.productId": productId },
    {
      // The $ positional operator updates the exact item matched in the array
      $inc: { "items.$.quantity": quantity },
    },
    {
      returnDocument: "after",
    },
  );

  if (!cart) {
    cart = await Cart.findOneAndUpdate(
      { userId },
      {
        // $push adds a new object to the array if the cart existed but item was missing
        $push: { items: { productId, quantity } },
      },
      {
        returnDocument: "after",
        upsert: true,
        setDefaultsOnInsert: true,
      },
    );
  }

  // 4. Optional: Populate product details so the frontend has up-to-date names/prices
  await cart.populate("items.productId", "title regularPrice salePrice");

  return response
    .status(200)
    .json(new ApiResponse(200, cart, "Item added to cart successfully"));
});

/**
 * Fetch user's cart items with product details
 * @route GET /api/v1/cart
 * @access Private (Authenticated users only)
 */

export const getUserCartItems = asyncHandler(async (request, response) => {
  const userId = request.user._id;

  const cart = await Cart.findOne({ userId }).populate({
    path: "items.productId",
    select: "title regularPrice salePrice",
  });

  if (!cart || cart.items.length === 0) {
    return response.status(200).json(
      new ApiResponse(
        200,
        {
          items: [],
          totalItems: 0,
          totalPrice: 0,
        },
        "Cart is currently empty",
      ),
    );
  }

  let totalPrice = 0;
  let totalItems = 0;

  cart.items.forEach((item) => {
    if (item.productId) {
      totalItems += item.quantity;

      const activePrice =
        item.productId.salePrice ?? item.productId.regularPrice;

      totalPrice += activePrice * item.quantity;
    }
  });

  const cartItems = {
    _id: cart._id,
    userId: cart.userId,
    items: cart.items,
    totalItems,
    totalPrice: Number(totalPrice.toFixed(2)),
    updatedAt: cart.updatedAt,
  };

  return response
    .status(200)
    .json(new ApiResponse(200, cartItems, "Cart fetched successfully"));
});

/**
 * Remove product items from cart
 * @route POST api/v1/cart/item/:productId
 * @access Private (Authenticated users only)
 */

export const removeFromCart = asyncHandler(async (request, response) => {
  const userId = request.user._id;

  const { productId } = request.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new ApiError(400, "Invalid Product ID format");
  }

  const updateCart = await Cart.findOneAndUpdate(
    { userId },
    {
      $pull: { items: { productId } },
    },
    { returnDocument: "after" },
  ).populate("items.productId", "title regularPrice salePrice");

  if (!updateCart) {
    throw new ApiError(404, "Cart items not found");
  }

  let totalPrice = 0;
  let totalItems = 0;

  updateCart.items.forEach((item) => {
    if (item.productId) {
      totalItems += item.quantity;
      const activePrice =
        item.productId.salePrice ?? item.productId.regularPrice;
      totalPrice += activePrice * item.quantity;
    }
  });

  const updatedCart = {
    _id: updateCart._id,
    userId: updateCart.userId,
    items: updateCart.items,
    totalItems,
    totalPrice: Number(totalPrice.toFixed(2)),
    updatedAt: updateCart.updatedAt,
  };

  return response
    .status(200)
    .json(new ApiResponse(200, updatedCart, "Cart updated successfully"));
});

/**
 * Update product quantity of an item (+1 or -1) via buttons
 * @route PATCH /api/v1/update-quantity
 * @access Private (Authenticated users only)
 */

export const updateCartItemQuantity = asyncHandler(
  async (request, response) => {
    const { productId, adjustment } = request.body;
    const userId = request.user._id;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      throw new ApiError(400, "Invalid product ID format");
    }

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      throw new ApiError(404, "Cart not found");
    }

    const item = cart.items.find(
      (item) => item.productId.toString() === productId,
    );
    if (!item) {
      throw new ApiError(404, "Product not found in cart");
    }

    // const newQuantity = item.quantity + adjustment;

    let updatedCart;

    // 3. Action Rule: If it drops below 1, remove it completely (acts like a trash icon)
    // if (newQuantity < 1) {
    //   updatedCart = await Cart.findOneAndUpdate(
    //     { userId },
    //     { $pull: { items: { productId } } },
    //     { new: true },
    //   );
    // } else {
    // Otherwise, safely increment/decrement the count directly in the DB
    updatedCart = await Cart.findOneAndUpdate(
      { userId, "items.productId": productId },
      { $inc: { "items.$.quantity": adjustment } },
      { returnDocument: "after", runValidators: true },
    );
    // }

    await updatedCart.populate(
      "items.productId",
      "title regularPrice salePrice",
    );

    let totalPrice = 0;
    let totalItems = 0;

    updatedCart.items.forEach((item) => {
      if (item.productId) {
        totalItems += item.quantity;
        const activePrice =
          item.productId.salePrice ?? item.productId.regularPrice;
        totalPrice += activePrice * item.quantity;
      }
    });

    const cartItemIncrement = {
      _id: updatedCart._id,
      userId: updatedCart.userId,
      items: updatedCart.items,
      totalItems,
      totalPrice: Number(totalPrice.toFixed(2)),
      updatedAt: updatedCart.updatedAt,
    };

    return response
      .status(200)
      .json(
        new ApiResponse(
          200,
          cartItemIncrement,
          "Cart quantity updated successfully",
        ),
      );
  },
);

/**
 * @desc    Completely empty the user's shopping cart
 * @route   DELETE /api/v1/cart
 * @access  Private
 */
export const clearCart = asyncHandler(async (request, response) => {
  const userId = request.user._id;

  const updatedCart = await Cart.findOneAndUpdate(
    { userId },
    { $set: { items: [] } },
    { returnDocument: "after" },
  );

  if (!updatedCart) {
    throw new ApiError(404, "Cart not found for this user");
  }

  return response
    .status(200)
    .json(
      new ApiResponse(200, updatedCart, "Shopping cart cleared successfully"),
    );
});
