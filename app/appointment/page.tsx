"use client";

import React, { useState } from "react";

const sampleTreatments = [
  {
    name: "Haircut",
    price: 2500,
    description: "Professional haircut tailored to your style.",
    discount: 10,
  },
  {
    name: "Facial",
    price: 3500,
    description: "Relaxing facial treatment for glowing skin.",
    discount: 15,
  },
  {
    name: "Manicure",
    price: 2000,
    description: "Pampering manicure for beautiful nails.",
    discount: 5,
  },
  {
    name: "Pedicure",
    price: 2200,
    description: "Refreshing pedicure for soft, healthy feet.",
    discount: 8,
  },
  {
    name: "Hair Coloring",
    price: 5000,
    description: "Vibrant hair coloring with premium products.",
    discount: 20,
  },
];

export default function AppointmentPage() {
  const [search, setSearch] = useState("");
  const filteredTreatments = sampleTreatments.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-12 md:pt-[200px] pt-[150px]">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
        Select treatment you need
      </h1>
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search treatments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full text-black max-w-2xl px-6 py-4 rounded-full border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-black-400 text-lg"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredTreatments.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 text-xl">
            No treatments found.
          </div>
        ) : (
          filteredTreatments.map((treatment, idx) => {
            const discountedPrice =
              treatment.price - (treatment.price * treatment.discount) / 100;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 flex flex-col items-start shadow-lg hover:shadow-xl transition duration-200 border border-gray-100"
              >
                <h2 className="text-xl font-bold text-black mb-2">
                  {treatment.name}
                </h2>
                <p className="text-gray-500 mb-4">{treatment.description}</p>
                <div className="mt-auto w-full">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      Rs. {discountedPrice.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      Rs. {treatment.price.toFixed(2)}
                    </span>
                  </div>
                  <span className="text-xs text-green-600 font-medium">
                    {treatment.discount}% off
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
