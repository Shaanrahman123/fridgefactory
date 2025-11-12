"use client";

import { useEffect } from "react";
import AOS from "aos";

export const AosProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return <>{children}</>;
};