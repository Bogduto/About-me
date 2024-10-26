"use client";
import React from "react";
import { useRouter } from "@/node_modules/next/navigation";
// components
import {Button} from "@/components/Buttons/index";

// programming languages 
// platforms
// includes url link

const FilterButton = () => {
  // ?sort=a-z

  const router = useRouter();

  const handleSort = () => {
    console.log("click");
    
    router.push('?sort=a-z')
  }
  return (
    <Button onClick={handleSort} className={"p-[5px]"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#fff"
      >
        <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z" />
      </svg>
    </Button>
  );
};

export default FilterButton;