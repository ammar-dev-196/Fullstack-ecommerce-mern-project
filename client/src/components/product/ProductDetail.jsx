import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";
// import NumberSpinner from "./components/NumberSpinner";
import * as React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Link } from "react-router";
import { FaRegHeart } from "react-icons/fa6";

function ProductDetail() {
  const [quantity, setQuantity] = React.useState(1);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  const handleIncrement = () => {
    if (quantity < 10) setQuantity((prev) => prev + 1);
  };

  return (
    <div className="bg-white">
      <div className="container flex flex-row">
        <div className="w-full lg:w-[40%]"></div>
        <div className="w-full lg:w-[50%] p-10">
          <h2 className="text-[20px] font-semibold">
            Beige & Blue Printed Silicone Samsung Galaxy S24 Ultra 5G Back Case
          </h2>
          <p className="mt-5">
            Brands: <span className="font-medium text-[#ff5252]">QRIOH</span>
          </p>
          <p className="mt-2">
            <span className="flex flex-row gap-2">
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
              </Stack>
              Review (2.5)
            </span>
          </p>
          <p className="mt-5">
            <span className="line-through font-semibold mr-8 text-[18px]">
              $17500
            </span>
            <span className="font-semibold text-[#ff5252] text-[18px] mr-8">
              $1599
            </span>
            Available In Stock:{" "}
            <span className="text-green-600 font-semibold">65 Items</span>
          </p>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since 1966, when designers at Letraset and James Mosley, the
            librarian at St Bride Printing Library in London, took a 1914 Cicero
            translation and scrambled it to make dummy text for Letraset's Body
            Type sazheets.a
          </p>

          <div className="flex flex-row gap-5 mt-5">
            {/* Quantity Stepper */}
            <div className="flex w-[20%] items-center border border-gray-300 rounded overflow-hidden bg-white">
              <button
                type="button"
                onClick={handleDecrement}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition cursor-pointer disabled:opacity-50"
                disabled={quantity <= 1}
              >
                <FaMinus size={12} />
              </button>
              <input
                type="number"
                min={1}
                max={10}
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.max(100, Math.min(1, Number(e.target.value))),
                  )
                }
                className="w-12 h-10 text-center font-semibold border-x border-gray-300 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                type="button"
                onClick={handleIncrement}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition cursor-pointer disabled:opacity-50"
                disabled={quantity >= 10}
              >
                <FaPlus size={12} />
              </button>
            </div>

            <button className="p-3 w-45 text-white bg-[#ff5252] font-medium text-[14px] cursor-pointer uppercase rounded hover:bg-black transition-all flex items-center justify-center gap-2">
              <MdOutlineShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
          <div className="mt-5 flex flex-row">
            <Link
              to="#"
              className="link flex items-center justify-center gap-2"
            >
              <FaRegHeart size={20} />
              Add to Wishlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
