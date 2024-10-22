"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import dynamic from "@/node_modules/next/dynamic";
// components
import DefaultContainer from "../containers/DefaultContainer/index";
// services
import { getProfile } from "@/services/github.profile";



const ModeToggle = dynamic(() => import("../ToggleTheme/index"), {
  ssr: false,
});

const Navbar = async () => {
  const profile = await getProfile();
  const avatar = profile?.avatar_url;

  return (
    <div className="z-10 w-full py-[5px] bg-inherit bg-[rgba(255, 255, 255, .4)] backdrop-blur-sm fixed top-0 left-0">
      <DefaultContainer customStyles="h-full items-center flex flex-row justify-between gap-[20px]">
        {avatar && (
          <img
            className="w-[35px] h-[35px] rounded-[35px]"
            src={avatar}
            alt="avatar"
          />
        )}
        <ul className="mobile:hidden mobileM:flex w-full h-full items-center justify-center flex-row gap-[20px]">
          <li className="">
            <Link
              scroll
              href="/#about"
              className="tablet:text-[16px] mobile:text-[13px] capitalize font-medium duration-200 text-black dark:text-white dark:hover:text-white-hover dark:active:text-white-active hover:text-black-hover active:text-black-active"
            >
              About
            </Link>
          </li>
          <li className="">
            <Link
              scroll
              href="/#works"
              className="tablet:text-[16px] mobile:text-[13px] capitalize font-medium duration-200 text-black dark:text-white dark:hover:text-white-hover dark:active:text-white-active hover:text-black-hover active:text-black-active"
            >
              Works
            </Link>
          </li>
          <li className="">
            <Link
              scroll
              href="/#links"
              className="tablet:text-[16px] mobile:text-[13px] capitalize font-medium duration-200 text-black dark:text-white dark:hover:text-white-hover dark:active:text-white-active hover:text-black-hover active:text-black-active"
            >
              Helpful Links
            </Link>
          </li>
        </ul>
        <div className="w-[20px] h-[20px] block">
          <ModeToggle />
        </div>
      </DefaultContainer>
    </div>
  );
};

export default Navbar;
