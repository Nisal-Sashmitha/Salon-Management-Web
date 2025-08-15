"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const pathname = usePathname();

  console.log(pathname, isHome);

  //check if we are in home or not using the pathname
  useEffect(() => {
    setIsHome(pathname === "/");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={`w-full bg-center fixed top-0 left-0 z-50 h-20`}>
      {/* Navigation and Content */}
      <div className={`relative z-10 flex flex-col justify-between h-20`}>
        {/* Navigation Bar */}
        <nav
          className={`flex justify-between items-center p-4 md:p-8 transition-all duration-800 ${
            hasScrolled || !isHome ? "bg-black" : "transparent"
          }`}
        >
          <div className="text-white text-3xl md:text-5xl font-bold font-mono pl-5">
            <Image
              src="/assets/HomeLogo.png"
              alt="Salon Sash Logo"
              width={250}
              height={82.67}
            />
          </div>
          <ul className="hidden md:flex space-x-6 md:space-x-14 mr-7 font-mono">
            <li>
              <Link
                href="/"
                className="text-white text-lg md:text-xl font-extrabold rounded-full hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/appointment"
                className="text-white text-lg md:text-xl font-extrabold rounded-full hover:underline"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-white text-lg md:text-xl font-extrabold rounded-full hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white text-lg md:text-xl font-extrabold rounded-full hover:underline"
              >
                Contact
              </Link>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <line x1="18" y1="6" x2="6" y2="18" />{" "}
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </button>
            <Link
              href="/"
              className="text-2xl font-extrabold hover:underline"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-2xl font-extrabold hover:underline"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-2xl font-extrabold hover:underline"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-2xl font-extrabold hover:underline"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default HomeHeader;
