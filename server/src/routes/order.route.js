import { Router } from "express";
import { auth, isAdmin } from "../middlewares/auth.middleware.js";
import { createOrder } from "../controllers/order.controller.js";

const orderRouter = Router();
orderRouter.use(auth);

orderRouter.route("/").get(isAdmin, orderList);

orderRouter.route("/checkout").post(createOrder);

// orderRouter
//   .route("/:orderId")
//   .delete(isAdmin, deleteOrder);

export default orderRouter;
