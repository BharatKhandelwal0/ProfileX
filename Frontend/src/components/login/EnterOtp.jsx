import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import drops from "../../assets/RedNebula.jpeg"

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || ""
  // const genOtp = location.state?.otp || ""

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
  
      const res = await fetch("http://localhost:1100/user/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, otp: otp })
      });
      const data = await res.json()
      console.log(data);
  
      if(res.ok){
        navigate('/update-password',{
          state: {
            email: email
          }
        })
      }else{
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("An error occurred. Please try again.");
    }
  };
  const handleResend = async(e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:1100/user/forget-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email }) 
    });
    const data = await res.json()
    alert(`OTP :- ${data?.OTP || "Not received"}`)
    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-slate-900 to-slate-800 px-4">

      <img className="absolute inset-0 w-full h-full object-cover" src={drops} />
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
              placeholder="Enter 4-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={4}
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
          <span onClick={handleResend} className="text-blue-700 font-medium cursor-pointer hover:underline">
            Resend
          </span>
        </p>

      </div>
    </div>
  );
};

export default OtpVerification;