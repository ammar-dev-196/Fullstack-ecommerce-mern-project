import React from 'react'
import {
  FaSearch,
  FaChevronDown,
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
  FaLock,
  FaPaypal,
} from "react-icons/fa";
import { LuCircleHelp } from "react-icons/lu";

const orderItems = [
  {
    id: 1,
    name: "Dining Chair Eaten - 196",
    meta: "Material: Lacquer Finish | Color: Antique",
    price: "$952",
    image:
      "https://res.cloudinary.com/hyno2enn/image/upload/v1789478252/imgi_61_1788000104097_-original-imagtc5fz9spysyk.webp",
  },
  {
    id: 2,
    name: "Dining Chair Edmund-194",
    meta: "Material: Lacquer Finish | Color: Lacquer Color",
    price: "$490",
    image:
      "https://res.cloudinary.com/hyno2enn/image/upload/v1789478154/imgi_35_1786331761836_csecefcwsecfwecwcewe1.webp",
  },
  {
    id: 3,
    name: "Dining Chair Okavango-231",
    meta: "Material: Metal | Color: black",
    price: "$1,306",
    image:
      "https://res.cloudinary.com/hyno2enn/image/upload/v1789478256/imgi_62_1788000104097_-original-imah4xe6cff8cejm.webp",
  },
  {
    id: 4,
    name: "Dining Chair Okavango-231",
    meta: "Material: Metal | Color: black",
    price: "$1,306",
    image:
      "https://res.cloudinary.com/hyno2enn/image/upload/v1789478256/imgi_62_1788000104097_-original-imah4xe6cff8cejm.webp",
  },
  {
    id: 5,
    name: "Dining Chair Okavango-231",
    meta: "Material: Metal | Color: black",
    price: "$1,306",
    image:
      "https://res.cloudinary.com/hyno2enn/image/upload/v1789478256/imgi_62_1788000104097_-original-imah4xe6cff8cejm.webp",
  },
  {
    id: 6,
    name: "Dining Chair Okavango-231",
    meta: "Material: Metal | Color: black",
    price: "$1,306",
    image:
      "https://res.cloudinary.com/hyno2enn/image/upload/v1789478256/imgi_62_1788000104097_-original-imah4xe6cff8cejm.webp",
  },
  {
    id: 7,
    name: "Dining Chair Okavango-231",
    meta: "Material: Metal | Color: black",
    price: "$1,306",
    image:
      "https://res.cloudinary.com/hyno2enn/image/upload/v1789478256/imgi_62_1788000104097_-original-imah4xe6cff8cejm.webp",
  },
  {
    id: 8,
    name: "Dining Chair Okavango-231",
    meta: "Material: Metal | Color: black",
    price: "$1,306",
    image:
      "https://res.cloudinary.com/hyno2enn/image/upload/v1789478256/imgi_62_1788000104097_-original-imah4xe6cff8cejm.webp",
  },
  {
    id: 9,
    name: "Dining Chair Okavango-231",
    meta: "Material: Metal | Color: black",
    price: "$1,306",
    image:
      "https://res.cloudinary.com/hyno2enn/image/upload/v1789478256/imgi_62_1788000104097_-original-imah4xe6cff8cejm.webp",
  },
];

const inputClasses =
  "w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition";
const labelClasses = "block text-[13px] font-medium text-[#171717] mb-1.5";

function Checkout() {
  return (
    <div className="bg-white">
      {/* <!-- Page Title Bar --> */}
      <div className="bg-[#f5f5f5] py-6">
        <div className="container">
          <h1 className="text-2xl font-semibold text-[#171717]">Checkout</h1>
        </div>
      </div>
      <div className="container py-6 sm:py-10">
        <div className="flex flex-col lg:flex-row">
          {/* <!-- Left : Checkout Form --> */}
          <div className="lg:w-[60%] lg:pr-10 lg:border-r border-gray-200">
            {/* <!-- Delivery Address --> */}
            <h2 className="text-xl font-semibold text-[#171717] mb-5">
              Delivery Address
            </h2>

            <form className="flex flex-col gap-4">
              {/* <!-- Name Row --> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className={labelClasses}>
                    First name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="Enter first name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className={labelClasses}>
                    Last name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Enter last name"
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* <!-- Address --> */}
              <div>
                <label htmlFor="address" className={labelClasses}>
                  Address
                </label>
                <div className="relative">
                  <input
                    id="address"
                    type="text"
                    placeholder="Enter delivery address"
                    className={`${inputClasses} pr-10`}
                  />
                  <FaSearch
                    size={14}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              {/* <!-- City / State / Zip --> */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className={labelClasses}>
                    City
                  </label>
                  <div className="relative">
                    <select
                      id="city"
                      defaultValue=""
                      className={`${inputClasses} appearance-none pr-9 cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="dhaka">Dhaka</option>
                      <option value="chittagong">Chittagong</option>
                      <option value="sylhet">Sylhet</option>
                    </select>
                    <FaChevronDown
                      size={12}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="state" className={labelClasses}>
                    State
                  </label>
                  <div className="relative">
                    <select
                      id="state"
                      defaultValue=""
                      className={`${inputClasses} appearance-none pr-9 cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="state-a">State A</option>
                      <option value="state-b">State B</option>
                    </select>
                    <FaChevronDown
                      size={12}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="zip" className={labelClasses}>
                    Zip code
                  </label>
                  <input
                    id="zip"
                    type="text"
                    placeholder="Enter zip"
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* <!-- Phone --> */}
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone
                </label>
                <div className="flex">
                  <div className="relative shrink-0">
                    <select
                      aria-label="Country code"
                      defaultValue="+88"
                      className="h-full w-[86px] border border-gray-300 rounded-l px-2 py-2.5 text-sm text-gray-700 bg-white appearance-none pr-7 cursor-pointer focus:outline-none focus:border-gray-400 transition"
                    >
                      <option value="+88">+92</option>
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                    <FaChevronDown
                      size={11}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className={`${inputClasses} rounded-l-none border-l-0`}
                  />
                </div>
              </div>

              {/* <!-- Save Info Checkbox --> */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-[#171717] cursor-pointer"
                />
                <span className="text-[13px] text-gray-600">
                  Save this information for next time
                </span>
              </label>

              {/* <!-- Shipping Method --> */}
              <h2 className="text-xl font-bold text-[#171717] mt-4 mb-1">
                Shipping method
              </h2>

              <div className="flex flex-col border border-gray-300 rounded-md overflow-hidden">
                <label className="flex items-center justify-between px-4 py-3 rounded-md cursor-pointer">
                  <span className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      defaultChecked
                      className="w-4 h-4 accent-[#171717]"
                    />
                    <span>
                      <span className="block text-sm font-medium text-[#171717]">
                        Standard shipping
                      </span>
                      <span className="block text-xs text-gray-500">
                        3-5 days
                      </span>
                    </span>
                  </span>
                  <span className="text-sm font-semibold text-[#171717]">
                    $7.00
                  </span>
                </label>
                <div className="h-px w-full bg-[#e4e4e4]"></div>
                <label className="flex items-center justify-between px-4 py-3 cursor-pointer">
                  <span className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      className="w-4 h-4 accent-[#171717]"
                    />
                    <span>
                      <span className="block text-sm font-medium text-[#171717]">
                        Expedited shipping
                      </span>
                      <span className="block text-xs text-gray-500">
                        1-2 days
                      </span>
                    </span>
                  </span>
                  <span className="text-sm font-semibold text-[#171717]">
                    $10.00
                  </span>
                </label>
              </div>

              {/* <!-- Payment --> */}
              <h2 className="text-xl font-bold text-[#171717] mt-4 mb-1">
                Payment
              </h2>

              {/* <!-- Credit Card --> */}
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked
                      className="w-4 h-4 accent-[#171717]"
                    />
                    <span className="text-sm font-medium text-[#171717]">
                      Credit Card
                    </span>
                  </label>
                  <span className="flex items-center gap-1.5">
                    <FaCcMastercard size={24} className="text-red-600" />
                    <FaCcVisa size={24} className="text-blue-800" />
                    <FaCcAmex size={24} className="text-blue-600" />
                  </span>
                </div>

                <div className="p-3 flex flex-col gap-3">
                  {/* <!-- Card Number --> */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Card number"
                      className={`${inputClasses} pr-10`}
                    />
                    <FaLock
                      size={13}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>

                  {/* <!-- Expiry / CVC --> */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Expiration date (MM / YY)"
                      className={inputClasses}
                    />
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Security code"
                        className={`${inputClasses} pr-10`}
                      />
                      <LuCircleHelp
                        size={14}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                    </div>
                  </div>

                  {/* <!-- Name On Card --> */}
                  <input
                    type="text"
                    placeholder="Name on card"
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* <!-- PayPal --> */}
              <label className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-3 mt-3 cursor-pointer">
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    className="w-4 h-4 accent-[#171717]"
                  />
                  <span className="text-sm font-medium text-[#171717]">
                    PayPal
                  </span>
                </span>
                <FaPaypal size={20} className="text-blue-700" />
              </label>

              {/* <!-- Pay Now --> */}
              <button
                type="submit"
                className="w-full bg-[#ff5252] hover:bg-black text-white text-sm font-semibold py-3.5 rounded-md mt-5 cursor-pointer transition-all"
              >
                Pay now
              </button>
            </form>
          </div>

          {/* <!-- Right : Order Summary (shown on top in mobile view) --> */}
          <div className="order-first lg:order-none lg:w-[40%] lg:pl-10 pb-10 lg:pb-0">
            <div className="bg-[#f5f5f5] rounded-md p-4 sm:p-6">
              <h2 className="text-xl font-bold text-[#171717] mb-5">
                Order Summery
              </h2>

              {/* <!-- Order Items --> */}
              <div className="flex flex-col gap-4 mb-6 h-60 overflow-y-scroll overflow-hidden pr-4">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="shrink-0 w-14 h-14 bg-white border border-gray-200 rounded p-1 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#171717] line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">
                        {item.meta}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-[#171717] shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
                
              </div>

              {/* <!-- Discount Code --> */}
              <div className="flex gap-2 sm:gap-3 mb-6">
                <input
                  type="text"
                  placeholder="Discount code or gift card"
                  className="flex-1 min-w-0 h-11 px-3 sm:px-4 bg-white border border-gray-300 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition"
                />
                <button
                  type="button"
                  className="h-11 px-6 bg-[#ff5252] hover:bg-black text-white text-sm font-medium rounded-md transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>

              {/* <!-- Totals --> */}
              <div className="flex flex-col gap-2.5 text-sm border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-[#171717]">$2,748</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 flex items-center gap-1">
                    Shipping
                    <LuCircleHelp size={13} className="text-gray-400" />
                  </span>
                  <span className="font-medium text-[#171717]">$7.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-medium text-[#171717]">$0</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-bold text-[#171717]">Total</span>
                  <span className="font-bold text-[#171717]">$2,748</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
