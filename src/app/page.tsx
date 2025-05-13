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
      <main className="grid lg:flex-row grid-cols-12 row-start-2 items-center sm:items-start gap-10 w-full px-8 md:px-20 pb-20 pt-40">
        <SideMenu />
        <WorkGrid />
      </main>
    </div>
  );
}
