"use client";

import Image from "next/image";
import { cases } from "@/data/caseData";
import { notFound } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/Icons";

interface SingleCaseProps {
  slug: string;
}

export default function SingleCase({ slug }: SingleCaseProps) {
  const caseItem = cases.find((c) => c.slug === slug);
  const [isStuck, setIsStuck] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  if (!caseItem) {
    notFound();
  }

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

  function addCustomHyphens(title: string): string {
    const hyphenMap: Record<string, string> = {
      Malmöfestivalen: "Malmö\u00ADfestivalen",
      Illustrationsfestival: "Illustrations\u00ADfestival",
      "Grindebacken Strandhak": "Grinde\u00ADbacken Strandhak",
    };

    return hyphenMap[title] || title;
  }

  return (
    <section className="col-span-full md:col-span-8 2xl:col-span-10 flex flex-col gap-4">
      <div
        ref={headerRef}
        className="flex sticky flex-col pt-5 pb-3 gap-2 bg-gray-200 top-0 z-10"
      >
        <div className="flex justify-between">
          <Link href={`/`} className="hover:opacity-60">
            <ArrowLeftIcon className="w-8 h-8 text-white" />
          </Link>
          <h2
            className={`text-2xl font-semibold transition-opacity duration-300 2xl:hidden ${
              isStuck ? "opacity-100" : "opacity-0"
            }`}
          >
            {caseItem.title}
          </h2>
        </div>
      </div>

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
        <div className="flex flex-col h-fit gap-4 order-1 2xl:order-2 2xl:sticky 2xl:top-22 2xl:px-16 2xl:py-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-6xl font-semibold hyphens-auto md:hyphens-none break-words">
              {addCustomHyphens(caseItem.title)}
            </h2>
            <div className="text-md font-regular italic lg:text-2xl">
              {caseItem.category}
            </div>
          </div>
          {caseItem.description && (
            <p className="text-md leading-[1.5] font-light max-w-[560px] lg:text-lg">
              {caseItem.description}
            </p>
          )}
          <div className="flex flex-wrap gap-1 text-sm">
            {caseItem.tools && caseItem.tools.length > 0
              ? caseItem.tools.map((tool, index) => (
                  <div
                    className="px-2 py-1 lg:px-3 border border-black rounded-full"
                    key={index}
                  >
                    <p key={index} className="text-xs lg:text-sm">
                      {tool}
                    </p>
                  </div>
                ))
              : null}
          </div>
          {caseItem.website && (
            <a
              href={caseItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 lg:text-md"
            >
              {caseItem.website}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
