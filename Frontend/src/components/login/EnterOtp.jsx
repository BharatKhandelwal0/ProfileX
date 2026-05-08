import React, { useState } from "react";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Entered OTP:", otp);

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600 px-4">

      <img className="absolute inset-0 w-full h-full object-cover" src="https://ea-unboxed-assets.croma.com/cromaunboxed-as/2026/02/Daredevil-Born-Again-Season-2-expected-episode-release-dates-time-jump-explained.png"/>
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-8 " style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.4)",
          }}>

        <h1 className="text-3xl font-bold text-center mb-3 text-white">
          OTP Verification
        </h1>

        <p className="text-center text-white/80 text-sm mb-6">
          Enter the OTP sent to your email
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* OTP Input */}
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              OTP Code
            </label>

            <input
              type="text"
              name="otp"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              required
              className="w-full bg-white/30 border border-white/30 rounded-lg px-4 py-3 tracking-widest text-center text-lg font-semibold outline-none focus:ring-1"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Verify OTP
          </button>

        </form>

        {/* Resend OTP */}
        <p className="text-sm text-center text-white/70 mt-6">
          Didn’t receive OTP?{" "}
          <span className="text-white font-medium cursor-pointer hover:underline">
            Resend
          </span>
        </p>

      </div>
    </div>
  );
};

export default OtpVerification;