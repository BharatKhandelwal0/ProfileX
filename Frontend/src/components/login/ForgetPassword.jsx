import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Send OTP to:", email);
    navigate("/enterOtp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">

      <img className="absolute inset-0 w-full h-full object-cover" src="https://ea-unboxed-assets.croma.com/cromaunboxed-as/2026/02/Daredevil-Born-Again-Season-2-expected-episode-release-dates-time-jump-explained.png"/>
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-8 " style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.4)",
          }}>

        <h1 className="text-3xl font-semibold text-center mb-3 text-white">
          Forgot Password
        </h1>

        <p className="text-center text-white/80 text-sm mb-6">
          Enter your email and we’ll send you an OTP
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/30 border border-white/30 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-white/50 text-lg text-gray-900"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full cursor-pointer  bg-white text-slate-900 font-semibold py-3 rounded-lg hover:bg-gray-200 transition duration-200"
          >
              Send OTP
          </button>

        </form>

        <p className="text-sm text-center text-white/70 mt-6">
          Remember your password?{" "}
          <Link to="/login" className="text-blue-600 font-medium cursor-pointer hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default ForgetPassword;