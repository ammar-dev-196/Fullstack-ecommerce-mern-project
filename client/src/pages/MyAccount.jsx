import React, { useState } from "react";
import {
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaSignOutAlt,
  FaCamera,
} from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { Outlet, Link, useLocation } from "react-router";

function MyAccount() {
  const location = useLocation();
  // Derive the active tab from the URL, e.g. /my-account/orders -> "orders"
  const activeTab = location.pathname.split("/")[2] || "profile";

  return (
    <div className="bg-[#F5F0F0]  py-10">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Left Sidebar */}
          <div className="bg-white rounded-md shadow-sm p-5 flex flex-col self-start">
            <div className="flex flex-col items-center text-center pb-6 border-b border-gray-100">
              <div className="relative mb-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover shadow-sm"
                />
                <label className="absolute bottom-0 right-0 bg-[#ff5252] text-white p-1 rounded-full cursor-pointer hover:bg-[#e04141] transition-colors">
                  <FaCamera size={10} />
                  <input type="file" className="hidden" />
                </label>
              </div>
              <h3 className="font-bold text-gray-800 text-sm">Username</h3>
              <p className="text-xs text-gray-500 break-all">
                username@gmail.com
              </p>
            </div>

            <div className="py-4 space-y-1">
              <Link
                to={"/my-account/profile"}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-xs font-medium transition-all relative ${
                  activeTab === "profile"
                    ? "text-[#ff5252] bg-gray-50 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {activeTab === "profile" && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff5252] rounded-r"></span>
                )}
                <FaUser
                  className={
                    activeTab === "profile" ? "text-[#ff5252]" : "text-gray-400"
                  }
                />
                Profile
              </Link>

              <Link
                to={"/my-account/orders"}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-xs font-medium transition-all relative ${
                  activeTab === "orders"
                    ? "text-[#ff5252] bg-gray-50 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {activeTab === "orders" && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff5252] rounded-r"></span>
                )}
                <FaShoppingBag
                  className={
                    activeTab === "orders" ? "text-[#ff5252]" : "text-gray-400"
                  }
                />
                Orders
              </Link>

              <Link
                to={"/my-account/wishlist"}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-xs font-medium transition-all relative ${
                  activeTab === "wishlist"
                    ? "text-[#ff5252] bg-gray-50 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {activeTab === "wishlist" && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff5252] rounded-r"></span>
                )}
                <FaHeart
                  className={
                    activeTab === "wishlist"
                      ? "text-[#ff5252]"
                      : "text-gray-400"
                  }
                />
                My Wishlist
              </Link>

              <Link
                to={"/my-account/address"}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-xs font-medium transition-all relative ${
                  activeTab === "address"
                    ? "text-[#ff5252] bg-gray-50 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {activeTab === "address" && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff5252] rounded-r"></span>
                )}
                <FaAddressCard
                  className={
                    activeTab === "address" ? "text-[#ff5252]" : "text-gray-400"
                  }
                />
                Address
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-100 mt-2">
              <button
                onClick={() => alert("Logged out successfully!")}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-sm text-xs font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
              >
                <FaSignOutAlt className="text-gray-400 group-hover:text-red-600" />
                Logout
              </button>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="md:col-span-3 bg-white rounded-md shadow-sm p-6 md:p-8">
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
