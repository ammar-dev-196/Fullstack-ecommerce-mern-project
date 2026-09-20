import { CiHeart } from "react-icons/ci";
import { ImEnlarge } from "react-icons/im";
import { IoIosGitCompare } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router";

function ProductCard() {
  return (
    // <!-- Main Product Card Container -->
    <div class="max-w-70 bg-white rounded-md border-2 border-gray-100  overflow-hidden font-sans">
      {/* <!-- Image Showcase Section with Action Overlays --> */}

      <div class="relative group bg-gray-50 overflow-hidden">
        {/* <!-- Product Main Image --> */}
        <Link to={"/product/demo"}>
          <img
            src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478252/imgi_61_1788000104097_-original-imagtc5fz9spysyk.webp"
            alt="Product front"
            className="w-full h-60 object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
          />

          {/* 2. Secondary / Hover Image */}
          <img
            src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478256/imgi_62_1788000104097_-original-imah4xe6cff8cejm.webp"
            alt="Product back/hover"
            className="w-full h-60 object-contain absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
          />

          {/* <!-- Promotional Discount Badge (Top Left Corner) --> */}
          <span class="absolute top-3 left-3 bg-[#ff5252] text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
            10%
          </span>
        </Link>

        {/* <!-- Floating Action Quick-Links Sidebar (Right-Aligned Column) --> */}
        <div class="absolute top-0 right-3  flex flex-col gap-2 mt-5 opacity-0 group-hover:opacity-100 group-hover:top-[15] transition-all duration-500">
          {/* <!-- Zoom Toggle Feature Icon Button --> */}
          <button
            type="button"
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md hover:bg-gray-50 hover:text-[#ff5252] opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out focus:outline-none cursor-pointer"
          >
            <ImEnlarge size={15} />
          </button>

          {/* <!-- Wishlist Button --> */}
          <button
            type="button"
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md hover:bg-gray-50 hover:text-[#ff5252] opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500  ease-out focus:outline-none cursor-pointer"
          >
            <CiHeart size={20} />
          </button>

          {/* <!-- Compare / Swap Variations Tool Feature Icon Button --> */}
          {/* <button class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md hover:bg-gray-50 hover:text-red-500 transition-colors focus:outline-none">
            <IoIosGitCompare />
          </button> */}
        </div>
      </div>

      {/* <!-- Product Metadata Details Section --> */}
      <div class="p-4 flex flex-col gap-2">
        {/* <!-- Brand Title Label --> */}
        <span class="text-sm font-medium text-gray-400 tracking-wide">
          RNN Saree
        </span>

        {/* <!-- Product Main Headline --> */}
        <Link to="/product/demo">
          <h3 class="text-base font-semibold text-gray-800 line-clamp-1">
            Rnn Saree New Pakhi lata
          </h3>
        </Link>

        {/* <!-- Customer Reviews Star Rating --> */}
        <div class="flex flex-row items-center gap-2">
          <span class="text-sm flex items-center text-[#171717] gap-1">
            Rating:
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
          </span>
        </div>

        {/* <!-- Pricing Row Info Container --> */}
        <div class="flex items-center justify-between mt-1">
          {/* <!-- Strikethrough Original Retail Value --> */}
          <span class="text-sm text-gray-400 line-through">$1,999.00</span>
          {/* <!-- Markdown Promo Sale Value --> */}
          <span class="text-base font-bold text-[#ff5252]">$1,250.00</span>
        </div>

        {/* <!-- Add to cart Button --> */}
        <Link
          to="#"
          class="w-full mt-3 border border-[#ff5252] text-[#ff5252] font-semibold text-xs tracking-wider uppercase py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#ff5252] hover:text-white active:scale-[0.98] focus:outline-none"
        >
          <MdOutlineShoppingCart size={20} />
          Add To Cart
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
