import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/images/avatar1.jpg";

const PostAuthor = () => {
  return (
    <Link
      to={`/posts/users/1`}
      className="flex items-center gap-3 hover:opacity-80 transition"
    >
      <img
        src={Avatar}
        alt="Author avatar"
        className="w-10 h-10 rounded-full object-cover"
      />

      <div className="leading-tight">
        <h5 className="text-sm font-medium text-gray-800">
          By: Yashika Agrawal
        </h5>
        <small className="text-xs text-gray-500">Just now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
