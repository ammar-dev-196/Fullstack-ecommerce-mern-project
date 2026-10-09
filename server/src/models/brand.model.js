import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      default: null,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true },
);

const Brand = mongoose.model("Brand", brandSchema);

export default Brand;
