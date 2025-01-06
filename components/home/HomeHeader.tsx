// components/Header.tsx
import React from "react";

function HomeHeader() {
  return (
    <header
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/HomeHeaderImage.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navigation and Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center p-8">
          <div className="text-white text-5xl font-bold font-mono">
            Salon Floración
          </div>
          <ul className="flex space-x-14 mr-7 font-mono">
            <li>
              <a
                href="#"
                className="text-white text-xl font-extrabold rounded-full hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-xl font-extrabold rounded-full hover:underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-xl font-extrabold rounded-full hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-xl font-extrabold rounded-full hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Quote and CTA Section */}
        <div className="flex flex-col items-center justify-center text-center text-white px-6 h-full">
          <blockquote className="text-5xl text-nowrap font-semibold italic max-w-3xl mx-auto">
            &quot;Pamper yourself, you deserve it.&quot;
          </blockquote>
          <p className="mt-4 text-xl text-gray-300">
            Discover our premium services tailored just for you.
          </p>
          <button className="mt-8 px-9 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-lg rounded-full hover:shadow-lg hover:scale-105 transition transform">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
