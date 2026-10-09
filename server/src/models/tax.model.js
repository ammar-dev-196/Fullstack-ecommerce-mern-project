import mongoose from "mongoose";

const taxSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    taxType: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Tax = mongoose.model("Tax", taxSchema);

export default Tax;
