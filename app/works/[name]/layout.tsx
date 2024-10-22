import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bogduto | works",
};

const layoutWorks = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layoutWorks;
