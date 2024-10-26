"use client";
import React from "react";
import Image from "@/node_modules/next/image";

const NavbarAvatar = ({ avatar }: { avatar?: string }) => {
  return (
    <>
      {avatar && (
        <div className="w-[45px] h-[35px] relative">
          <Image src={avatar} className="rounded-[35px]" alt="avatar" fill />
        </div>
      )}
    </>
  );
};

export default NavbarAvatar;
