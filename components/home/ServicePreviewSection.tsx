import React from "react";
import Link from "next/link";

const services = [
  {
    name: "Haircut",
    description: "Professional haircut tailored to your style.",
    price: 2500,
    discount: 10,
    icon: "💇‍♀️",
  },
  {
    name: "Facial",
    description: "Relaxing facial treatment for glowing skin.",
    price: 3500,
    discount: 15,
    icon: "💆‍♀️",
  },
  {
    name: "Manicure",
    description: "Pampering manicure for beautiful nails.",
    price: 2000,
    discount: 5,
    icon: "💅",
  },
  {
    name: "Hair Coloring",
    description: "Vibrant hair coloring with premium products.",
    price: 5000,
    discount: 20,
    icon: "🎨",
  },
];

const ServicePreviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900 tracking-tight">Our Signature Services</h2>
        <p className="text-center text-lg text-gray-500 mb-12">Discover our most popular treatments, designed to make you look and feel your best.</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-7 flex flex-col items-center text-center border border-gray-100">
              <span className="text-5xl mb-4 text-gray-800">{service.icon}</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-500 mb-4">{service.description}</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                {service.discount > 0 ? (
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end">
                      <span className="flex items-center gap-1 text-base text-red-400 line-through font-semibold">
                        Rs. <span>{service.price}</span>
                      </span>
                      <span className="text-xs text-red-500 font-medium">Previous</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="flex items-center gap-1 text-xl font-bold text-gray-900">
                        Rs. <span>{Math.round(service.price * (1 - service.discount / 100))}</span>
                      </span>
                      <span className="text-xs text-green-600 font-medium">Now</span>
                    </div>
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full border border-red-200 shadow">{service.discount}% OFF</span>
                  </div>
                ) : (
                  <span className="flex items-center gap-1 text-lg font-medium text-gray-900">Rs. <span>{service.price}</span></span>
                )}
              </div>
                {/* Removed 'View All Services' button as requested */}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/appointment">
            <button className="px-8 py-4 text-xl font-semibold bg-black text-white rounded-full shadow-lg hover:bg-gray-900 transition-colors">Explore All Services</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePreviewSection;
