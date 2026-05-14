// ProfileSetup.jsx

import React, { useState } from "react";

const ProfileSetup = () => {
  const [formData, setFormData] = useState({
    bio: "",
    about: "",
    tags: "",
    skills: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    // backend API logic here
  };

  return (
    <div>

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-5">

        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Profile Setup
        </h1>

        <p className="text-center text-sm font-medium text-gray-300 mb-5">
          Complete your profile information
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Profile Image */}
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

          {/* Bio */}
          <div>
            <label className="block text-base text-white mb-2 font-medium">
              Bio
            </label>

            <input
              type="text"
              name="bio"
              placeholder="Write a short bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full bg-white/10 text-lg font-semibold text-white placeholder:text-gray-400 border border-white/20 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-gray-600"
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
              value={formData.about}
              onChange={handleChange}
              className="w-full leading-6 bg-white/10 text-lg font-medium text-white placeholder:text-gray-400 border border-white/20 rounded-lg px-3 py-3 outline-none focus:ring-1 focus:ring-gray-600 resize-none"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-base text-white mb-2 font-medium">
              Tags
            </label>

            <input
              type="text"
              name="tags"
              placeholder="e.g. developer, designer, creator"
              value={formData.tags}
              onChange={handleChange}
              className="w-full text-lg font-semibold bg-white/10 text-white placeholder:text-gray-400 border border-white/20 rounded-lg px-3 py-3 outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="block text-base text-white mb-2 font-medium">
              Skills
            </label>

            <input
              type="text"
              name="skills"
              placeholder="e.g. React, Node.js, MongoDB"
              value={formData.skills}
              onChange={handleChange}
              className="w-full text-lg font-semibold bg-white/10 text-white placeholder:text-gray-400 border border-white/20 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-200 text-black font-semibold py-2 rounded-xl transition duration-300"
          >
            Save Profile
          </button>

        </form>

      </div>
    </div>
  );
};

export default ProfileSetup;