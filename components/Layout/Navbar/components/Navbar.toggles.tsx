"use client";
import React from "react";
import dynamic from "@/node_modules/next/dynamic";
// components
import { ToggleLanguage } from "@/components/ToggleButtons/index";

const ToggleTheme = dynamic(
  () => import("../../../ToggleButtons/ToggleTheme/index"),
  {
    ssr: false,
  }
);

const NavbarToggles = () => {
  return (
    <div className="flex flex-row gap-[10px] items-center">
      <div className="w-[20px] h-[20px] block">
        <ToggleTheme />
      </div>

      <div>
        <ToggleLanguage />
      </div>
    </div>
  );
};

export default NavbarToggles;
