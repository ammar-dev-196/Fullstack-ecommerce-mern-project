import { Router } from "express";
import { auth, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createPaymentMethod,
  getPaymentMethods,
  updatePaymentMethod,
  deletePaymentMethod,
} from "../controllers/paymentMethod.controller.js";

const paymentMethodRouter = Router();
paymentMethodRouter.use(auth);

paymentMethodRouter
  .route("/")
  .post(isAdmin, createPaymentMethod)
  .get(getPaymentMethods);

paymentMethodRouter
  .route("/:paymentMethodId")
  .patch(isAdmin, updatePaymentMethod)
  .delete(isAdmin, deletePaymentMethod);

export default paymentMethodRouter;
