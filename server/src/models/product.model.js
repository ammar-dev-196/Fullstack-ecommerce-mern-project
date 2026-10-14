import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
    },
    shortDescription: {
      type: String,
    },
    longDescription: {
      type: String,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      // required: [true, "Category is required"],
      default: null,
    },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      default: null,
    },
    regularPrice: {
      type: Number,
      required: [true, "Regular price is required"],
    },
    salePrice: {
      type: Number,
      default: null,
    },
    unitPrice: {
      type: Number,
      default: null,
    },
    sku: {
      type: String,
      default: null,
    },
    stockQuantity: {
      type: Number,
      required: [true, "Stock quantity is required"],
    },
    featuredImage: {
      type: String,
      required: [true, "Featured Image is required"],
      // default: null,
    },
    galleryImages: {
      type: [String],
      default: [],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
