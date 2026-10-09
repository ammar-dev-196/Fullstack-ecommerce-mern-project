import { Router } from "express";
import { auth, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createBrand,
  getAllBrands,
  updateBrand,
  deleteBrand,
} from "../controllers/brand.controller.js";

const brandRouter = Router();
brandRouter.use(auth);

brandRouter.route("/").post(isAdmin, createBrand).get(isAdmin, getAllBrands);

brandRouter
  .route("/:brandId")
  .patch(isAdmin, updateBrand)
  .delete(isAdmin, deleteBrand);

export default brandRouter;
