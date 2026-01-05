"use client";

import { ChevrownRightIcon } from "@/components/Icons";
import { useSideMenu } from "@/context/SideMenuContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SideMenu() {
  // Use the side menu context instead of local state
  const { openSections, toggleSection } = useSideMenu();
  // Add state to control animation
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Enable animations after initial render to prevent animations on page load
  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <section className="flex flex-col gap-2 sticky top-0 h-fit">
      <div className="flex flex-col pt-5 bg-gray-200 gap-4">
        <div className="flex flex-col gap-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("about")}
          >
            <h2 className="text-3xl font-semibold">About</h2>
            <ChevrownRightIcon
              className={`w-8 h-8 transition-transform duration-300 ${
                openSections.about ? "rotate-90" : ""
              }`}
            />
          </div>
        </div>
        <div
          className={`grid ${
            shouldAnimate ? "transition-all duration-300 ease-in-out" : ""
          } ${openSections.about ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden">
            <p className="text-md leading-[1.5] font-light">
              Hugo is a web developer and digital designer with a background in
              graphic design, illustration and animation. He moves seamlessly
              between creative idea development and technical implementation,
              creating solutions where design, function and user experience
              meet.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("cv")}
          >
            <h2 className="text-3xl font-semibold">CV</h2>
            <ChevrownRightIcon
              className={`w-8 h-8 transition-transform duration-300 ${
                openSections.cv ? "rotate-90" : ""
              }`}
            />
          </div>
        </div>
        <div
          className={`grid ${
            shouldAnimate ? "transition-all duration-300 ease-in-out" : ""
          } ${openSections.cv ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden">
            <section className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-medium">Enskild firma</h4>
                <h5 className="text-sm font-light">2020 –</h5>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-medium">Illustratörcentrum</h4>
                <div className="flex flex-col gap-1">
                  <h5 className="text-md font-normal">
                    Regional representative
                  </h5>
                  <h5 className="text-sm font-light">2022 –</h5>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-medium">ADA Sweden</h4>
                <div className="flex gap-1 flex-col">
                  <h5 className="text-md font-normal">Styrelsemedlem</h5>
                  <h5 className="text-sm font-light">2022 – 2025</h5>
                </div>
              </div>
              <h2 className="text-md font-medium tracking-wide">EDUCATION</h2>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-semibold">YRGO</h4>
                <h5 className="text-md font-normal">Web developer</h5>
                <h5 className="text-sm font-light">2023 – 2025</h5>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-medium">Kunsthøgskolen i Oslo</h4>
                <h5 className="text-md font-normal">
                  Bachelor in Graphic Design
                </h5>
                <h5 className="text-sm font-light">2017 – 2020</h5>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-medium">School Of Motion</h4>
                <div className="flex gap-1 items-baseline">
                  <h5 className="text-md font-normal">Animation bootcamp</h5>
                </div>
                <h5 className="text-sm font-light">2022</h5>
              </div>
              <h2 className="text-md font-medium tracking-wide">COMISSION</h2>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-medium">Art college</h4>
                <div className="flex gap-1 flex-col">
                  <h5 className="text-md font-normal">Teacher in animation</h5>
                  <h5 className="text-sm font-light">2023</h5>
                </div>
              </div>
              <h2 className="text-md font-medium tracking-wide">INTERNSHIP</h2>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-medium">Simma Lugnt</h4>
                <h5 className="text-md font-normal">Frontend Developer</h5>
                <h5 className="text-sm font-light">2024 – 2025</h5>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-medium">Aoki</h4>
                <h5 className="text-md font-normal">Designer</h5>
                <h5 className="text-sm font-light">2021 – 2022</h5>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 pb-2">
            <h3 className="text-lg font-regular">
              <Link
                href="mailto:hugosandsjo@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Hugo,%0A%0A"
                className="hover:opacity-70"
              >
                hugosandsjo@gmail.com
              </Link>
            </h3>
            <h3 className="text-lg font-regular">
              <Link href="tel:0707224289" className="hover:opacity-70">
                0707224289
              </Link>
            </h3>
            <h3 className="text-lg font-regular">
              <Link
                href={"https://www.instagram.com/hu_go_do/"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
              >
                Instagram
              </Link>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-md font-regular opacity-70">
              Selected clients:
            </h3>
            <h3 className="text-md font-regular opacity-70">
              Sveriges Länsstyrelser / Uppsala Stadsteater / Gatutidningen
              Faktum / Sveriges Stadsmissioner / Malmöfestivalen /
              Illustratörcentrum / Antaros Medical AB / Dum Keramik / Aoki /
              Stadshem / Gyldendal Norsk Forlag
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
