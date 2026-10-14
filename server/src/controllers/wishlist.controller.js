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
  const userId = request.user?._id;
  const { productId } = request.body;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new ApiError(400, "Invalid Product ID format");
  }

  const updatedWishlist = await Wishlist.findOneAndUpdate(
    { userId },
    {
      $addToSet: { products: productId },
    },
    {
      returnDocument: "after",
      upsert: true,
      setDefaultsOnInsert: true,
    },
  );

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

export const getWishlistItems = asyncHandler(async (request, response) => {
  const userId = request.user?._id;

  // if (!userId) {
  //   throw new ApiError(401, "Unauthorized access");
  // }

  const wishlist = await Wishlist.findOne({ userId }).populate({
    path: "products",
    select: "title regularPrice salePrice categoryId",
    populate: {
      path: "categoryId",
      select: "title",
    },
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
  const userId = request.user?._id;
  const { productId } = request.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new ApiError(400, "Invalid Product ID format");
  }

  // if (!userId) {
  //   throw new ApiError(401, "Unauthorized request");
  // }

  const updatedWishlist = await Wishlist.findOneAndUpdate(
    { userId },
    {
      $pull: { products: productId },
    },
    {
      returnDocument: "after",
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
