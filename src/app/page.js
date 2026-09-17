import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const page = () => {
  return (
    <main className="flex flex-1 items-center justify-center bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-5 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
          Welcome to NextBlog
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Learn, Build & Share
          <span className="block text-blue-600">With Next.js</span>
        </h1>

        {/* <Image className='my-7 object-cover' src='https://images.unsplash.com/photo-1498050108023-c5249f4df085' alt='Banner Photo' width={900}height={500}></Image> */}

        <Image className='my-7' src='https://images.unsplash.com/photo-1587620962725-abab7fe55159' alt='banner' width={1000} height={750} />

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Explore helpful articles, learn modern web development, and discover
          practical ideas for building better applications with Next.js.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/blogs"
            className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Explore Blogs
          </Link>

          <a
            href="/about"
            className="rounded-full border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            About NextBlog
          </a>
        </div>
      </div>
    </main>
  );
};

export default page;
