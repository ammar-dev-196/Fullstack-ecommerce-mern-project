import { Router } from "express";
import { auth, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

const categoryRouter = Router();
categoryRouter.use(auth);

categoryRouter
  .route("/")
  .post(isAdmin, createCategory)
  .get(isAdmin, getAllCategories);

categoryRouter
  .route("/:categoryId")
  .patch(isAdmin, updateCategory)
  .delete(isAdmin, deleteCategory);

export default categoryRouter;
