
import React from "react";
import BlogCard from "../components/blog";

const BlogsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <main className="container mx-auto px-4 py-10">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
          Our Blog
        </p>

        <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Explore Our Blogs
        </h1>

        <p className="leading-7 text-gray-600 md:text-lg">
          Explore our latest blog posts, discover useful ideas, and learn more
          about modern web development through simple and practical articles.
        </p>
      </section>

      <section className="mt-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Latest Blog Posts
          </h2>

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
            {data.length} Posts
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogsPage;
