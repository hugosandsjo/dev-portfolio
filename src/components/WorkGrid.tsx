import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WorkGrid() {
  return (
    <section className="col-span-full md:col-span-8 2xl:col-span-10 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Work</h1>
      <hr className="border-t-2 border-black" />
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-8">
        <Link
          href={`/work/fullkoll`}
          className="flex flex-col gap-2 fade-div cursor-pointer"
        >
          <div className="relative h-[280px] w-full">
            <Image
              src={"/fullkoll/fullkoll_main.jpg"}
              alt="Image"
              fill
              className="object-cover absolute object-center"
              priority
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Full koll!</h2>
            <h3 className="text-md opacity-60 font-regular italic">
              Illustration
            </h3>
          </div>
          <p className="text-md leading-[1.5] font-light">
            Together with Gullersgrupp, I developed a set of illustrations and
            visual identity for the County Administrative Board and the Full
            Koll campaign. Intended to inform teenage parents about setting
            boundaries around alcohol and drugs and the importance of talking
            about the subject.
          </p>
        </Link>
        <Link
          href={`/work/dumkeramik`}
          className="flex flex-col gap-2 fade-div cursor-pointer"
        >
          <div className="relative h-[280px] w-full">
            <Image
              src={"/dumkeramik/dumkeramik.png"}
              alt="Image"
              fill
              className="object-cover absolute object-center"
              priority
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Dum keramik</h2>
            <h3 className="text-md opacity-60 font-regular italic">
              Development
            </h3>
          </div>
          <p className="text-md leading-[1.5] font-light">
            With a background-div arts and crafts i bring my knowledge-div
            classic design techniques into the digital landscape. I get excited
            about visual problem solving and depending on the...
          </p>
        </Link>
        <div className="flex flex-col gap-2 fade-div">
          <div className="relative h-[280px] w-full">
            <Image
              src={"/reel/Instagram_birdandgirl.gif"}
              alt="Image"
              fill
              className="object-cover absolute object-center"
              priority
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Motion reel</h2>
            <h3 className="text-md opacity-60 font-regular italic">
              Animation
            </h3>
          </div>
          <p className="text-md leading-[1.5] font-light">
            With a background-div arts and crafts i bring my knowledge-div
            classic design techniques into the digital landscape. I get excited
            about visual problem solving and depending on the...
          </p>
        </div>
        <div className="flex flex-col gap-2 fade-div">
          <div className="bg-black h-[240px] w-full"></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Full koll!</h2>
            <h3 className="text-md opacity-60 font-regular italic">
              Illustration
            </h3>
          </div>
          <p className="text-md leading-[1.5] font-light">
            With a background-div arts and crafts i bring my knowledge-div
            classic design techniques into the digital landscape. I get excited
            about visual problem solving and depending on the...
          </p>
        </div>
        <div className="flex flex-col gap-2 fade-div">
          <div className="bg-black h-[240px] w-full"></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Full koll!</h2>
            <h3 className="text-md opacity-60 font-regular italic">
              Illustration
            </h3>
          </div>
          <p className="text-md leading-[1.5] font-light">
            With a background-div arts and crafts i bring my knowledge-div
            classic design techniques into the digital landscape. I get excited
            about visual problem solving and depending on the...
          </p>
        </div>
        <div className="flex flex-col gap-2 fade-div">
          <div className="bg-black h-[240px] w-full"></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Full koll!</h2>
            <h3 className="text-md opacity-60 font-regular italic">
              Illustration
            </h3>
          </div>
          <p className="text-md leading-[1.5] font-light">
            With a background-div arts and crafts i bring my knowledge-div
            classic design techniques into the digital landscape. I get excited
            about visual problem solving and depending on the...
          </p>
        </div>
        <div className="flex flex-col gap-2 fade-div">
          <div className="bg-black h-[240px] w-full"></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Full koll!</h2>
            <h3 className="text-md opacity-60 font-regular italic">
              Illustration
            </h3>
          </div>
          <p className="text-md leading-[1.5] font-light">
            With a background-div arts and crafts i bring my knowledge-div
            classic design techniques into the digital landscape. I get excited
            about visual problem solving and depending on the...
          </p>
        </div>
        <div className="flex flex-col gap-2 fade-div">
          <div className="bg-black h-[240px] w-full"></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Full koll!</h2>
            <h3 className="text-md opacity-60 font-regular italic">
              Illustration
            </h3>
          </div>
          <p className="text-md leading-[1.5] font-light">
            With a background-div arts and crafts i bring my knowledge-div
            classic design techniques into the digital landscape. I get excited
            about visual problem solving and depending on the...
          </p>
        </div>
      </div>
    </section>
  );
}
