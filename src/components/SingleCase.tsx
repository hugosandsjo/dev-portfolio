"use client";

import Image from "next/image";
import { cases } from "@/data/caseData";
import { notFound } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

interface SingleCaseProps {
  slug: string;
}

export default function SingleCase({ slug }: SingleCaseProps) {
  // Find the case by slug
  const caseItem = cases.find((c) => c.slug === slug);
  const [scrollPosition, setScrollPosition] = useState(0);
  const stickyRef = useRef<HTMLDivElement>(null);
  const initialScrollOffset = 500; // Adjust this value based on when you want the animation to start

  // If no case is found, show 404
  if (!caseItem) {
    notFound();
  }

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Apply transform based on scroll position
  useEffect(() => {
    if (stickyRef.current) {
      if (scrollPosition > initialScrollOffset) {
        const translateY = Math.min(
          100,
          ((scrollPosition - initialScrollOffset) / 300) * 100
        );
        stickyRef.current.style.transform = `translateY(-${translateY}%)`;
        stickyRef.current.style.opacity = `${1 - translateY / 100}`;
      } else {
        stickyRef.current.style.transform = "translateY(0)";
        stickyRef.current.style.opacity = "1";
      }
    }
  }, [scrollPosition]);

  useEffect(() => {
    const observer = new IntersectionObserver(
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

    // Select elements to observe
    document.querySelectorAll(".fade-div").forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="col-span-full md:col-span-8 2xl:col-span-10 flex flex-col gap-4">
      <div className="flex justify-between sticky bg-gray-200 z-10 top-0">
        <Link href={`/`}>
          <h3 className="text-2xl font-semibold">{"<"}</h3>
        </Link>
        <h2 className="text-2xl font-semibold">{caseItem.title}</h2>
      </div>
      <hr className="border-t-2 border-black" />
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
        {/* Left column with all images */}
        <div className="flex flex-col gap-8 order-2 2xl:order-1">
          {/* Main image */}
          <div className="relative aspect-4/5 w-full">
            <Image
              src={caseItem.imagePath}
              alt={caseItem.title}
              fill
              className="object-cover absolute object-center"
              priority
            />
          </div>

          {/* Additional images */}
          {caseItem.additionalImages &&
            caseItem.additionalImages.map((image, index) => (
              <div
                key={index}
                className={`relative w-full fade-div ${
                  caseItem.aspectRatio === "1/1"
                    ? "aspect-square"
                    : caseItem.aspectRatio === "16/10"
                    ? "aspect-[16/10]"
                    : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${caseItem.title} - Image ${index + 1}`}
                  fill
                  className="object-cover absolute object-center"
                />
              </div>
            ))}
        </div>

        {/* Right column with sticky text */}
        <div
          ref={stickyRef}
          className="w-full flex flex-col justify-between sticky top-12 py-5 h-fit overflow-y-auto 2xl:px-5 gap-4 order-1 2xl:order-2 bg-gray-200 transition-transform duration-300"
        >
          <div className="text-md font-regular italic mb-2">
            {caseItem.category}
          </div>
          {caseItem.description && (
            <p className="text-md leading-[1.5] font-light">
              {caseItem.description}
            </p>
          )}
          {caseItem.website && (
            <a
              href={caseItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-1"
            >
              {caseItem.website}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
