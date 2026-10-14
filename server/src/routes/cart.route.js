import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  addToCart,
  getUserCartItems,
  clearCart,
  removeFromCart,
  updateCartItemQuantity,
} from "../controllers/cart.controller.js";

const cartRouter = Router();
cartRouter.use(auth);

cartRouter.route("/").get(getUserCartItems).delete(clearCart);

cartRouter.route("/items").post(addToCart);

cartRouter.route("/items/quantity").patch(updateCartItemQuantity);

cartRouter.route("/items/:productId").delete(removeFromCart);

export default cartRouter;
