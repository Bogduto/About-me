"use client";
import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear()
  return (
    <p className="text-center text-normal text-[14px] py-[30px]">© {year} Bogdan</p>
  );
};

export default Footer;
