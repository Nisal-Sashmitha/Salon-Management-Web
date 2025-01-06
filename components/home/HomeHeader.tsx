"use client";
import React, { useState } from "react";

function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/HomeHeaderImage.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navigation and Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center p-4 md:p-8">
          <div className="text-white text-3xl md:text-5xl font-bold font-mono">
            Salon Floración
          </div>
          <ul className="hidden md:flex space-x-6 md:space-x-14 mr-7 font-mono">
            <li>
              <a
                href="#"
                className="text-white text-lg md:text-xl font-extrabold rounded-full hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg md:text-xl font-extrabold rounded-full hover:underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg md:text-xl font-extrabold rounded-full hover:underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg md:text-xl font-extrabold rounded-full hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              className="text-white text-2xl focus:outline-none mt-3"
              onClick={toggleMenu}
            >
              <span className="material-icons">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center text-white space-y-6 z-20">
            <button
              className="absolute top-4 right-4 text-3xl focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="material-icons">
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <line x1="18" y1="6" x2="6" y2="18" />{" "}
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </button>
            <a
              href="#"
              className="text-2xl font-extrabold hover:underline"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#"
              className="text-2xl font-extrabold hover:underline"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#"
              className="text-2xl font-extrabold hover:underline"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#"
              className="text-2xl font-extrabold hover:underline"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        )}

        {/* Quote and CTA Section */}
        <div className="flex flex-col items-center justify-center text-center text-white px-4 md:px-6 h-full">
          <blockquote className="text-3xl md:text-5xl md:text-nowrap font-semibold italic max-w-2xl md:max-w-3xl mx-auto">
            &quot;Pamper yourself, you deserve it.&quot;
          </blockquote>
          <p className="mt-4 text-base md:text-xl text-gray-300">
            Discover our premium services tailored just for you.
          </p>
          <button className="mt-8 px-6 py-3 md:px-9 md:py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-base md:text-lg rounded-full hover:shadow-lg hover:scale-105 transition transform">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
