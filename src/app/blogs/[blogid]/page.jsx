import React from "react";
import { notFound } from "next/navigation";
const BlogId = async ({ params }) => {
  const { blogid } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogid}`,
  );
  const data = await res.json();

  const blog = data;
  if (!data || !data.id) {
    notFound();
  }

  return (
    <div>
      <h2>Blog Id: {blogid}</h2>
      {blog && (
        <div>
          <h3>{blog.userId}</h3>
          <h3>{blog.id}</h3>
          <h2>{blog.title}</h2>
          <h2>{blog.body}</h2>
        </div>
      )}
    </div>
  );
};

export default BlogId;
