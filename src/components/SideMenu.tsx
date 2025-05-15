"use client";

import { ChevrownRightIcon } from "@/components/Icons";
import { useState } from "react";

export default function SideMenu() {
  // State to track which sections are open
  const [openSections, setOpenSections] = useState({
    about: true,
    cv: true,
  });

  // Function to toggle each section
  const toggleSection = (section: "about" | "cv") => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section className="flex flex-col gap-8 sticky top-0 h-fit">
      <div className="flex flex-col pt-5 bg-gray-200 gap-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("about")}
        >
          <h1 className="text-2xl font-semibold">About</h1>
          <ChevrownRightIcon
            className={`w-8 h-8 transition-transform duration-150 ${
              openSections.about ? "rotate-90" : ""
            }`}
          />
        </div>
        <hr className="border-t-2 border-black" />
        {openSections.about && (
          <p className="text-md leading-[1.5] font-light">
            With a background in arts and crafts i bring my knowledge in classic
            design techniques into the digital landscape. I get excited about
            visual problem solving and depending on the needs of the project I
            use design, code and animation to deliver the desired result.
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("cv")}
        >
          <h1 className="text-2xl font-semibold">CV</h1>
          <ChevrownRightIcon
            className={`w-8 h-8 transition-transform duration-300 ${
              openSections.cv ? "rotate-90" : ""
            }`}
          />
        </div>
        <hr className="border-t-2 border-black" />
        {openSections.cv && (
          <>
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
          </>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-medium">hugosandsjo@gmail.com</h3>
          <h3 className="text-lg font-medium">0707224289</h3>
          <h3 className="text-lg font-medium">Instagram</h3>
        </div>
      </div>
    </section>
  );
}
