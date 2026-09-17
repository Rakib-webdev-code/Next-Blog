
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
  const { id, title, body } = blog;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Blog Number */}
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
          Blog #{id}
        </span>

        <span className="text-sm text-gray-400">Next Blog</span>
      </div>

      {/* Blog Content */}
      <div className="flex-1">
        <h2 className="mb-3 line-clamp-2 text-xl font-bold capitalize text-gray-900 transition group-hover:text-orange-500">
          {title}
        </h2>

        <p className="line-clamp-3 leading-7 text-gray-600">
          {body}
        </p>
      </div>

      {/* Details Button */}
      <div className="mt-6">
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 font-semibold text-white transition hover:bg-orange-600"
        >
          Read Details
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
