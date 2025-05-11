"use client";

import Image from "next/image";
import profilePic from "../../public/profile_image.jpg";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "@/app/globals.css";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });

    // Select elements to observe
    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-gray-200 flex flex-col items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="grid lg:flex-row grid-cols-2 row-start-2 items-center sm:items-start gap-10 w-full mt-20 px-8 md:px-20">
        <section className="col-span-full grid grid-cols-2 lg:flex-row gap-10 section">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-8">
            <h1 className="text-5xl md:text-6xl xl:text-8xl">Developer</h1>
            <p
              className="md:text-2xl font-inter leading-[1.5] "
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              With a background in arts and crafts i bring my knowledge in
              classic design techniques into the digital landscape. I get
              excited about visual problem solving and depending on the needs of
              the project I use graphic design, illustration and animation to
              deliver the desired result.
            </p>
          </div>
          <div className="relative col-span-2 lg:col-span-1 flex lg:justify-center">
            <Image src={profilePic} className="object-cover " alt="profile" />
          </div>
        </section>
        <section className="col-span-full grid grid-cols-2 lg:flex-row gap-10 section">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-8">
            <h1 className="text-5xl md:text-6xl xl:text-8xl">Developer</h1>
            <p
              className="md:text-2xl font-inter leading-[1.5] "
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              With a background in arts and crafts i bring my knowledge in
              classic design techniques into the digital landscape. I get
              excited about visual problem solving and depending on the needs of
              the project I use graphic design, illustration and animation to
              deliver the desired result.
            </p>
          </div>
          <div className="relative col-span-2 lg:col-span-1 flex lg:justify-center">
            <Image src={profilePic} className="object-cover " alt="profile" />
          </div>
        </section>
        <section className="col-span-full grid grid-cols-2 lg:flex-row gap-10 section">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-8">
            <h1 className="text-5xl md:text-6xl xl:text-8xl">Developer</h1>
            <p
              className="md:text-2xl font-inter leading-[1.5]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              With a background in arts and crafts i bring my knowledge in
              classic design techniques into the digital landscape. I get
              excited about visual problem solving and depending on the needs of
              the project I use graphic design, illustration and animation to
              deliver the desired result.
            </p>
          </div>
          <div className="relative col-span-2 lg:col-span-1 flex lg:justify-center">
            <Image src={profilePic} className="object-cover " alt="profile" />
          </div>
        </section>
        <section className="col-span-full grid grid-cols-2 lg:flex-row gap-10 section">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-8">
            <h1 className="text-5xl md:text-6xl xl:text-8xl">Developer</h1>
            <p
              className="md:text-2xl font-inter leading-[1.5]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              With a background in arts and crafts i bring my knowledge in
              classic design techniques into the digital landscape. I get
              excited about visual problem solving and depending on the needs of
              the project I use graphic design, illustration and animation to
              deliver the desired result.
            </p>
          </div>
          <div className="relative col-span-2 lg:col-span-1 flex lg:justify-center">
            <Image src={profilePic} className="object-cover " alt="profile" />
          </div>
        </section>
        <section className="col-span-full grid grid-cols-2 lg:flex-row gap-10 section">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-8">
            <h1 className="text-5xl md:text-6xl xl:text-8xl">Developer</h1>
            <p
              className="md:text-2xl font-inter leading-[1.5]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              With a background in arts and crafts i bring my knowledge in
              classic design techniques into the digital landscape. I get
              excited about visual problem solving and depending on the needs of
              the project I use graphic design, illustration and animation to
              deliver the desired result.
            </p>
          </div>
          <div className="relative col-span-2 lg:col-span-1 flex lg:justify-center">
            <Image src={profilePic} className="object-cover " alt="profile" />
          </div>
        </section>
      </main>
    </div>
  );
}
