"use client";

import { animatePageIn } from "@/animations";
import { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="transition-element"
        className="w-screen h-screen bg-stone-100 z-100 fixed top-0 left-0"
      ></div>
      {children}
    </div>
  );
};

export default Template;
