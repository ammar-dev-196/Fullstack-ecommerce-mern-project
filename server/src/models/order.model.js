import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    priceAtPurchase: {
      type: Number,
      required: true,
    },
  },
  { _id: false },
);

const shippingAddressSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phoneNo: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    stateOrProvince: { type: String, required: true },
    zipcode: { type: String, default: "" },
    country: { type: String, required: true },
  },
  { _id: false },
);

const pricingSummarySchema = new mongoose.Schema(
  {
    itemsSubtotal: { type: Number, required: true },
    shippingMethodTitle: { type: String, required: true },
    shippingCost: { type: Number, required: true },
    taxTitle: { type: String, required: true },
    taxAmount: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
  },
  { _id: false },
);

const paymentSchema = new mongoose.Schema(
  {
    paymentType: { type: String, required: true },
    paymentId: { type: String, required: true },
    paymentStatus: {
      type: String,
      required: true,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
    },
  },
  { _id: false },
);

const orderSchema = new mongoose.Schema(
  {
    orderNo: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderStatus: {
      type: String,
      required: true,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    items: [orderItemSchema],
    shippingAddress: {
      type: shippingAddressSchema,
      required: true,
    },
    pricingSummary: {
      type: pricingSummarySchema,
      required: true,
    },
    payment: {
      type: paymentSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
