import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            className="w-full bg-white/10 text-lg font-semibold text-white placeholder:text-gray-400 border border-white/20 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-white"
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
            className="w-full leading-6 bg-white/10 text-lg font-medium text-white placeholder:text-gray-400 border border-white/20 rounded-lg px-3 py-3 outline-none focus:ring-1 focus:ring-white resize-none"
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
            required
            value={formData.tags}
            onChange={handleChange}
            className="w-full text-lg font-semibold bg-white/10 text-white placeholder:text-gray-400 border border-white/20 rounded-lg px-3 py-3 outline-none focus:ring-1 focus:ring-white"
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
            required
            value={formData.skills}
            onChange={handleChange}
            className="w-full text-lg font-semibold bg-white/10 text-white placeholder:text-gray-400 border border-white/20 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-white "
          />
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
