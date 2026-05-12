import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import spiderman from "../../assets/spiderman.jpg"
import stone from "../../assets/volcano.jpeg"

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
   const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();

    const {firstName, lastName, email, password} = formData;

    if (!firstName || !lastName || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    const res = await fetch("http://localhost:1100/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      navigate("/login");
    } else {
      alert("Signup failed!");
    }
  };

  return (
    <div className="relative object-cover min-h-screen w-screen flex items-center justify-center bg-linear-to-br from-black via-slate-900 to-slate-800 px-4">
      <img className="absolute inset-0 w-full h-full object-cover" src={stone} />
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