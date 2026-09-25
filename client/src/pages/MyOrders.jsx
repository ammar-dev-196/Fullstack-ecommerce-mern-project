import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const tabs = ["All", "To Pay", "To Ship", "To Receive", "To Review"];

const orders = [
  {
    id: 1,
    status: "Completed",
    items: [
      {
        id: 11,
        name: "Car Seat Headrest Neck Memory Pillow Rest Cushion - Ergonomic Car Neck Pillow",
        variation: "Color Family:neck pillow",
        price: 1999,
        qty: 1,
        image:
          "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=300&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 2,
    status: "Completed",
    items: [
      {
        id: 21,
        name: "Stainless Steel Manual Nose Trimmer Shaving Nose Ear Hair Face Care Man",
        variation: "Manual Nose trimmer:Nose trimmer",
        price: 270,
        qty: 1,
        image:
          "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=300&auto=format&fit=crop",
      },
    ],
  },
];

const statusStyles = {
  Completed: "bg-gray-100 text-gray-600",
  "To Pay": "bg-[#fff0f0] text-[#ff5252]",
  "To Ship": "bg-blue-50 text-blue-600",
  "To Receive": "bg-amber-50 text-amber-600",
  "To Review": "bg-green-50 text-green-600",
};

function MyOrders() {
  const [activeTab, setActiveTab] = useState("All");

  const [search, setSearch] = useState("");

  const visibleOrders = orders.filter((order) => {
    if (activeTab !== "All" && order.status !== activeTab) return false;

    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return order.items.some(
      (item) =>
        item.name.toLowerCase().includes(q) || String(order.id).includes(q),
    );
  });

  return (
    <div>
      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-gray-200 -mt-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-3 text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === tab
                ? "text-[#ff5252] font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-3 right-3 bottom-0 h-0.5 bg-[#ff5252]"></span>
            )}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mt-5">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by order ID or product name"
          className="w-full pl-11 pr-4 py-3.5 text-xs bg-[#F5F0F0] border border-transparent rounded-sm focus:outline-none focus:border-[#ff5252] focus:bg-white transition-colors"
        />
      </div>

      {/* Order groups */}
      <div className="mt-5 space-y-4">
        {visibleOrders.length === 0 && (
          <p className="text-xs text-gray-500 py-10 text-center">
            No orders found.
          </p>
        )}

        {visibleOrders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-200 rounded-sm bg-white"
          >
            {/* Items */}
            <div className="divide-y divide-gray-100">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-end gap-4 p-4">
                  <div className="w-20 h-20 border border-gray-200 rounded-sm overflow-hidden shrink-0 self-start">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 self-start">
                    <p className="text-xs text-gray-800 line-clamp-2 leading-relaxed">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-1.5">
                      {item.variation}
                    </p>
                  </div>

                  <div className="flex flex-row items-start">
                    <div className="w-24 shrink-0 text-xs text-gray-700">
                      Rs. {item.price.toLocaleString()}
                    </div>

                    <div className="w-16 shrink-0 text-xs text-gray-700">
                      Qty: {item.qty}
                    </div>

                    <span
                      className={`text-[11px] font-medium px-3 py-1 rounded-full shrink-0 ${
                        statusStyles[order.status] ||
                        "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
