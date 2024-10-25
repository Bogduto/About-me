"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import { useTranslation } from "react-i18next";

const NavbarList = () => {
  const { t } = useTranslation();
  return (
    <ul className="mobile:hidden mobileM:flex w-full h-full items-center justify-center flex-row gap-[20px]">
      <li className="">
        <Link
          scroll
          href="/#about"
          className="tablet:text-[16px] mobile:text-[13px] capitalize font-medium duration-200 text-black dark:text-white dark:hover:text-white-hover dark:active:text-white-active hover:text-black-hover active:text-black-active"
        >
          {t("nav.about")}
        </Link>
      </li>
      <li className="">
        <Link
          scroll
          href="/#works"
          className="tablet:text-[16px] mobile:text-[13px] capitalize font-medium duration-200 text-black dark:text-white dark:hover:text-white-hover dark:active:text-white-active hover:text-black-hover active:text-black-active"
        >
          {t("nav.works")}
        </Link>
      </li>
      <li className="">
        <Link
          scroll
          href="/#links"
          className="tablet:text-[16px] mobile:text-[13px] capitalize font-medium duration-200 text-black dark:text-white dark:hover:text-white-hover dark:active:text-white-active hover:text-black-hover active:text-black-active"
        >
          {t("nav.links")}
        </Link>
      </li>
    </ul>
  );
};

export default NavbarList;
