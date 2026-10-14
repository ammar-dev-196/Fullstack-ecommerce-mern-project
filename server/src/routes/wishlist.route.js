import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  addToWishlist,
  getWishlistItems,
  removeFromWishlist,
} from "../controllers/wishlist.controller.js";

const wishlistRouter = Router();
wishlistRouter.use(auth);

wishlistRouter.route("/").get(getWishlistItems);

wishlistRouter.route("/items").post(addToWishlist);

wishlistRouter.route("/items/:productId").delete(removeFromWishlist);

export default wishlistRouter;
