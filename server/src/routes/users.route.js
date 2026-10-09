import { Router } from "express";
import {
  registerUser,
  verifyEmail,
  loginUser,
  logoutUser,
  updateUserAvatar,
  updateUserPassword,
} from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(registerUser);

userRouter.route("/verify-email").post(verifyEmail);

userRouter.route("/login").post(loginUser);

userRouter.route("/logout").post(auth, logoutUser);

userRouter
  .route("/avatar")
  .patch(auth, upload.single("avatar"), updateUserAvatar);

userRouter.route("/change-password").patch(auth, updateUserPassword);

export default userRouter;
