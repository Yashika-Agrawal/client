import React, { useState } from "react";
import { DUMMY_POSTS } from "../data";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">My Posts</h2>

      {posts.length > 0 ? (
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition"
            >
              {/* Left: Thumbnail + Title */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h5 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h5>
              </div>

              {/* Right: Actions */}
              <div className="flex gap-3 text-sm font-medium">
                <Link
                  to={`/posts/${post.id}`}
                  className="px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition"
                >
                  View
                </Link>

                <Link
                  to={`/posts/${post.id}/edit`}
                  className="px-4 py-2 rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition"
                >
                  Edit
                </Link>

                <Link
                  to={`/posts/${post.id}/delete`}
                  className="px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                >
                  Delete
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <h3 className="text-lg font-medium">No posts found</h3>
          <p className="text-sm mt-1">
            Start writing and they’ll appear here ✨
          </p>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
