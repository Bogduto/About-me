"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import { Button } from "../ui/button";
import { SquareCode } from "lucide-react";
import Section from "../Section/index";

const HelpfulLinksSection = () => {
  return (
    <Section sectionId="links" title="Helpful links">
      <Button className="flex flex-row gap-[10px] capitalize border-[2px] border-black hover:border-black-hover active:border-black-active dark:border-white dark:hover:border-white-hover dark:active:border-white-active ">
        <SquareCode />
        source
      </Button>

      <ul className="flex flex-col gap-[20px] mt-[20px]">
        <li className="cursor-pointer font-medium dark:text-white dark:hover:text-white-hover dark:text-white-active text-black hover:text-black-hover active:text-black-active capitalize">
          <Link href={"https://github.com/Bogduto"} target="_blank">
            github
          </Link>
        </li>
      </ul>
    </Section>
  );
};

export default HelpfulLinksSection;
