import Category from "../models/category.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose from "mongoose";

/**
 * Add category data
 * @route POST /api/v1/categories
 * @returns {object} An object containing created category data
 */
export const createCategory = asyncHandler(async (request, response) => {
  const { title, parentCategory, slug, isActive } = request.body;

  if (!title || !slug) {
    throw new ApiError(400, "Title and slug are required fields");
  }

  const category = await Category.create({
    title,
    parentCategory,
    slug,
    isActive,
  });

  return response
    .status(201)
    .json(new ApiResponse(201, category, "Category created successfully"));
});

/**
 * Get All categories data
 * @route POST /api/v1/categories
 * @returns {object} An object containing all category data
 */

export const getCategories = asyncHandler(async (request, response) => {
  const category = await Category.find();

  if (!category) {
    throw new ApiError(404, "Categories not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, category, "Categories fetched successfully"));
});

/**
 * Update categories data
 * @route POST /api/v1/categories/:categoryId
 * @returns {object} An object containing updated category data
 */

export const updateCategory = asyncHandler(async (request, response) => {
  const { categoryId } = request.params;

  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    throw new ApiError(400, "Invalid category ID format");
  }

  const updatedCategory = await Category.findByIdAndUpdate(
    categoryId,
    {
      $set: request.body,
    },
    {
      returnDocument: "after",
      runValidators: true,
    },
  );

  if (!updatedCategory) {
    throw new ApiError(404, "Category not found");
  }

  return response
    .status(200)
    .json(
      new ApiResponse(200, updatedCategory, "Category updated successfully"),
    );
});

/**
 * Delete category data
 * @route POST /api/v1/categories/:categoryId
 * @returns {null} Null object
 */

export const deleteCategory = asyncHandler(async (request, response) => {
  const { categoryId } = request.params;

  const category = await Category.findByIdAndDelete(categoryId);

  if (!category) {
    throw new ApiError(404, "Category not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, null, "Category deleted successfully"));
});
