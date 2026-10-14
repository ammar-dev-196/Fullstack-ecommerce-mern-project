import { Router } from "express";
import { auth, isAdmin } from "../middlewares/auth.middleware.js";
import {
  createOrder,
  getUserOrders,
  getOrders,
  viewOrderDetails,
} from "../controllers/order.controller.js";

const orderRouter = Router();
orderRouter.use(auth);

orderRouter.route("/checkout").post(createOrder);

orderRouter.route("/user/:userId").get(getUserOrders);

orderRouter.route("/").get(isAdmin, getOrders);

orderRouter.route("/:orderId").get(isAdmin, viewOrderDetails);

export default orderRouter;
