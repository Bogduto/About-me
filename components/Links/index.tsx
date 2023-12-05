"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import { Button } from "../ui/button";
import { SquareCode, Github } from "lucide-react";
import Section from "../Section/index";

const HelpfulLinksSection = () => {
  return (
    <Section sectionId="links" title="Helpful links">
      <ul className="flex flex-col gap-[20px] mt-[20px]">
        <li className="cursor-pointer font-medium dark:text-white dark:hover:text-white-hover dark:text-white-active text-black hover:text-black-hover active:text-black-active capitalize">
          <Link className="flex flex-row gap-[10px]" href={"https://github.com/Bogduto"} target="_blank">
            <Github />
            github
          </Link>
        </li>

        <li className="cursor-pointer font-medium dark:text-white dark:hover:text-white-hover dark:text-white-active text-black hover:text-black-hover active:text-black-active capitalize">
          <Link
            className="flex flex-row gap-[10px]"
            href={"https://github.com/Bogduto/About-me"}
            target="_blank"
          >
            <SquareCode />
            source
          </Link>
        </li>
      </ul>
    </Section>
  );
};

export default HelpfulLinksSection;
