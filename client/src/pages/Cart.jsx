import { Link } from "react-router";
import { FaTrashAlt, FaChevronLeft, FaTruck, FaShieldAlt } from "react-icons/fa";
import { MdLaptopMac } from "react-icons/md";

const cartItem = {
  id: 1,
  name: "Diamond Ed Pendant Yellow Gold / 14KT",
  price: 150,
  image:
    "https://res.cloudinary.com/hyno2enn/image/upload/v1789478252/imgi_61_1788000104097_-original-imagtc5fz9spysyk.webp",
  metal: "Rose Gold",
  carat: "18KT",
  qty: 1,
};

const summary = {
  subtotal: 150,
  shipping: 7,
  taxes: 0,
};

const infoItems = [
  {
    icon: <FaTruck size={18} />,
    title: "Free Shipping & Returns :",
    text: "Available on all orders over $99",
  },
  {
    icon: <MdLaptopMac size={18} />,
    title: "Estimated Delivery :",
    text: "Orders are typically dispatched within 24 hours",
  },
  {
    icon: <FaShieldAlt size={18} />,
    title: "Security Policy :",
    text: "Ensuring top-level security for your data and transactions",
  },
];

function Cart() {
  const totalExcl = summary.subtotal + summary.shipping;
  const totalIncl = totalExcl + summary.taxes;

  return (
    <div className="bg-white">
      {/* <!-- Page Title Bar --> */}
      <div className="bg-[#f5f5f5] py-6">
        <div className="container">
          <h1 className="text-2xl font-bold text-[#171717]">Cart</h1>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* <!-- Left : Shopping Cart --> */}
          <div className="lg:w-[64%]">
            <div className="border border-gray-200 rounded-md overflow-hidden">
              {/* <!-- Card Header --> */}
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-[#171717]">
                  Shopping Cart
                </h2>
              </div>

              {/* <!-- Cart Item Row --> */}
              <div className="px-6 py-5 flex items-start gap-5">
                {/* <!-- Product Thumbnail --> */}
                <div className="shrink-0 w-[110px] h-[130px] border border-gray-200 rounded-md p-2 flex items-center justify-center bg-white">
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* <!-- Product Details --> */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-medium text-[#171717] mb-2">
                    {cartItem.name}
                  </h3>
                  <p className="text-[15px] font-semibold text-[#ff5252] mb-2">
                    ${cartItem.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-bold text-[#171717]">
                      Choice Of Metal:
                    </span>{" "}
                    <span className="text-gray-500">{cartItem.metal}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-[#171717]">Carat:</span>{" "}
                    <span className="text-gray-500">{cartItem.carat}</span>
                  </p>
                </div>

                {/* <!-- Quantity Stepper --> */}
                <div className="shrink-0">
                  <input
                    type="number"
                    min="1"
                    defaultValue={cartItem.qty}
                    className="w-16 h-9 border border-gray-300 rounded px-2 text-sm text-center text-[#171717] focus:outline-none focus:border-[#ff5252] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-auto [&::-webkit-inner-spin-button]:appearance-auto"
                  />
                </div>

                {/* <!-- Line Total --> */}
                <div className="shrink-0 w-24 text-right">
                  <span className="text-[15px] font-semibold text-[#ff5252]">
                    ${(cartItem.price * cartItem.qty).toFixed(2)}
                  </span>
                </div>

                {/* <!-- Remove Button --> */}
                <button
                  type="button"
                  className="shrink-0 text-[#171717] hover:text-[#ff5252] transition-colors cursor-pointer"
                  aria-label="Remove item"
                >
                  <FaTrashAlt size={16} />
                </button>
              </div>
            </div>

            {/* <!-- Continue Shopping Link --> */}
            <Link
              to="/"
              className="inline-flex items-center gap-1 mt-4 text-sm text-[#171717] hover:text-[#ff5252] transition-colors"
            >
              <FaChevronLeft size={11} />
              Continue shopping
            </Link>
          </div>

          {/* <!-- Right : Order Summary --> */}
          <div className="lg:w-[36%] flex flex-col gap-6">
            {/* <!-- Summary Card --> */}
            <div className="bg-[#f5f5f5] rounded-md p-6">
              {/* <!-- Totals Rows --> */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">1 Item</span>
                <span className="text-sm font-medium text-[#ff5252]">
                  ${summary.subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">Shipping</span>
                <span className="text-sm font-medium text-[#ff5252]">
                  ${summary.shipping.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-300">
                <span className="text-sm text-gray-600">
                  Total (tax excl.)
                </span>
                <span className="text-sm font-medium text-[#ff5252]">
                  ${totalExcl.toFixed(2)}
                </span>
              </div>

              {/* <!-- Grand Total --> */}
              <div className="flex items-center justify-between py-4">
                <span className="text-lg font-bold text-[#171717]">
                  Total (tax incl.)
                </span>
                <span className="text-lg font-bold text-[#ff5252]">
                  ${totalIncl.toFixed(2)}
                </span>
              </div>

              {/* <!-- Taxes --> */}
              <p className="text-sm text-gray-600 mb-5">
                Taxes:{" "}
                <span className="font-medium text-[#ff5252]">
                  ${summary.taxes.toFixed(2)}
                </span>
              </p>

              {/* <!-- Promo Code --> */}
              <div className="flex gap-3 mb-4">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="flex-1 h-11 px-4 bg-white border border-gray-300 rounded-md text-sm text-[#171717] placeholder:text-gray-400 focus:outline-none focus:border-[#ff5252]"
                />
                <button
                  type="button"
                  className="h-11 px-6 bg-[#ff5252] hover:bg-[#ff3b3b] text-white text-xs font-bold tracking-wider uppercase rounded-md transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>

              {/* <!-- Promo Offer --> */}
              <div className="text-center mb-6">
                <button
                  type="button"
                  className="text-sm text-[#ff5252] hover:underline cursor-pointer"
                >
                  Close
                </button>
                <p className="text-sm text-gray-600 mt-1">
                  Take advantage of our exclusive offers:
                </p>
                <p className="text-sm font-semibold mt-1">
                  <span className="text-green-600">GET250FF</span>
                  <span className="text-gray-500"> - </span>
                  <span className="text-orange-500">Promo Code</span>
                </p>
              </div>

              {/* <!-- Checkout Button --> */}
              <button
                type="button"
                className="w-full h-12 bg-[#ff5252] hover:bg-[#ff3b3b] text-white text-sm font-bold tracking-wider uppercase rounded-md transition-colors cursor-pointer"
              >
                Proceed to Checkout
              </button>
            </div>

            {/* <!-- Info Card --> */}
            <div className="bg-[#f5f5f5] rounded-md p-6">
              <ul className="flex flex-col gap-5">
                {infoItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#171717] mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
