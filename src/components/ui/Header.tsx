"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Header() {
  const [isY, setIsY] = useState<number>(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsY(window.Math.round(window.scrollY));
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        // Cleanup the event listener when the component unmounts
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    // <header className="py-2 dark:bg-gray-950 sticky top-0 z-50 dark:text-gray-100">
    <header
      className={`w-full sticky top-0 z-50 py-2 text-white transition-all duration-300 ${
        isY >= 50 ? "bg-[#020617] shadow-md text-white" : "bg-transparent"
      }`}
    >
      <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
        <ul className="items-stretch hidden space-x-3 md:flex font-medium">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-4 border-b-2 dark:border-transparent"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-4 border-b-2 dark:border-transparent"
            >
              Grooming
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-4"
            >
              Consultation
            </Link>
          </li>
        </ul>
        <Link
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <p className="font-italiana font-bold text-2xl lg:text-5xl">
            Pet Shop
          </p>
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-4 border-b-2 dark:border-transparent"
            >
              Product
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-4 border-b-2 dark:border-transparent"
            >
              About
            </Link>
          </li>
          <li className="flex items-center px-4 -mb-4">
            <button className="px-8 font-semibold rounded-full border border-gray-500 py-2">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
