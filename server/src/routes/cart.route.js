import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  addToCart,
  getUserAllCartItems,
  clearCart,
  removeFromCart,
  updateCartItemQuantity,
} from "../controllers/cart.controller.js";

const cartRouter = Router();
cartRouter.use(auth);

cartRouter.route("/").get(getUserAllCartItems).delete(clearCart);

cartRouter.route("/items").post(addToCart).patch(updateCartItemQuantity);

cartRouter.route("/items/:productId").delete(removeFromCart);

export default cartRouter;
