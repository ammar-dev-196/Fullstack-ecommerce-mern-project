import React from "react";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";

const wishlistItems = [
  {
    id: 1,
    name: "10PCS Universal Mobile Phone Dustproof Net Stickers for Speaker Earpiece Protection",
    variation: "Color Family:Black long",
    price: 145,
    oldPrice: 300,
    discount: 52,
    priceDropped: true,
    image:
      "https://res.cloudinary.com/hyno2enn/image/upload/v1789478252/imgi_61_1788000104097_-original-imagtc5fz9spysyk.webp",
  },
];

function MyWishlist() {
  return (
    <div>
      <h2 className="text-base font-semibold text-gray-800 pb-3 border-b border-gray-100 mb-6">
        My Wishlist
      </h2>

      <div className="space-y-3">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border border-gray-200 rounded-sm bg-white p-3"
          >
            {/* Thumbnail */}
            <div className="w-20 h-20 border border-gray-200 rounded-sm overflow-hidden shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0 self-stretch flex flex-col justify-between">
              <p className="text-xs text-gray-800 line-clamp-2 leading-relaxed">
                {item.name}
              </p>
              <div className="flex items-center justify-between gap-2 mt-2">
                <p className="text-xs text-gray-400">{item.variation}</p>{" "}
                <button
                  type="button"
                  aria-label="Remove from wishlist"
                  className="text-gray-400 hover:text-[#ff5252] transition-colors cursor-pointer"
                >
                  <FaTrashAlt size={13} />
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="w-32 shrink-0 text-left">
              <p className="text-base font-semibold text-[#ff5252]">
                Rs. {item.price.toLocaleString()}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-gray-400 line-through">
                  Rs. {item.oldPrice.toLocaleString()}
                </span>
                <span className="text-xs text-gray-500">-{item.discount}%</span>
              </div>
              {item.priceDropped && (
                <p className="text-xs text-green-600 mt-1">Price dropped</p>
              )}
            </div>

            {/* Add to cart */}
            <button
              type="button"
              aria-label="Add to cart"
              className="shrink-0 inline-flex items-center gap-2 bg-[#ff5252] hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-colors cursor-pointer"
            >
              <FaShoppingCart size={14} />
              {/*    */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWishlist;
