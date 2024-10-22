"use client";
import React from "react";
import dynamic from "@/node_modules/next/dynamic";
// components
import DefaultContainer from "../containers/DefaultContainer/index";
import LanguageToggle from "../ToggleLanguage/index";

// services
import { getProfile } from "@/services/github.profile";
import NavbarList from "../NavbarList/index";

const ModeToggle = dynamic(() => import("../ToggleTheme/index"), {
  ssr: false,
});

const Navbar = async () => {
  const profile = (await getProfile()) as any;
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
        <NavbarList />
        <div className="w-[20px] h-[20px] block">
          <ModeToggle />
        </div>

        <div>
          <LanguageToggle />
        </div>
      </DefaultContainer>
    </div>
  );
};

export default Navbar;
