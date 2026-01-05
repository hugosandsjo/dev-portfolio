"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { cases } from "@/data/caseData";
import { ArrowOutwardIcon, ArrowUpwardIcon } from "@/components/Icons";

export default function WorkGrid() {
  const [isStuck, setIsStuck] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Observer for fade-in animation
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Select elements to observe for fade-in
    document.querySelectorAll(".fade-div").forEach((section) => {
      fadeObserver.observe(section);
    });

    // Observer for sticky header visibility
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        // When header is at the top (stuck to viewport), show the title
        setIsStuck(entry.intersectionRatio < 1);
      },
      {
        threshold: [1.0],
        rootMargin: "-1px 0px 0px 0px", // Trigger when exactly at top
      }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    // Cleanup function
    return () => {
      fadeObserver.disconnect();
      headerObserver.disconnect();
    };
  }, []);
  return (
    <section className="col-span-full md:col-span-8 2xl:col-span-10 flex flex-col gap-4">
      <div
        ref={headerRef}
        className="flex sticky flex-col pb-3 pt-5 gap-2 bg-gray-200 top-0 z-10"
      >
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">Work</h2>
          <div
            className={`transition-opacity xl:opacity-0 duration-300 ${
              isStuck ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ArrowUpwardIcon
              className="w-8 h-8 cursor-pointer hover:opacity-70 transition-opacity"
              onClick={scrollToTop}
            />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-8">
        {cases.map((caseItem) => (
          <Link
            key={caseItem.id}
            href={`/work/${caseItem.slug}`}
            className="flex flex-col gap-3 fade-div cursor-pointer group"
          >
            <div className="relative aspect-4/5 w-full">
              <Image
                src={caseItem.imagePath}
                alt={caseItem.title}
                fill
                className="object-cover absolute object-center"
                priority={caseItem.id === 1}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center relative">
                <h2 className="text-2xl font-semibold relative">
                  <span className="relative inline-block">
                    {caseItem.title}
                  </span>
                </h2>
                <div className="h-full">
                  <div className="overflow-hidden">
                    <ArrowOutwardIcon className="w-8 h-8 transform -translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg opacity-60 font-regular">
                {caseItem.category}
              </h3>
              {caseItem.description && (
                <p className="text-md leading-[1.5] font-light line-clamp-3">
                  {caseItem.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
