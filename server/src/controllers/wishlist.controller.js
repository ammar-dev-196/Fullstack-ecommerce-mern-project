import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import Wishlist from "../models/wishlist.model.js";

/**
 * Add a product to the user's wishlist
 * @route POST /api/v1/wishlist/items
 * @access Private (Authenticated users only)
 */

export const addToWishlist = asyncHandler(async (request, response) => {
  const { userId } = request.user?._id;
  const productId = request.body;

  // if (!userId) {
  //   throw new ApiError(401, "Unauthorized request");
  // }

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new ApiError(400, "Invalid Product ID format");
  }

  const updatedWishlist = await Wishlist.findOneAndUpdate(
    { userId },
    {
      $addToSet: { products: productId },
    },
    {
      new: true,
      upsert: true, // If wishlist doesn't exist for this user, MongoDB creates a new one automatically!
      setDefaultsOnInsert: true,
    },
  ).populate("Products", "Title Product Price");

  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedWishlist,
        "Product successfully added to the wishlist",
      ),
    );
});

/**
 * Fetch user's wishlist with product details
 * @route GET /api/v1/wishlist/
 * @access Private (Authenticated users only)
 */

export const getAllWishlistItems = asyncHandler(async (request, response) => {
  const userId = request.user?._id;

  // if (!userId) {
  //   throw new ApiError(401, "Unauthorized access");
  // }

  const wishlist = await Wishlist.findOne({ userId }).populate({
    path: "products",
    select: "title regularPrice salePrice",
  });

  if (!wishlist) {
    return response
      .status(200)
      .json(new ApiResponse(200, { products: [] }, "Wishlist is empty"));
  }

  return response
    .status(200)
    .json(new ApiResponse(200, wishlist, "Wishlist fetched successfully"));
});

/**
 * Remove a product from user's wishlist
 * @route POST /api/v1/wishlist/items/:productId
 * @access Private (Authenticated users only)
 */

export const removeFromWishlist = asyncHandler(async (request, response) => {
  const { productId } = request.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new ApiError(400, "Invalid Product ID format");
  }

  const userId = request.user?._id;

  // if (!userId) {
  //   throw new ApiError(401, "Unauthorized request");
  // }

  const updatedWishlist = await Wishlist.findOneAndUpdate(
    { userId },
    {
      $pull: { products: productId },
    },
    {
      new: true,
    },
  );

  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedWishlist,
        "Product successfully removed from wishlist",
      ),
    );
});
