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
    <main className="container mx-auto px-4 py-10">
      {" "}
      <article className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        {" "}
        <div className="bg-linear-to-r from-orange-500 to-amber-400 px-6 py-10 text-white md:px-10">
          {" "}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {" "}
            <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
              {" "}
              Blog #{blog.id}{" "}
            </span>{" "}
            <span className="text-sm text-orange-50">
              {" "}
              Author ID: {blog.userId}{" "}
            </span>{" "}
          </div>{" "}
          <h1 className="text-3xl font-bold capitalize leading-tight md:text-5xl">
            {" "}
            {blog.title}{" "}
          </h1>{" "}
        </div>{" "}
        <div className="px-6 py-8 md:px-10 md:py-10">
          {" "}
          <p className="text-lg leading-8 text-gray-600"> {blog.body} </p>{" "}
          <div className="mt-8 grid gap-4 border-t border-gray-200 pt-6 sm:grid-cols-2">
            {" "}
            <div className="rounded-xl bg-gray-50 p-4">
              {" "}
              <p className="text-sm text-gray-500">Blog ID</p>{" "}
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {" "}
                {blog.id}{" "}
              </p>{" "}
            </div>{" "}
            <div className="rounded-xl bg-gray-50 p-4">
              {" "}
              <p className="text-sm text-gray-500">User ID</p>{" "}
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {" "}
                {blog.userId}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </article>{" "}
    </main>
  );
};
export default BlogId;
