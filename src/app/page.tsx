"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "@/app/globals.css";
import SideMenu from "@/components/SideMenu";
import WorkGrid from "@/components/WorkGrid";

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
    <div className="bg-gray-200 flex flex-col items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-12 row-start-2 items-center md:items-start md:gap-10 w-full px-8 md:px-20 pb-20 md:pt-40">
        <div className="order-2 md:order-1 col-span-full md:col-span-4 2xl:col-span-2 h-full">
          <SideMenu />
        </div>
        <div className="order-1 md:order-2 col-span-full md:col-span-8 2xl:col-span-10">
          <WorkGrid />
        </div>
      </main>
    </div>
  );
}
