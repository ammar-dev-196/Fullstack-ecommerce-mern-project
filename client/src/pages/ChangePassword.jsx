import React from 'react'
import { FiEye, FiEyeOff } from "react-icons/fi";

function ChangePassword() {
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <div className="container py-20 bg-[#F5F0F0] flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md w-full max-w-sm px-10 py-10 mx-4">
        {/* Title */}
        <h1 className="text-center text-[18px] font-semibold text-[#171717] mb-7">
          Change Password
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-4">
          {/* New Password */}
          <div className="relative">
            <input
              id="new-password"
              type={showNewPassword ? "text" : "password"}
              placeholder="New Password"
              className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition pr-10"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition"
              aria-label="Toggle new password visibility"
            >
              {showNewPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition"
              aria-label="Toggle confirm password visibility"
            >
              {showConfirmPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
            </button>
          </div>

          {/* Change Password Button */}
          <button
            id="forgot-password-submit"
            type="submit"
            className="w-full bg-[#ff5252] hover:bg-black text-white uppercase font-semibold text-[13px] tracking-widest py-2.5 rounded cursor-pointer transition-all mt-3"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
