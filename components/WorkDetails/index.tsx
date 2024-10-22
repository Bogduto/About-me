"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import { useTranslation } from "react-i18next";

const WorkDetails = ({ work }: any) => {
  const { t } = useTranslation();
  
  return (
    <ul className="flex flex-col gap-[20px] my-[40px]">
      {work.website && (
        <li className="flex flex-row items-center gap-[10px]">
          <span className="text-white rounded-[2px] uppercase bg-ichigo px-[12px] font-bold text-[13px]">
            {t("work.details.website")}
          </span>
          <Link
            href={work.website}
            target="_blank"
            className="font-bold text-[14px] text-black hover:text-black-hover active:text-black-active dark:text-white dark:hover:text-white-hover dark:active:text-white-active cursor-pointer"
          >
            {work.website}
          </Link>
        </li>
      )}

      <li className="flex flex-row items-center gap-[10px]">
        <span className="text-white rounded-[2px] uppercase bg-ichigo px-[12px]  font-bold text-[13px]">
          {t("work.details.platforms")}
        </span>
        <span className="font-bold text-[14px] text-black dark:text-white">
          {work.platforms.join("/")}
        </span>
      </li>

      <li className="flex flex-row items-center gap-[10px]">
        <span className="text-white rounded-[2px] uppercase bg-ichigo px-[12px] font-bold text-[13px]">
          {t("work.details.stack")}
        </span>
        <span className="font-bold capitalize text-[14px] text-black dark:text-white">
          {work.stack.join(", ")}
        </span>
      </li>
    </ul>
  );
};

export default WorkDetails;
