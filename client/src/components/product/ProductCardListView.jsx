import { CiHeart } from "react-icons/ci";
import { ImEnlarge } from "react-icons/im";
import { IoIosGitCompare } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router";

function ProductCardListView() {
  return (
    // <!-- Main Product Card Container -->
    <div className="flex flex-row w-full items-center h-100 mb-2 bg-[#f1f1f1] p-2 shadow-sm rounded-md border border-gray-100 font-sans">
      {/* <!-- Image Showcase Section with Action Overlays --> */}
      <div className="w-[30%] h-full relative group bg-gray-50 overflow-hidden rounded-md border">
        {/* <!-- Product Main Image --> */}

        <img
          src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478252/imgi_61_1788000104097_-original-imagtc5fz9spysyk.webp"
          alt="Product front"
          className="w-full h-full transition-all duration-500 group-hover:opacity-0 group-hover:scale-105  object-contain"
        />

        {/* 2. Secondary / Hover Image */}
        <img
          src="https://res.cloudinary.com/hyno2enn/image/upload/v1789478256/imgi_62_1788000104097_-original-imah4xe6cff8cejm.webp"
          alt="Product back/hover"
          className="w-full h-full object-contain absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
        />

        {/* <!-- Promotional Discount Badge (Top Left Corner) --> */}
        <span className="absolute top-3 left-3 bg-[#ff5252] text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
          10%
        </span>

        {/* <!-- Floating Action Quick-Links Sidebar (Right-Aligned Column) --> */}
        <div className="absolute top-3 right-3  flex flex-col gap-2 mt-5 opacity-0 group-hover:opacity-100 group-hover:top-[15] transition-all duration-500">
          {/* <!-- Zoom Toggle Feature Icon Button --> */}
          <button
            type="button"
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md hover:bg-gray-50 hover:text-[#ff5252] opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out focus:outline-none"
          >
            <ImEnlarge size={15} />
          </button>
          {/* <!-- Wishlist Button --> */}
          <button
            type="button"
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md hover:bg-gray-50 hover:text-[#ff5252] opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500  ease-out focus:outline-none"
          >
            <CiHeart size={20} />
          </button>

          {/* <!-- Compare Icon Button --> */}
          {/* <button class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md hover:bg-gray-50 hover:text-red-500 transition-colors focus:outline-none">
              <IoIosGitCompare />
            </button> */}
        </div>
      </div>

      {/* <!-- Product Metadata Details Section --> */}
      {/* <div className=""> */}
      <div className="w-[70%] p-4 flex flex-col justify-start gap-4">
        {/* <!-- Brand Title Label --> */}
        <p className=" text-sm font-medium text-gray-400 tracking-wide">
          RNN Saree
        </p>

        {/* <!-- Product Main Headline --> */}
        <h3 className="text-wrap text-base text-[18px] text-gray-800">
          Rnn Saree New Pakhi lata Rnn Saree New Pakhi lata Rnn Saree New Pakhi
          lata
        </h3>

        {/* <!-- Customer Reviews Star Rating --> */}
        <div className="flex flex-row items-center gap-2">
          <span className="text-sm flex items-center text-[#171717] gap-1">
            Rating:
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
          </span>
        </div>

        {/* <!-- Pricing Row Info Container --> */}
        <div className="w-40 flex items-center justify-between mt-1">
          {/* <!-- Strikethrough Original Retail Value --> */}
          <span className="text-sm text-gray-400 line-through">$1,999.00</span>
          {/* <!-- Markdown Promo Sale Value --> */}
          <span class="text-base font-bold text-[#ff5252]">$1,250.00</span>
        </div>

        {/* <!-- Purchase Fulfillment Submission Handler Callout Action Button --> */}
        {/* <Link to="#" className="w-40"> */}
        <Link
          to="#"
          className="w-40 mt-3 border border-[#ff5252] text-[#ff5252] font-semibold text-xs tracking-wider uppercase py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#ff5252] hover:text-white active:scale-[0.98] focus:outline-none"
        >
          <MdOutlineShoppingCart size={20} />
          Add To Cart
        </Link>
        {/* </Link> */}
      </div>
    </div>
    // </div>
  );
}

export default ProductCardListView;
