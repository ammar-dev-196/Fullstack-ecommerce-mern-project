import { Router } from "express";
import { auth, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createProductReview,
  getProductReviews,
  updateProductReview,
  deleteProductReview,
} from "../controllers/productReview.controller.js";

const productReviewRouter = Router();
productReviewRouter.use(auth);

productReviewRouter
  .route("/")
  .post(isAdmin, createProductReview)
  .get(isAdmin, getProductReviews);

productReviewRouter
  .route("/:productReviewId")
  .patch(isAdmin, updateProductReview)
  .delete(isAdmin, deleteProductReview);

export default productReviewRouter;
