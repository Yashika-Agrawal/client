import React, { useState } from "react";
import PostItem from "./PostItem";
import { DUMMY_POSTS } from "../data";

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const postsPresent = posts.length > 0;
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {postsPresent
        ? posts.map((post) => <PostItem key={post.id} post={post} />)
        : "No posts available"}
    </section>
  );
};

export default Posts;
