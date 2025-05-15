"use client";

import { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of our context state
type SideMenuContextType = {
  openSections: {
    about: boolean;
    cv: boolean;
  };
  toggleSection: (section: "about" | "cv") => void;
};

// Create context with default values
const SideMenuContext = createContext<SideMenuContextType>({
  openSections: {
    about: true,
    cv: false,
  },
  toggleSection: () => {},
});

// Create a provider component
export function SideMenuProvider({ children }: { children: ReactNode }) {
  // State to track which sections are open
  const [openSections, setOpenSections] = useState({
    about: true,
    cv: false,
  });

  // Function to toggle each section
  const toggleSection = (section: "about" | "cv") => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <SideMenuContext.Provider value={{ openSections, toggleSection }}>
      {children}
    </SideMenuContext.Provider>
  );
}

// Create a custom hook for accessing the context
export function useSideMenu() {
  const context = useContext(SideMenuContext);
  if (context === undefined) {
    throw new Error("useSideMenu must be used within a SideMenuProvider");
  }
  return context;
}
