import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cases } from "@/data/caseData";
import { ArrowOutwardIcon } from "@/components/Icons";

export default function WorkGrid() {
  return (
    <section className="col-span-full md:col-span-8 2xl:col-span-10 flex flex-col gap-4">
      <div className="flex sticky flex-col pt-5 gap-4 bg-gray-200 top-0 z-10">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">Work</h2>
        </div>
        <hr className="border-t-2 border-black z-20 w-full" />
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-8">
        {cases.map((caseItem) => (
          <Link
            key={caseItem.id}
            href={`/work/${caseItem.slug}`}
            className="flex flex-col gap-2 fade-div cursor-pointer group"
          >
            <div className="relative aspect-square sm:aspect-4/5 w-full">
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
                <h2 className="text-2xl font-semibold">{caseItem.title}</h2>
                <ArrowOutwardIcon className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" />
              </div>
              <h3 className="text-md opacity-60 font-regular italic">
                {caseItem.category}
              </h3>
            </div>
            {caseItem.description && (
              <p className="text-md leading-[1.5] font-light">
                {caseItem.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
