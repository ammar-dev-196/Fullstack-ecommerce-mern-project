import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import Brand from "../models/brand.model.js";
import mongoose from "mongoose";
import { uploadOnCloudinary } from "../utils/fileUpload.cloudinary.js";
import { v2 as cloudinary } from "cloudinary";

/**
 * Add brand data
 * @route POST /api/v1/brands
 * @returns {object} An object containing created brand data
 */

export const createBrand = asyncHandler(async (request, response) => {
  const { name, slug } = request.body;

  if (!name || !slug) {
    throw new ApiError(400, "Name and slug are required fields");
  }

  const existinglogo = await Brand.findById(request.user?._id);

  if (existinglogo?.logoUrl) {
    const publicId = existinglogo.logoUrl.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(publicId);
  }

  const logoLocalPath = request.file?.path;

  if (!logoLocalPath) {
    throw new ApiError(400, "logoUrl is required");
  }

  const logoUrl = await uploadOnCloudinary(logoLocalPath);

  if (!logoUrl) {
    throw new ApiError(400, "Error while uploading");
  }

  const brand = await Brand.create({
    name,
    slug,
    logoUrl: logoUrl.url,
  });

  return response
    .status(201)
    .json(new ApiResponse(201, brand, "Brand created successfully"));
});

/**
 * Get all brand data
 * @route GET /api/v1/brands
 * @returns {object} An object containing all brand data
 */

export const getBrands = asyncHandler(async (request, response) => {
  const brand = await Brand.find();

  if (!brand) {
    throw new ApiError(404, "Brand not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, brand, "Brand fetched successfully"));
});

/**
 * Update brand data
 * @route PATCH /api/v1/brands/:brandId
 * @returns {object} An object containing updated brand data
 */

export const updateBrand = asyncHandler(async (request, response) => {
  const { brandId } = request.params;

  if (!mongoose.Types.ObjectId.isValid(brandId)) {
    throw new ApiError(400, "Invalid brand ID format");
  }

  const existinglogo = await Brand.findById(request.user?._id);

  if (existinglogo?.logoUrl) {
    const publicId = existinglogo.logoUrl.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(publicId);
  }

  const logoLocalPath = request.file?.path;

  if (!logoLocalPath) {
    throw new ApiError(400, "logoUrl is required");
  }

  const logoUrl = await uploadOnCloudinary(logoLocalPath);

  if (!logoUrl) {
    throw new ApiError(400, "Error while uploading");
  }

  const updatedBrand = await Brand.findByIdAndUpdate(
    brandId,
    {
      $set: {
        ...request.body,
        logoUrl: logoUrl.url,
      },
    },
    {
      returnDocument: "after",
      runValidators: true,
    },
  );

  if (!updatedBrand) {
    throw new ApiError(404, "Brand not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, updatedBrand, "Brand updated successfully"));
});

/**
 * Delete brand data
 * @route DELETE /api/v1/brands/:brandId
 * @returns {null} Null object
 */

export const deleteBrand = asyncHandler(async (request, response) => {
  const { brandId } = request.params;

  const brand = await Brand.findById(brandId);

  if (!brand) {
    throw new ApiError(404, "Brand not found");
  }

  await Brand.findByIdAndDelete(brandId);

  return response
    .status(200)
    .json(new ApiResponse(200, null, "Brand deleted successfully"));
});
