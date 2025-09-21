"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const titles = ["Code!", "Design!", "Motion!"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % titles.length);
    }, 2500); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex gap-4 w-full justify-between items-center py-2 lg:py-8 px-4 lg:px-10 bg-gray-200">
      <Link href={"/"} className="w-10 h-10 lg:w-20 lg:h-20">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 377 409"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M186.95 409C113.198 409 53.2041 349.064 53.2041 275.383V0H108.942V275.383C108.942 318.361 143.93 353.316 186.95 353.316C229.97 353.316 264.958 318.361 264.958 275.383V0H320.696V275.383C320.696 349.064 260.701 409 186.95 409Z"
            fill="black"
          />
          <path
            d="M214.819 117.418V243.745H376.764V299.429H0V243.745H159.081V117.418H0V61.7334H376.764V117.418H214.819Z"
            fill="black"
          />
        </svg>
      </Link>

      <div className="relative flex justify-end items-center w-60 h-20 overflow-hidden">
        {titles.map((title, index) => (
          <h2
            key={title}
            className={`absolute text-4xl lg:text-6xl font-semibold w-full text-right transition-opacity duration-300 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}
