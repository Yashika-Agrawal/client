import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({ post }) => {
  const { id, thumbnail, title, description, category } = post;
  const shortDescription =
    description.length > 145 ? description.substr(0, 145) + "..." : description;
  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Thumbnail */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        <Link to={`/posts/${id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">
            {title}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 line-clamp-3">{shortDescription}</p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <PostAuthor authorId={post.authorId} name="Yashika Agrawal" />

          <Link
            to={`/posts/categories/${category}`}
            className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
          >
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
