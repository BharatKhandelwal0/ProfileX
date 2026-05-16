import React, { useState } from "react";
import LeftInfo from "./LeftInfo.jsx";
import RightInfo from "./RightInfo.jsx";
import blueClouds from "../../assets/blueClouds.jpeg";
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
  const navigate = useNavigate();

  const getDataFromChild = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const addSkill = (newSkill) => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
  };

  const removeSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();

      form.append("firstName", formData.firstName);
      form.append("lastName", formData.lastName);
      form.append("email", formData.email);
      form.append("password", formData.password);
      form.append("bio", formData.bio);
      form.append("about", formData.about);
      form.append("image", formData.image);

      formData.skills.forEach((skill) => {
        form.append("skills", skill);
      });

      const res = await fetch("http://localhost:1100/user/register", {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      console.log(data);
      

      if (res.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        alert("Registration failed: " + data.message);
      }
    } catch (error) {
      console.log("Error during registration:", error.message);
      alert("An error occurred during registration.");
    }
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

      <form onSubmit={handleSubmit} className="space-y-5">
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

          <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-10">
            {/* Register Section */}
            <div className="w-full lg:w-1/2 flex-1 justify-center">
              <LeftInfo handleChange={handleChange} formData={formData} />
            </div>

            {/* Info Section */}
            <div className="w-full lg:w-1/2 flex-1 justify-center">
              <RightInfo handleChange={handleChange} formData={formData} addSkill={addSkill} removeSkill={removeSkill}/>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegInfo;
