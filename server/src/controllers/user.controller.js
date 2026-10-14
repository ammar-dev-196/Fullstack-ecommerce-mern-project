import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendingEmail from "../config/email.js";
import verificationEmail from "../helper/VerificationEmailTemplate.js";
import { uploadOnCloudinary } from "../utils/fileUpload.cloudinary.js";
import { v2 as cloudinary } from "cloudinary";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

/**
 * Generate Access and Refresh Tokens
 * @param {*} userId The ID of the user for whom the tokens are being generated
 * @returns {Object} An object containing the access token and refresh token
 */

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = jwt.sign(
      {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      process.env.ACCESS_TOKEN_SECRET_KEY,
      {
        expiresIn: "1h",
      },
    );

    const refreshToken = jwt.sign(
      {
        _id: user._id,
      },
      process.env.REFRESH_TOKEN_SECRET_KEY,
      {
        expiresIn: "7d",
      },
    );

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh token",
    );
  }
};

/**
 * User Registration Controller
 * @asyncHandler is used to handle asynchronous operations and errors in Express routes.
 * @param {Object} request - The Express request object containing user registration data.
 * @param {Object} response - The Express response object used to send the response.
 * @returns {Object} - A JSON response containing the registered user data and a success message.
 */

export const registerUser = asyncHandler(async (request, response) => {
  const { username, email, password } = request.body;

  if (!username || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser && existingUser.isEmailVerified == true) {
    throw new ApiError(409, "User already registered with this email address");
  }

  // generating 6 digit verification code
  const verificationCode = Math.floor(
    100000 + Math.random() * 900000,
  ).toString();

  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    email,
    password: hashPassword,
    otp: verificationCode,
    otpExpires: Date.now() + 600000,
  });

  const userCreated = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  if (!userCreated) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  // Send account verification email
  await sendingEmail({
    sendTo: email,
    subject: "Email verification from Ecommerce App",
    text: "",
    html: verificationEmail(username, verificationCode),
  });

  return response
    .status(201)
    .json(new ApiResponse(201, userCreated, "User registered successfully"));
});

/**
 * Verify Email Controller
 * @asyncHandler is used to handle asynchronous operations and errors in Express routes.
 * @param {*} request - The Express request object containing the email and OTP for verification.
 * @param {*} response - The Express response object used to send the response.
 * @returns {Object} - A JSON response indicating the result of the email verification process.
 */
export const verifyEmail = asyncHandler(async (request, response) => {
  const { email, otp } = request.body;

  if (!email || !otp) {
    throw new ApiError(400, "Email and OTP are required!");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  if (user.otp !== otp) {
    throw new ApiError(400, "Invalid OTP");
  }

  if (user.otpExpires < Date.now()) {
    throw new ApiError(400, "OTP has expired");
  }

  user.isEmailVerified = true;
  user.otp = null;
  user.otpExpires = null;
  user.status = "active";

  await user.save();

  const userVerified = await User.findById(user._id).select(
    "-password -refreshToken -otp -otpExpires",
  );

  return response
    .status(200)
    .json(new ApiResponse(200, userVerified, "Email verified successfully"));
});

/**
 * Login Controller
 * @asyncHandler is used to handle asynchronous operations and errors in Express routes.
 * @param {*} request - The Express request object containing the login credentials.
 * @param {*} response - The Express response object used to send the response.
 * @returns {Object} - A JSON response indicating the result of the login process.
 */
export const loginUser = asyncHandler(async (request, response) => {
  const { username, email, password } = request.body;

  if (!username && !email) {
    throw new ApiError(400, "Username or email is required");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(400, "User does not exist");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  if (!user.isEmailVerified) {
    throw new ApiError(400, "Email is not verified");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id,
  );

  // Updating the user's refresh token in the database
  user.refreshToken = refreshToken;

  // Update last login time
  user.lastLoginAt = new Date();
  await user.save();

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  const cookiesOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  };

  return response
    .status(200)
    .cookie("accessToken", accessToken, cookiesOptions)
    .cookie("refreshToken", refreshToken, cookiesOptions)
    .json(
      new ApiResponse(
        200,
        {
          accessToken,
          refreshToken,
          user: loggedInUser,
        },
        "User logged in successfully",
      ),
    );
});

/**
 * Logout Controller
 * @asyncHandler is used to handle asynchronous operations and errors in Express routes.
 * @param {*} request - The Express request object containing the user information.
 * @param {*} response - The Express response object used to send the response.
 * @returns {Object} - A JSON response indicating the result of the logout process.
 */
export const logoutUser = asyncHandler(async (request, response) => {
  await User.findByIdAndUpdate(
    request.user._id,
    {
      $set: { refreshToken: null },
    },
    {
      returnDocument: "after",
    },
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return response
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User loggedOut"));
});

/**
 * Update User Avatar Controller
 * @asyncHandler is used to handle asynchronous operations and errors in Express routes.
 * @param {*} request - The Express request object containing the new avatar file.
 * @param {*} response - The Express response object used to send the response.
 * @returns {Object} - A JSON response indicating the result of the avatar update process.
 */

export const updateUserAvatar = asyncHandler(async (request, response) => {
  const userExistingAvatar = await User.findById(request.user?._id);

  if (userExistingAvatar?.avatar) {
    // Delete the existing avatar from Cloudinary
    const publicId = userExistingAvatar.avatar.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(publicId);
  }

  const avatarLocalPath = request.file?.path;
  // const avatarLocalPath = request.files?.avatar[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Error while uploading");
  }

  const user = await User.findByIdAndUpdate(
    request.user?._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    {
      returnDocument: "after",
    },
  ).select("-password");

  return response
    .status(200)
    .json(new ApiResponse(200, user, "Avatar updated successfully"));
});

/**
 * Update User Password Controller
 * @asyncHandler is used to handle asynchronous operations and errors in Express routes.
 * @param {*} request - The Express request object containing the old and new passwords.
 * @param {*} response - The Express response object used to send the response.
 * @returns {Object} - A JSON response indicating the result of the password update process.
 */

export const updateUserPassword = asyncHandler(async (request, response) => {
  const { oldPassword, newPassword } = request.body || {};

  if (!oldPassword || !newPassword) {
    throw new ApiError(400, "Old password and new password are required");
  }

  const user = await User.findById(request.user?._id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);

  if (!isOldPasswordValid) {
    throw new ApiError(400, "Invalid old password");
  }

  const salt = await bcrypt.genSalt(10);

  const hashedNewPassword = await bcrypt.hash(newPassword, salt);

  user.password = hashedNewPassword;
  await user.save();

  return response
    .status(200)
    .json(new ApiResponse(200, {}, "Password updated successfully"));
});
