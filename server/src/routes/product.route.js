import { Router } from "express";
import { auth, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const productRouter = Router();
productRouter.use(auth);

productRouter
  .route("/")
  .post(isAdmin, createProduct)
  .get(isAdmin, getAllProducts);

productRouter
  .route("/:productId")
  .patch(isAdmin, updateProduct)
  .delete(isAdmin, deleteProduct);

export default productRouter;
