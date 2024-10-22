import React from "react";
// components
import Navbar from "@/components/Navbar/index";

const homeLayout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <main className="pt-[60px]">{children}</main>
    </div>
  );
};

export default homeLayout;
