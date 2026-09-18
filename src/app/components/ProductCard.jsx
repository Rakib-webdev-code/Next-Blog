
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcRating } from "react-icons/fc";

const ProductCard = ({ Product }) => {
  const {
    title,
    description,
    price,
    rating,
    brand,
    images,
    category,
    id,
  } = Product;

  return (
    <section className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="overflow-hidden bg-gray-50">
        <Image
          src={images[0]}
          alt={title}
          width={250}
          height={250}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Content */}
      <div className="space-y-4 p-5 text-left">

        {/* Brand & Category */}
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-500">
            {brand}
          </span>

          <span className="text-xs font-medium capitalize text-gray-400">
            {category}
          </span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-1 text-lg font-bold capitalize text-gray-900">
          {title}
        </h2>

        {/* Description */}
        <p className="line-clamp-2 text-sm leading-6 text-gray-500">
          {description}
        </p>

        {/* Price & Rating */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-2xl font-bold text-gray-900">
            ${price}
          </span>

          <div className="flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1">
            <FcRating />
            <span className="text-sm font-semibold text-gray-700">
              {rating}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <Link
            href={`/products/${id}`}
            className="flex-1 rounded-full bg-orange-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Show Details
          </Link>

          <button className="flex-1 rounded-full border border-orange-500 px-4 py-2.5 text-sm font-semibold text-orange-500 transition hover:bg-orange-50">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;

