"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// interfaces
import { WorkI } from "./work.interface";

const WorkCart: React.FC<WorkI> = ({ image, title, desc, website }) => {
  return (
    <Link href={`/works/${website}`} shallow className="block w-full min-h-[150px]">
      <article className="w-full">
        <div className="relative w-full mb-5 mobile:min-h-[150px] mobileM:min-h-[200px] tablet:min-h-[270px]">
          <Image src={image} fill alt={`${title} preview`} className="object-cover" />
        </div>

        <h2 className="mb-2 capitalize text-black dark:text-white text-lg font-bold">
          {title}
        </h2>

        <p className="text-sm font-medium text-black dark:text-white">
          {desc.slice(0, 100)}
        </p>
      </article>
    </Link>
  );
};

export default WorkCart;
