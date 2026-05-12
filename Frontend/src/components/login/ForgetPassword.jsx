import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import drops from "../../assets/daredevil.jpeg"
import drops from "../../assets/clouds.jpeg"

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
  
      const res = await fetch("http://localhost:1100/user/forget-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });
      
      const data = await res.json()
      alert(`OTP :- ${data?.OTP || "Not received"}`)
      console.log(data);
  
      if(res.ok){
        navigate("/enterOtp",{
          state: {
            email: email,
            otp: data?.OTP || "Not received"
          }
        });
      }
      else{
        alert("Error sending OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-linear-to-br from-black via-slate-900 to-slate-800 px-4">

      <img className="absolute inset-0 w-full h-full object-cover" src={drops} />
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