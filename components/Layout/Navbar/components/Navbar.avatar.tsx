"use client";
import React from "react";
import Image from "@/node_modules/next/image";

const NavbarAvatar = ({ avatar }: { avatar?: string }) => {
  return (
    <>
      {avatar && (
        <div className="w-[45px] h-[35px] relative">
          <Image className="rounded-[35px]" src={avatar} alt="avatar" fill />
        </div>
      )}
    </>
  );
};

export default NavbarAvatar;
