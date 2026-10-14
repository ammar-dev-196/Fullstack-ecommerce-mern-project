import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import productReview from "../models/productReview.model.js";
import mongoose from "mongoose";

/**
 * Add product review data
 * @route POST /api/v1/product-reviews
 * @returns {object} An object containing created product review data
 */

export const createProductReview = asyncHandler(async (request, response) => {
  const { productId, userId, rating, comment } = request.body;

  if (!productId || !userId || !rating || !comment) {
    throw new ApiError(400, "All fields are required");
  }

  const addedProductReview = await productReview.create({
    productId,
    userId,
    rating,
    comment,
  });

  return response
    .status(201)
    .json(
      new ApiResponse(
        201,
        addedProductReview,
        "Product review created successfully",
      ),
    );
});

/**
 * Get all product review data
 * @route GET /api/v1/product-reviews
 * @returns {object} An object containing all product review data
 */

export const getProductReviews = asyncHandler(async (request, response) => {
  const productReviews = await productReview.find();

  if (!productReviews) {
    throw new ApiError(404, "Product reviews not found");
  }

  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        productReviews,
        "Product reviews fetched successfully",
      ),
    );
});

/**
 * Update product review data
 * @route PATCH /api/v1/product-reviews/:productReviewId
 * @returns {object} An object containing updated product data
 */

export const updateProductReview = asyncHandler(async (request, response) => {
  const { productReviewId } = request.params;

  if (!mongoose.Types.ObjectId.isValid(productReviewId)) {
    throw new ApiError(400, "Invalid product review ID format");
  }

  const updatedProductReview = await productReview.findByIdAndUpdate(
    productReviewId,
    {
      $set: request.body,
    },
    {
      returnDocument: "after",
      runValidators: true,
    },
  );

  if (!updatedProductReview) {
    throw new ApiError(404, "Product review not found");
  }

  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedProductReview,
        "Product review updated successfully",
      ),
    );
});

/**
 * Delete product review data
 * @route DELETE /api/v1/product-reviews/:productReviewId
 * @returns {null} Null object
 */

export const deleteProductReview = asyncHandler(async (request, response) => {
  const { productReviewId } = request.params;

  const deletedProductReview =
    await productReview.findByIdAndDelete(productReviewId);

  if (!deletedProductReview) {
    throw new ApiError(404, "Product review not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, null, "Product review deleted successfully"));
});
