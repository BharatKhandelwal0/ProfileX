import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const LeftInfo = ({ handleChange, formData }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
        {/* First Name */}
        <div className="space-y-5">
          <label className="block mb-2 text-sm font-medium">First Name</label>

          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-gray-300 text-lg rounded-lg px-4 py-3 outline-none focus:ring-1 "
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-2 text-sm font-medium">Last Name</label>

          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-gray-300 text-lg rounded-lg px-4 py-3 outline-none focus:ring-1 "
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-gray-300 text-lg rounded-lg px-4 py-3 outline-none focus:ring-1 "
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block mb-2 text-sm font-medium">Password</label>

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-gray-300 text-lg rounded-lg px-4 py-3 outline-none focus:ring-1 "
          />
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="absolute p-1 top-6 right-2 translate-y-1/2 cursor-pointer transition duration-300"
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>

        {/* profile */}

        <div>
          <label className="block text-base text-white mb-2 font-medium">
            Profile Image
          </label>

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full bg-white/10 text-xl font-medium text-white border border-white/20 rounded-lg px-2 py-2 file:bg-white file:mr-5 file:text-black file:border-none file:px-4 file:py-2 file:rounded-md file:cursor-pointer"
          />
        </div>
      {/* </form> */}
    </div>
  );
};

export default LeftInfo;
