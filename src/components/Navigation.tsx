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
    <nav className="flex gap-4 w-full justify-between items-center py-8 px-10 md:px-20 bg-gray-200">
      <Link href={"/"} className="w-10 h-10 lg:w-20 lg:h-20">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 55 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.53503 9.59074V3.85234C8.53503 1.72475 10.2598 0 12.3874 0C14.515 0 16.2397 1.72475 16.2397 3.85234V9.59074H38.2648V3.85234C38.2648 1.72475 39.9895 0 42.1171 0C44.2447 0 45.9694 1.72475 45.9694 3.85234V9.59074H55V17.3477H45.9694V36.2796H55V44.0366H45.7521C44.3747 53.0765 36.6165 60 27.2522 60C17.8879 60 10.1298 53.0765 8.75238 44.0366H0V36.2796H8.53503V17.3477H0V9.59074H8.53503ZM19.8198 17.3477C17.8426 17.3477 16.2397 18.9506 16.2397 20.9278V36.2796H23.3999V20.9278C23.3999 18.9506 21.797 17.3477 19.8198 17.3477ZM34.6847 17.3477C32.7074 17.3477 31.1046 18.9506 31.1046 20.9278L31.1046 36.2796H38.2648V20.9278C38.2648 18.9506 36.6619 17.3477 34.6847 17.3477ZM37.8894 44.0366H16.6151C17.8749 48.7632 22.1599 52.243 27.2522 52.243C32.3446 52.243 36.6296 48.7632 37.8894 44.0366Z"
            fill="black"
          />
        </svg>
      </Link>

      <div className="relative flex justify-center items-baseline w-60 h-20 overflow-hidden">
        {titles.map((title, index) => (
          <h2
            key={title}
            className={`absolute text-4xl lg:text-6xl font-semibold w-full text-center transition-opacity duration-300 ${
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
