import { Router } from "express";
import { auth, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

const categoryRouter = Router();
// categoryRouter.use(auth);

categoryRouter
  .route("/")
  .post(auth, isAdmin, createCategory)
  .get(getCategories);

categoryRouter
  .route("/:categoryId")
  .patch(auth, isAdmin, updateCategory)
  .delete(auth, isAdmin, deleteCategory);

export default categoryRouter;
