"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { animatePageOut } from "@/animations";

export const TransitionLink = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <button
      className="border-[1px] border-black p-4 rounded-xl hover:bg-black hover:text-neutral-100 cursor-pointer"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
