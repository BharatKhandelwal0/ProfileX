import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import batman from "../../assets/Batman.jpeg"
import {Eye , EyeOff} from 'lucide-react'

const UpdatePassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email || ""
  const [showPasswordOne, setShowPasswordOne] = useState(false)
  const [showPasswordTwo, setShowPasswordTwo] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // password match check
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if(formData.newPassword.length < 7){
      alert("password Must Be greater than 7");
      return;
    }

    try {
        const res = await fetch('http://localhost:1100/user/update-password',{
            method : "POST",
            credentials: "include",
            headers :{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({email: email, newPassword: formData.newPassword})
        })
        const data = await res.json()
        console.log(data);
        alert(data)
        
        if(res.ok){
            navigate('/login')
        }
    } catch (error) {
      console.log("Error updating password:", error.message);
      alert("An error occurred while updating the password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-linear-to-br from-cyan-500 via-blue-500 to-indigo-600 px-4">

      <img className="absolute inset-0 w-full h-full object-cover" src={batman} />
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-8 " style={{
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 8px 48px rgba(0,0,0,0.4)",
                }}>

        <h1 className="text-3xl font-bold text-center mb-3 text-white">
          Update Password
        </h1>

        <p className="text-center font-medium text-white/80 text-sm mb-6">
          Enter your new password below
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* New Password */}
          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-white">
              New Password
            </label>

            <input
              type={showPasswordOne ? "text" : "password"}
              name="newPassword"
              placeholder="Enter new password"
              value={formData.newPassword}
              onChange={handleChange}
              required
              className="w-full text-xl bg-black/80 border border-white/30 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white"
            />
            <button type="button" onClick={()=>{setShowPasswordOne(!showPasswordOne)}} className="absolute p-1 top-10 right-2 transition">
                {showPasswordOne ? <Eye size={18}/> : <EyeOff size={18}/>}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block mb-2 text-sm font-medium text-white">
              Confirm Password
            </label>

            <input
              type={showPasswordTwo ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full text-xl bg-black/80 border border-white/30 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white"
            />
            <button type="button" onClick={()=>{setShowPasswordTwo(!showPasswordTwo)}} className="absolute p-1 top-10 right-2 transition">
                {showPasswordTwo ? <Eye size={18}/> : <EyeOff size={18}/>}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Update Password
          </button>

        </form>

      </div>
    </div>
  );
};

export default UpdatePassword;