import React from "react";
import { Link } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="container py-20 bg-[#F5F0F0] flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md w-full max-w-sm px-10 py-10 mx-4">
        {/* Title */}
        <h1 className="text-center text-[18px] font-semibold text-[#171717] mb-7">
          Login To Your Account
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-4">
          {/* Email */}
          <input
            id="login-email"
            type="email"
            placeholder="Email Id"
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition"
          />

          {/* Password */}
          <div className="relative">
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
            </button>
          </div>

          {/* Forgot Password */}
          <div>
            <Link
              to="#"
              className="text-[13px] text-[#ff5252] hover:underline font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            id="login-submit"
            type="submit"
            className="w-full bg-[#ff5252] hover:bg-black text-white uppercase font-semibold text-[13px] tracking-widest py-2.5 rounded cursor-pointer transition-all"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-[13px] text-gray-500 mt-5">
          Not Registered?{" "}
          <Link
            to="/register"
            className="text-[#ff5252] hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>

        {/* Divider */}
        <p className="text-center text-[13px] text-gray-400 mt-3">
          Or continue with social account
        </p>

        {/* Google Login */}
        <button
          id="login-google"
          type="button"
          className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-300 rounded py-2.5 text-[13px] font-semibold text-gray-600 uppercase tracking-wide hover:bg-gray-50 cursor-pointer transition"
        >
          <FcGoogle size={18} />
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
