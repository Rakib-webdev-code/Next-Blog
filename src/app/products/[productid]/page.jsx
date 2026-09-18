
import Image from "next/image";
import React from "react";
import { FcRating } from "react-icons/fc";
import { notFound } from "next/navigation";

const ProductDetailsPage = async ({ params }) => {
  const { productid } = await params;

  const res = await fetch(
    `https://dummyjson.com/products/${productid}`
  );

  const product = await res.json();

  if (!product || !product.id) {
    notFound();
  }

  const {
    title,
    description,
    price,
    rating,
    brand,
    category,
    images,
    stock,
    availabilityStatus,
    discountPercentage,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
    minimumOrderQuantity,
  } = product;

  return (
    <main className="container mx-auto px-4 py-10">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="grid grid-cols-1 gap-8 p-6 md:p-10 lg:grid-cols-2">

          {/* Product Image */}
          <div className="flex items-center justify-center rounded-2xl bg-gray-50 p-6">
            <Image
              src={images[0]}
              alt={title}
              width={600}
              height={600}
              className="h-auto w-full max-w-md object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600">
                {category}
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-600">
                {brand}
              </span>
            </div>

            <h1 className="text-3xl font-bold capitalize text-gray-900 md:text-4xl">
              {title}
            </h1>

            <p className="mt-4 leading-7 text-gray-600">
              {description}
            </p>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-2">
              <FcRating className="text-xl" />
              <span className="font-semibold text-gray-800">
                {rating}
              </span>
              <span className="text-sm text-gray-500">
                Customer Rating
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-3xl font-bold text-orange-500">
                ${price}
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
                {discountPercentage}% OFF
              </span>
            </div>

            {/* Stock */}
            <div className="mt-5">
              <p className="text-sm text-gray-500">
                Availability
              </p>

              <p className="mt-1 font-semibold text-green-600">
                {availabilityStatus} — {stock} items available
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
                Order Now
              </button>

              <button className="rounded-full border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-50">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="border-t border-gray-200 bg-gray-50 px-6 py-8 md:px-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Product Information
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl bg-white p-4">
              <p className="text-sm text-gray-500">
                Warranty
              </p>
              <p className="mt-1 font-semibold text-gray-900">
                {warrantyInformation}
              </p>
            </div>

            <div className="rounded-xl bg-white p-4">
              <p className="text-sm text-gray-500">
                Shipping
              </p>
              <p className="mt-1 font-semibold text-gray-900">
                {shippingInformation}
              </p>
            </div>

            <div className="rounded-xl bg-white p-4">
              <p className="text-sm text-gray-500">
                Return Policy
              </p>
              <p className="mt-1 font-semibold text-gray-900">
                {returnPolicy}
              </p>
            </div>

            <div className="rounded-xl bg-white p-4">
              <p className="text-sm text-gray-500">
                Minimum Order
              </p>
              <p className="mt-1 font-semibold text-gray-900">
                {minimumOrderQuantity} items
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;

