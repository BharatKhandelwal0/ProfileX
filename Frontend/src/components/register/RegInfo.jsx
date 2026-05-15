import React, { useState } from "react";
import RegisterPage from "./RegisterPage.jsx";
import blueClouds from "../../assets/blueClouds.jpeg";
import Info from "./Info.jsx";
import stone from "../../assets/volcano.jpeg";
import { useNavigate } from "react-router-dom";

const RegInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bio: "",
    about: "",
    skills: [],
    image: null,
  });

  const getDataFromChild = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-6">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={stone}
        alt="background"
      />

      {/* Main Glass Container */}
      <div
        className="relative z-10 w-full max-w-6xl lg:flex-row items-center justify-between gap-10 rounded-2xl p-2 sm:p-8 lg:p-6"
        style={{
          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 8px 48px rgba(0,0,0,0.4)",
        }}
      >
        <div>
          <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
        </div>

        {/* Register Section */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-10">
          {/* Register Section */}
          <div className="w-full lg:w-1/2 flex-1 justify-center">
            <RegisterPage sendData={getDataFromChild} formData={formData} />
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-1/2 flex-1 justify-center">
            <Info sendData={getDataFromChild} formData={formData} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegInfo;
