import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import paymentMethod from "../models/paymentMethod.model.js";
import mongoose from "mongoose";

/**
 * Add Payment Method data
 * @route POST /api/v1/payment-methods
 * @returns {object} An object containing created payment method data
 */

export const createPaymentMethod = asyncHandler(async (request, response) => {
  const { title, paymentType, instruction, isActive } = request.body;

  if (!title || !paymentType) {
    throw new ApiError(400, "Title and paymentType are required");
  }

  const newPaymentMethod = await paymentMethod.create({
    title,
    paymentType,
    instruction,
    isActive,
  });

  return response
    .status(201)
    .json(
      new ApiResponse(
        201,
        newPaymentMethod,
        "Payment method created successfully",
      ),
    );
});

/**
 * Get All payment method data
 * @route GET /api/v1/payment-methods
 * @returns {object} An object containing all payment method data
 */

export const getPaymentMethods = asyncHandler(async (request, response) => {
  const paymentMethods = await paymentMethod.find();

  if (!paymentMethods) {
    throw new ApiError(404, "Payment methods not found");
  }

  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        paymentMethods,
        "Payment methods fetched successfully",
      ),
    );
});

/**
 * Update payment method data
 * @route PATCH /api/v1/payment-methods/:paymentMethodId
 * @returns {object} An object containing updated product data
 */

export const updatePaymentMethod = asyncHandler(async (request, response) => {
  const { paymentMethodId } = request.params;

  if (!mongoose.Types.ObjectId.isValid(paymentMethodId)) {
    throw new ApiError(400, "Invalid category ID format");
  }

  const updatedPaymentMethod = await paymentMethod.findByIdAndUpdate(
    paymentMethodId,
    {
      $set: request.body,
    },
    {
      returnDocument: "after",
      runValidators: true,
    },
  );

  if (!updatedPaymentMethod) {
    throw new ApiError(404, "Payment method not found");
  }

  return response
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedPaymentMethod,
        "Payment method updated successfully",
      ),
    );
});

/**
 * Delete payment method data
 * @route DELETE /api/v1/payment-methods/:paymentMethodId
 * @returns {null} Null object
 */
export const deletePaymentMethod = asyncHandler(async (request, response) => {
  const { paymentMethodId } = request.params;

  const deletedPaymentMethod =
    await paymentMethod.findByIdAndDelete(paymentMethodId);

  if (!deletedPaymentMethod) {
    throw new ApiError(404, "Payment method not found");
  }

  return response
    .status(200)
    .json(new ApiResponse(200, null, "Payment method deleted successfully"));
});
