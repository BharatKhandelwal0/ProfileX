import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {X} from 'lucide-react'

const ProfileSetup = ({ formData, sendData }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setShow(true)

      const trimmedSkill = input.trim().toLowerCase();

      if (!trimmedSkill) return;

      // prevent duplicates
      if (formData.skills.includes(trimmedSkill)) {
        setInput("");
        return;
      }

      // update formData.skills
      sendData({
        skills: [...formData.skills, trimmedSkill],
      });

      // clear input
      setInput("");
    }
  };

  const removeSkills = (skillToRemove) => {
    const filteredSkills = formData.skills.filter(
      (skill) => skill !== skillToRemove,
    );

    sendData({
      skills: filteredSkills,
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    sendData({
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        firstName,
        lastName,
        email,
        password,
        bio,
        about,
        skills,
        image,
      } = formData;

      const res = await fetch("http://localhost:1100/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          bio,
          about,
          skills,
          image,
        }),
      });

      const data = await res.json();

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
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Bio */}
        <div>
          <label className="block text-base text-white mb-2 font-medium">
            Bio
          </label>

          <input
            type="text"
            name="bio"
            placeholder="Write a short bio"
            required
            value={formData.bio}
            onChange={handleChange}
            className="w-full bg-white/10 text-lg font-semibold text-white placeholder:text-gray-400 border border-white/20 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-white"
          />
        </div>

        {/* About */}
        <div>
          <label className="block text-base text-white mb-2 font-medium">
            About
          </label>

          <textarea
            name="about"
            rows="4"
            placeholder="Tell something about yourself..."
            required
            value={formData.about}
            onChange={handleChange}
            className="hero w-full leading-6 bg-white/10 text-lg font-medium text-white placeholder:text-gray-400 border border-white/20 rounded-lg px-3 py-3 outline-none focus:ring-1 focus:ring-white resize-none"
          />
        </div>

        {/* Skills */}
        <div className="">
          <label className="block text-base text-white mb-2 font-medium">
            Skills
          </label>

          <input
            type="text"
            name="skills"
            placeholder="e.g. React, Node.js, MongoDB"
            value={input}
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            className=" w-full text-lg font-semibold bg-white/10 mb-2 text-white placeholder:text-gray-400 border border-white/20 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-white "
          />

          {/* update skills */}
          {show === true && (
            <div className=" hero w-full max-h-28 overflow-y-auto text-base font-medium flex flex-wrap gap-3  rounded-lg px-3 py-2">
              {formData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/70 text-black px-2 py-0.5 rounded-xl flex w-fit items-center gap-2"
              >
                <span>{skill}</span>

                {skill.length < 1 ? setShow(false) : null}

                <button
                  type="button"
                  onClick={() => removeSkills(skill)}
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  <X size={15} />
                </button>
              </div>
            ))}
          </div>)}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-white text-xl hover:bg-gray-200 cursor-pointer text-black py-3 rounded-lg transition duration-300"
        >
          Create Account
        </button>
      </form>
      <p className="text-sm text-center text-white mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 cursor-pointer hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default ProfileSetup;
