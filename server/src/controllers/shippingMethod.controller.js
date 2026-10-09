import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import shippingMethod from "../models/shippingMethod.model.js";

/**
 * Add shipping method data
 * @route POST /api/v1/shipping-methods
 * @returns {object} An object containing created product data
 */

export const createShippingMethod = asyncHandler(async (request, response) => {
  const { title, shippingType, rate, isActive } = request.body;

  if (!title || !shippingType || !rate) {
    throw new ApiError(400, "Title, shippingType and rate are required fields");
  }
  const newShippingMethod = await shippingMethod.create({
    title,
    shippingType,
    rate,
    isActive,
  });
  return response
    .status(201)
    .json(
      new ApiResponse(
        201,
        newShippingMethod,
        "Shipping method created successfully",
      ),
    );
});

/**
 * Get all shipping method data
 * @route GET /api/v1/shipping-methods
 * @returns {object} An object containing all product data
 */

export const getAllShippingMethods = asyncHandler(async (request, response) => {
  // const { id } = request.params;
  // const shippingMethods = await shippingMethod.findById(id);

  const shippingMethod = await shippingMethod.find();

  if (!shippingMethod) {
    throw new ApiError(404, "Shipping methods not found");
  }
  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        shippingMethod,
        "Shipping methods retrieved successfully",
      ),
    );
});

/**
 * Update shipping method data
 * @route PATCH /api/v1/shipping-methods/:shippingMethodId
 * @returns {object} An object containing updated product data
 */

export const updateShippingMethod = asyncHandler(async (request, response) => {
  const { shippingMethodId } = request.params;

  if (!mongoose.Types.ObjectId.isValid(shippingMethodId)) {
    throw new ApiError(400, "Invalid shipping method ID format");
  }

  const updatedShippingMethod = await shippingMethod.findByIdAndUpdate(
    shippingMethodId,
    {
      $set: request.body,
    },
    {
      returnDocument: "after",
      runValidators: true,
    },
  );

  if (!updatedShippingMethod) {
    throw new ApiError(404, "Shipping method not found");
  }

  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedShippingMethod,
        "Shipping method updated successfully",
      ),
    );
});

/**
 * Delete shipping method data
 * @route DELETE /api/v1/shipping-methods/:shippingMethodId
 * @returns {null} Null object
 */

export const deleteShippingMethod = asyncHandler(async (request, response) => {
  const { shippingMethodId } = request.params;

  const deletedShippingMethod =
    await shippingMethod.findByIdAndDelete(shippingMethodId);

  if (!deletedShippingMethod) {
    throw new ApiError(404, "Shipping method not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, null, "Shipping method deleted successfully"));
});
