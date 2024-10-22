"use client";
import { cn } from "@/lib/utils";
import React from "react";

const DefaultContainer = ({ children, customStyles }: any) => {
  return (
    <div
      className={cn(
        customStyles,
        "mobile:px-[20px] tablet:px-0 mobile:w-full tablet:w-[500px] mx-auto"
      )}
    >
      {children}
    </div>
  );
};

// mobile:px-[20px] tablet:px-[0]

export default DefaultContainer;
