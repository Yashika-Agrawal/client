import React, { useState } from "react";
import Avatar1 from "../assets/images/avatar1.jpg";
import Avatar2 from "../assets/images/avatar2.jpg";
import Avatar3 from "../assets/images/avatar3.jpg";
import Avatar4 from "../assets/images/avatar4.jpg";
import Avatar5 from "../assets/images/avatar5.jpg";
import { Link } from "react-router-dom";

const authorsData = [
  { id: 1, avatar: Avatar1, name: "Ernest Achiever", posts: 3 },
  { id: 2, avatar: Avatar2, name: "Jane Doe", posts: 4 },
  { id: 3, avatar: Avatar3, name: "Yash Agrawal", posts: 5 },
  { id: 4, avatar: Avatar4, name: "Alex Johnson", posts: 9 },
  { id: 5, avatar: Avatar5, name: "Yashika Agrawal", posts: 6 },
];

const Authors = () => {
  const [authors] = useState(authorsData);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Authors</h2>

      {authors.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => (
            <Link
              key={author.id}
              to={`/posts/users/${author.id}`}
              className="flex items-center gap-4 bg-white border rounded-xl p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={author.avatar}
                alt={author.name}
                className="w-16 h-16 rounded-full object-cover border"
              />

              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {author.name}
                </h4>
                <p className="text-sm text-gray-500">{author.posts} posts</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className="text-center text-gray-500 text-xl">No authors found</h2>
      )}
    </section>
  );
};

export default Authors;
