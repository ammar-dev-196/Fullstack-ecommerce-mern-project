import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(
  express.json({
    limit: "16kb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  }),
);

app.use(express.static("public"));

app.use(cookieParser());

// app.use(morgan("dev"));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

/**
 * Import routes
 */

import userRouter from "./routes/users.route.js";
import productRouter from "./routes/product.route.js";
import categoryRouter from "./routes/category.route.js";
import brandRouter from "./routes/brand.route.js";
import orderRouter from "./routes/order.route.js";
import cartRouter from "./routes/cart.route.js";
import wishlistRouter from "./routes/wishlist.route.js";
import productReviewRouter from "./routes/productReview.route.js";
import paymentMethodRouter from "./routes/paymentMethod.route.js";
import shippingMethodRouter from "./routes/shippingMethod.route.js";
import taxRouter from "./routes/tax.route.js";

/**
 * Routes declaration.
 */

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/brands", brandRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/wishlist", wishlistRouter);
app.use("/api/v1/product-reviews", productReviewRouter);
app.use("/api/v1/payment-methods", paymentMethodRouter);
app.use("/api/v1/shipping-methods", shippingMethodRouter);
app.use("/api/v1/taxes", taxRouter);

export { app };
