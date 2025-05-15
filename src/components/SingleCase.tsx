"use client";

import Image from "next/image";
import { cases } from "@/data/caseData";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

interface SingleCaseProps {
  slug: string;
}

export default function SingleCase({ slug }: SingleCaseProps) {
  const caseItem = cases.find((c) => c.slug === slug);

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
      <div className="flex sticky flex-col pt-5 gap-4 bg-gray-200 top-0 z-10">
        <div className="flex justify-between">
          <Link href={`/`}>
            <ArrowRightIcon className="w-8 h-8 hover:opacity-60" />
          </Link>
          <h2 className="text-2xl font-semibold">{caseItem.title}</h2>
        </div>
        <hr className="border-t-2 border-black z-20 w-full" />
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
        <div className="flex flex-col h-fit gap-8 order-1 2xl:order-2 2xl:sticky 2xl:top-22">
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
