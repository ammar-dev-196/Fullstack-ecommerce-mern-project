import Category from "../models/category.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

/**
 * Create Category Controller
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
 * Get All Categories Controller
 */
export const getAllCategories = asyncHandler(async (request, response) => {
  const { id } = request.params;

  const category = await Category.findById(id);

  if (!category) {
    throw new ApiError(404, "Category not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, category, "Category fetched successfully"));
});

/**
 * Update Category Controller
 */
export const updateCategory = asyncHandler(async (request, response) => {
  const { id } = request.params;
  const { title, parentCategory, slug, isActive } = request.body;

  const category = await Category.findById(id);

  if (!category) {
    throw new ApiError(404, "Category not found");
  }

  const updatedCategory = await Category.findByIdAndUpdate(
    id,
    { title, parentCategory, slug, isActive },
    { new: true },
  );

  return response
    .status(200)
    .json(
      new ApiResponse(200, updatedCategory, "Category updated successfully"),
    );
});

/**
 * Delete Category Controller
 */

export const deleteCategory = asyncHandler(async (request, response) => {
  const { id } = request.params;

  const category = await Category.findByIdAndDelete(id);

  if (!category) {
    throw new ApiError(404, "Category not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, null, "Category deleted successfully"));
});
