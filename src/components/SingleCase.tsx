"use client";

import Image from "next/image";
import { cases } from "@/data/caseData";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

interface SingleCaseProps {
  slug: string;
}

export default function SingleCase({ slug }: SingleCaseProps) {
  // Find the case by slug
  const caseItem = cases.find((c) => c.slug === slug);

  // If no case is found, show 404
  if (!caseItem) {
    notFound();
  }

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
      <Link href={`/`}>
        <h2 className="text-2xl font-semibold">Back to cases</h2>
      </Link>
      <hr className="border-t-2 border-black" />

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
        {/* Left column with all images */}
        <div className="flex flex-col gap-8">
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
                    : "aspect-[1/1]" // Default fallback
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
        <div className="w-full flex flex-col justify-between sticky top-5 h-fit overflow-y-auto gap-4 ">
          <h2 className="text-3xl font-semibold">{caseItem.title}</h2>
          <div className="text-md opacity-60 font-regular italic mb-2">
            {caseItem.category}
          </div>
          {caseItem.description && (
            <p className="text-md leading-[1.5] font-light">
              {caseItem.description}
            </p>
          )}
          {caseItem.website && (
            <a
              href={caseItem.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {caseItem.website}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
