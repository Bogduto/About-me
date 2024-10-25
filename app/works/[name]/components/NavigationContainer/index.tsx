"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import { ArrowRight } from "lucide-react";

const NavigationContainer = ({ workName }: { workName: string }) => {
  return (
    <ul className="pb-[5px] flex flex-row items-center mb-[35px] gap-[8px]">
      <li>
        <Link
          className="border-b-[2px] border-b-ichigo text-black hover:text-black-hover active:text-black-active dark:text-white dark:hover:text-white-hover dark:active:text-white-active duration-200 capitalize font-medium text-[14px]"
          href="/"
        >
          Home
        </Link>
      </li>
      <div className="relative flex flex-row items-center justify-center w-[14px] h-[14px]">
        <ArrowRight />
      </div>
      <li className="capitalize font-medium text-[14px]">{workName}</li>
    </ul>
  );
};

export default NavigationContainer;
