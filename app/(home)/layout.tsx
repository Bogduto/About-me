import React from "react";
import type { Metadata } from "next";

// components
import Navbar from "@/components/Navbar/index";


export const metadata: Metadata = {
  title: "Bogduto | home",
};

const homeLayout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <main className="pt-[60px]">{children}</main>
    </div>
  );
};

export default homeLayout;
