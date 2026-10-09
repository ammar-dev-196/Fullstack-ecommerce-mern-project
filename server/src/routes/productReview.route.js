import { Router } from "express";
import { auth, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createProductReview,
  getAllProductReviews,
  updateProductReview,
  deleteProductReview,
} from "../controllers/productReview.controller.js";

const paymentMethodRouter = Router();
paymentMethodRouter.use(auth);

paymentMethodRouter
  .route("/")
  .post(isAdmin, createProductReview)
  .get(isAdmin, getAllProductReviews);

paymentMethodRouter
  .route("/:productReviewId")
  .patch(isAdmin, updateProductReview)
  .delete(isAdmin, deleteProductReview);

export default paymentMethodRouter;
