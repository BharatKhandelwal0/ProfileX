
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import batman from "../../assets/Batman.jpeg"
import {Eye , EyeOff} from 'lucide-react'


const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false)
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      const { email, password } = formData;
      const res = await fetch("http://localhost:1100/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password }),
      });
  
      const data = await res.json();
      console.log(data);
  
      if(res.ok){
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        // alert("Login successful!");
        navigate("/profile");
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-linear-to-br from-black via-slate-900 to-slate-800 px-4">
      <img className="absolute inset-0 w-full h-full object-cover" src={batman} />
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-8 " style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.4)",
          }}>
        
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">          
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border text-lg border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-2 text-sm font-medium">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border text-lg border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button type="button" onClick={()=>{setShowPassword(!showPassword)}} className="p-1 absolute right-2 top-6 translate-y-1/2 transition duration-300 cursor-pointer">
              {showPassword ? <Eye size={18} /> : <EyeOff size={18}/>  }
            </button>
          </div>
          <div className="text-sm text-right text-gray-500">
            <Link to="/forget-password" className="text-blue-600 cursor-pointer hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-xl hover:bg-gray-200 active:bg-white text-black py-3 rounded-lg transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 cursor-pointer hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;