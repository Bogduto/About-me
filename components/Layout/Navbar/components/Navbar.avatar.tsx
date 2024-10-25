"use client";
import React from "react";

const NavbarAvatar = ({avatar}: {avatar?: string}) => {
  return (
    <>
      {avatar && (
        <img
          className="w-[35px] h-[35px] rounded-[35px]"
          src={avatar}
          alt="avatar"
        />
      )}
    </>
  );
};

export default NavbarAvatar;
