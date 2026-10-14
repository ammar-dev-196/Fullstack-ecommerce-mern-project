import mongoose from "mongoose";

const paymentMethodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    paymentType: {
      type: String,
      required: true,
    },
    instruction: {
      type: String,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const paymentMethod = mongoose.model("paymentMethod", paymentMethodSchema);

export default paymentMethod;
