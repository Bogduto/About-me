"use client";
import React from "react";
// components
import DefaultContainer from "../../Containers/DefaultContainer/index";
import { Avatar, List, Buttons } from "./components/index";
// services
import { getProfile } from "@/services/github.profile";

const Navbar = async () => {
  const profile = (await getProfile()) as any;
  const avatar = profile?.avatar_url;

  return (
    <div className="z-10 w-full py-[5px] bg-inherit bg-[rgba(255, 255, 255, .4)] backdrop-blur-sm fixed top-0 left-0">
      <DefaultContainer customStyles="h-full items-center flex flex-row justify-between gap-[20px]">
        <Avatar avatar={avatar} />
        <List />
        <Buttons />
      </DefaultContainer>
    </div>
  );
};

export default Navbar;
