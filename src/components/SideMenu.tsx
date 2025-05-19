"use client";

import { ChevrownRightIcon } from "@/components/Icons";
import { useSideMenu } from "@/context/SideMenuContext";
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
    <section className="flex flex-col gap-8 sticky top-0 h-fit">
      <div className="flex flex-col pt-5 bg-gray-200 gap-4">
        <div className="flex flex-col gap-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("about")}
          >
            <h2 className="text-2xl font-semibold">About</h2>
            <ChevrownRightIcon
              className={`w-8 h-8 transition-transform duration-300 ${
                openSections.about ? "rotate-90" : ""
              }`}
            />
          </div>
          <hr className="border-t-2 border-black" />
        </div>
        <div
          className={`grid ${
            shouldAnimate ? "transition-all duration-300 ease-in-out" : ""
          } ${openSections.about ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden">
            <p className="text-md leading-[1.5] font-light">
              With a background in arts and crafts i bring my knowledge in
              classic design techniques into the digital landscape. I get
              excited about visual problem solving and depending on the needs of
              the project I use design, code and animation to deliver the
              desired result.
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
            <h2 className="text-2xl font-semibold">CV</h2>
            <ChevrownRightIcon
              className={`w-8 h-8 transition-transform duration-300 ${
                openSections.cv ? "rotate-90" : ""
              }`}
            />
          </div>
          <hr className="border-t-2 border-black" />
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
                <div className="flex justify-between">
                  <h5 className="text-md font-light">2020 –</h5>
                </div>
              </div>
              <h2 className="underline underline-offset-3 font-semibold">
                Education
              </h2>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-medium">YRGO</h4>
                <div className="flex justify-between">
                  <h5 className="text-md font-light">Web developer</h5>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-medium">Kunsthøgskolen i Oslo</h4>
                <div className="flex gap-1 items-baseline">
                  <h5 className="text-md font-light">
                    Bachelor in Graphic Design
                  </h5>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-medium">School Of Motion</h4>
                <div className="flex gap-1 items-baseline">
                  <h5 className="text-md font-light">Animation bootcamp</h5>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-regular">hugosandsjo@gmail.com</h3>
            <h3 className="text-lg font-regular">0707224289</h3>
            <h3 className="text-lg font-regular">Instagram</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
