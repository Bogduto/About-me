"use client";
import React from "react";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
const WorkCart = ({
  image,
  title,
  desc,
  website
}: {
  image: string;
  title: string;
  desc: string;
  website: string
}) => {
  return (
    <Link className="w-full min-h-[150px]" href={`/works/${website}`}>
      {/* image */}
      <div className="relative w-full min-h-[270px] mb-[20px]">
        <Image src={image} fill alt="home page" />
      </div>
      {/* title */}
      <div className="mb-[10px] capitalize text-black dark:text-white text-[17px] font-bold">{title}</div>
      {/* description */}
      <div className="text-[14px] font-medium text-black dark:text-white">{desc.slice(0, 100)}</div>
    </Link>
  );
};

export default WorkCart;
