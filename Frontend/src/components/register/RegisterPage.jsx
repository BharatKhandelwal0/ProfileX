import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // backend signup logic here
  };

  return (
    <div className="relative object-cover min-h-screen w-screen flex items-center justify-center bg-gray-500 px-4">
      <img className="absolute inset-0 w-full h-full object-cover" src="https://ea-unboxed-assets.croma.com/cromaunboxed-as/2026/02/Daredevil-Born-Again-Season-2-expected-episode-release-dates-time-jump-explained.png"/>
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-8 " style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.4)",
          }}>

        <h1 className="text-3xl font-bold text-center mb-6">
          Signup
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* First Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 text-lg rounded-lg px-4 py-3 outline-none focus:ring-1 "
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 text-lg rounded-lg px-4 py-3 outline-none focus:ring-1 "
            />
          </div>

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
              className="w-full border border-gray-300 text-lg rounded-lg px-4 py-3 outline-none focus:ring-1 "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 text-lg rounded-lg px-4 py-3 outline-none focus:ring-1 "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-xl hover:bg-gray-200 cursor-pointer text-black py-3 rounded-lg transition duration-300"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-white mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 cursor-pointer hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;