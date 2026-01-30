import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/images/avatar10.jpg";
import { FaCheck, FaEdit } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmNewPassword] = useState("");
  const handleSubmit = (e) => {
    console.log(payload);
    e.preventDefault();
  };
  const payload = {
    name,
    email,
    currentPassword,
    newPassword,
    confirmPassword,
  };
  
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      {/* Top action */}
      <div className="flex justify-end mb-6">
        <Link
          to={`/myposts/abc`}
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          View My Posts →
        </Link>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        {/* Avatar Wrapper */}
        <div className="relative w-40 h-40">
          <img
            src={avatar}
            alt="My Profile"
            className="w-full h-full rounded-full object-cover border-4 border-gray-100"
          />

          {/* Edit Icon */}
          <form>
            <input
              type="file"
              name="avatar"
              id="avatar"
              accept="png, jpg, jpeg"
              className="hidden"
            />
            <label
              htmlFor="avatar"
              className="absolute bottom-2 right-2 bg-indigo-600 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-700 transition"
            >
              <FaEdit size={14} />
            </label>
          </form>

          {/* Save Button */}
          <button className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600 transition">
            <FaCheck size={14} />
          </button>
        </div>

        {/* User Info */}
        <h1 className="mt-10 text-2xl font-bold text-gray-800">
          Yashika Agrawal
        </h1>
        <form onSubmit={handleSubmit}>
          <p>This is error message</p>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => {
              setCurrentPassword(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmNewPassword(e.target.value);
            }}
          />
          <button type="submit">Update Profile Details</button>
        </form>
      </div>
    </section>
  );
};

export default UserProfile;
