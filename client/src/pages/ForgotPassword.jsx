import React from 'react'

function ForgotPassword() {
  return (
     <div className="container py-20 bg-[#F5F0F0] flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-md w-full max-w-sm px-10 py-10 mx-4">
            {/* Title */}
            <h1 className="text-center text-[18px] font-semibold text-[#171717] mb-7">
              Forgot Password
            </h1>
    
            {/* Form */}
            <form className="flex flex-col gap-4">
              {/* New Password */}
              <div className="relative">
                <input
                  id="email"
                  type="text"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition pr-10"
                />
              </div>
    
              {/* Change Password Button */}
              <button
                id="forgot-password-submit"
                type="button"
                className="w-full bg-[#ff5252] hover:bg-black text-white uppercase font-semibold text-[13px] tracking-widest py-2.5 rounded cursor-pointer transition-all mt-3"
              >
                Get New Password
              </button>
            </form>
          </div>
        </div>
  );
}

export default ForgotPassword;