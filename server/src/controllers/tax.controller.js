import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import Tax from "../models/tax.model.js";

/**
 * Add tax data
 * @route POST /api/v1/taxes
 * @returns {object} An object containing created product data
 */

export const createTax = asyncHandler(async (request, response) => {
  const { title, taxType, rate, isActive } = request.body;

  if (!title || !taxType || !rate) {
    throw new ApiError(400, "Title, tax type and rate fields are required!");
  }

  const newTax = await Tax.create({
    title,
    taxType,
    rate,
    isActive,
  });

  return response
    .status(201)
    .json(new ApiResponse(201, newTax, "Tax created successfully"));
});

/**
 * Get all tax data
 * @route GET /api/v1/taxes
 * @returns {object} An object containing all product data
 */

export const getAllTaxes = asyncHandler(async (request, response) => {
  const { id } = request.params;

  const taxes = await Tax.find(id);

  if (!taxes) {
    throw new ApiError(404, "Taxes not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, taxes, "Taxes fetched successfully"));
});

/**
 * Update tax data
 * @route PATCH /api/v1/taxes/:taxId
 * @returns {object} An object containing updated product data
 */

export const updateTax = asyncHandler(async (request, response) => {
  const { id } = request.params;
  const { title, taxType, rate, isActive } = request.body;

  if (!title || !taxType || !rate) {
    throw new ApiError(400, "Title, tax type and rate fields are required!");
  }

  const updatedTax = await Tax.findByIdAndUpdate(
    id,
    { title, taxType, rate, isActive },
    { new: true },
  );

  if (!updatedTax) {
    throw new ApiError(404, "Tax not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, updatedTax, "Tax updated successfully"));
});

/**
 * Delete tax data
 * @route DELETE /api/v1/taxes/:taxId
 * @returns {null} Null object
 */

export const deleteTax = asyncHandler(async (request, response) => {
  const { id } = request.params;

  const deletedTax = await Tax.findByIdAndDelete(id);

  if (!deletedTax) {
    throw new ApiError(404, "Tax not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, deletedTax, "Tax deleted successfully"));
});
