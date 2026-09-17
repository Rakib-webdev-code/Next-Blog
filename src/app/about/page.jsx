
import React from "react";

const AboutPage = () => {
  const features = [
    "Responsive blog layout",
    "Blog post listing",
    "Individual blog post pages",
    "Dynamic routing with Next.js",
    "Reusable React components",
    "Clean and simple user interface",
    "Mobile-friendly design",
  ];

  return (
    <main className="container mx-auto px-4 py-10">
      <section className="mx-autotext-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
          About Our Platform
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          About Next Blog
        </h1>

        <p className="text-lg leading-8 text-gray-600">
          A simple and responsive blog website built with Next.js.
          This project focuses on practicing modern web development
          concepts, reusable components, dynamic routing, and
          responsive user interfaces.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Key Features
        </h2>

        <ul className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 rounded-lg bg-gray-50 p-3 text-gray-700"
            >
              <span className="font-bold text-orange-500">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-10 max-w-4xl rounded-2xl bg-gray-900 p-6 text-white shadow-lg md:p-8">
        <h2 className="mb-4 text-2xl font-bold">
          About the Developer
        </h2>

        <p className="leading-8 text-gray-300">
          I’m Md. Rakib, an aspiring web developer from Bangladesh
          who enjoys building clean, responsive, and user-friendly
          web applications. Currently, I’m focused on React, Next.js,
          TypeScript, and modern web development.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;