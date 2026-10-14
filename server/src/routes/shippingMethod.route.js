import { Router } from "express";
import { auth, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createShippingMethod,
  getShippingMethods,
  updateShippingMethod,
  deleteShippingMethod,
} from "../controllers/shippingMethod.controller.js";

const shippingMethodRouter = Router();
shippingMethodRouter.use(auth);

shippingMethodRouter
  .route("/")
  .post(isAdmin, createShippingMethod)
  .get(isAdmin, getShippingMethods);

shippingMethodRouter
  .route("/:shippingMethodId")
  .patch(isAdmin, updateShippingMethod)
  .delete(isAdmin, deleteShippingMethod);

export default shippingMethodRouter;
