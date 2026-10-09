import Product from "../models/product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose from "mongoose";

/**
 * Add product data
 * @route POST /api/v1/products
 * @returns {object} An object containing created product data
 */

export const createProduct = asyncHandler(async (request, response) => {
  const {
    title,
    shortDescription,
    longDescription,
    categoryId,
    brandId,
    regularPrice,
    salePrice,
    unitPrice,
    stockQuantity,
    featuredImage,
    galleryImages,
    isFeatured,
    slug,
  } = request.body;

  if (!title || !regularPrice || !stockQuantity || !slug) {
    throw new ApiError(400, "Fields are required");
  }

  const product = await Product.create({
    title,
    shortDescription,
    longDescription,
    categoryId,
    brandId,
    regularPrice,
    salePrice,
    unitPrice,
    stockQuantity,
    featuredImage,
    galleryImages,
    isFeatured,
    slug,
  });

  return response
    .status(201)
    .json(new ApiResponse(201, product, "Product created successfully"));
});

/**
 * Get all product data
 * @route GET /api/v1/products
 * @returns {object} An object containing all product data
 */

export const getAllProducts = asyncHandler(async (request, response) => {
  // const { id } = request.params;
  // const product = await Product.findById(id);

  const product = await Product.find();

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, product, "Product fetched successfully"));
});

/**
 * Update product data
 * @route PATCH /api/v1/products/:productId
 * @returns {object} An object containing updated product data
 */

export const updateProduct = asyncHandler(async (request, response) => {
  const { productId } = request.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new ApiError(400, "Invalid product ID format");
  }

  const updatedproduct = await Product.findByIdAndUpdate(
    productId,
    {
      $set: request.body,
    },
    {
      returnDocument: "after",
      runValidators: true,
    },
  );

  if (!updatedproduct) {
    throw new ApiError(404, "Product not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, updatedproduct, "Product updated successfully"));
});

/**
 * Delete product data
 * @route DELETE /api/v1/products/:productId
 * @returns {null} Null object
 */

export const deleteProduct = asyncHandler(async (request, response) => {
  const { productId } = request.params;

  const product = await Product.findByIdAndDelete(productId);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, null, "Product deleted successfully"));
});
