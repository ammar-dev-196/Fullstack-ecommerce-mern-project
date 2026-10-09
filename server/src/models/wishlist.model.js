import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // One wishlist document per user
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Array of references directly targeting the Product collection
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
