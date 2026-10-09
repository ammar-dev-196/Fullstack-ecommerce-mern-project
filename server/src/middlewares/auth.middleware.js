import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

/**
 * Authentication Middleware
 * @asyncHandler is used to handle asynchronous operations and errors in Express routes.
 * @param {*} req - The Express request object containing the access token.
 * @param {*} next - The next middleware function in the Express request-response cycle.
 * @returns {Object} - Proceeds to the next middleware if authentication is successful, otherwise throws an ApiError.
 */

export const auth = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    console.log(token);

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken",
    );

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});

/**
 * Admin Authorization Middleware
 * Rules: This MUST run after the 'admin' middleware has successfully populated 'req.user'
 */
export const isAdmin = asyncHandler(async (req, _, next) => {
  if (!req.user) {
    throw new ApiError(401, "Authentication required before role verification");
  }

  if (req.user.role !== "admin") {
    throw new ApiError(403, "Access denied. Administrator privileges required");
  }

  next();
});
