import React from "react";

function OtpVerification() {
  return (
    <div className="container justify-center items-center flex flex-col py-20">
      <div className="w-[40%] h-[40%] border  bg-white shadow-lg rounded-lg px-10 py-15 mt-5">
        <h1 className="text-center text-2xl font-semibold mb-4">Verify OTP</h1>
        <form>
          <div className="mb-4 justify-center items-center flex flex-col gap-5">
            <label htmlFor="otp" className="block mb-2 text-sm text-gray-600">
              Enter the 6-digit OTP sent to your email: [dynamic email address]
            </label>
            <input
              type="text"
              id="otp"
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#ff5252] focus:border-transparent"
              placeholder="Enter OTP"
            />
            <button
              type="submit"
              className="bg-[#ff5252] text-white text-sm px-4 py-2 rounded hover:bg-[#ff5252]/90 transition duration-300 cursor-pointer"
            >
              Verify OTP
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-600 text-center py-5">
          Didn't receive the OTP? &nbsp;
          <button
            type="button"
            className="text-[#ff5252] hover:underline cursor-pointer"
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
}

export default OtpVerification;
