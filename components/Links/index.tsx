"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import { Button } from "../ui/button";
import { SquareCode, Github, Linkedin } from "lucide-react";
import Section from "../Section/index";
import { useTranslation } from "react-i18next";

const HelpfulLinksSection = () => {
  const { t } = useTranslation();
  return (
    <Section sectionId="links" title="links">
      <div className="py-[10px]">
        <h3 className="text-[15px] text-medium text-gray-300 capitalize">
        {t('helpfulLinks.social')}

        </h3>
        <ul className="flex flex-col gap-[20px] mt-[5px]">
          <li className="cursor-pointer font-medium dark:text-white dark:hover:text-white-hover dark:text-white-active text-black hover:text-black-hover active:text-black-active capitalize">
            <Link
              className="flex flex-row gap-[10px]"
              href={"https://github.com/Bogduto"}
              target="_blank"
            >
              <Github />
              github
            </Link>
          </li>

          <li className="cursor-pointer font-medium dark:text-white dark:hover:text-white-hover dark:text-white-active text-black hover:text-black-hover active:text-black-active capitalize">
            <Link
              className="flex flex-row gap-[10px]"
              href={"https://www.linkedin.com/in/bogdan-vakulenko-89415229b/"}
              target="_blank"
            >
              <Linkedin />
              Linkedin
            </Link>
          </li>
        </ul>
      </div>
      <div className="py-[10px]">
        <h3 className="text-[15px] text-medium text-gray-300 capitalize">
        {t('helpfulLinks.freelance')}
        </h3>

        <ul className="flex flex-col gap-[20px] mt-[5px]">
          <li className="cursor-pointer font-medium dark:text-white dark:hover:text-white-hover dark:text-white-active text-black hover:text-black-hover active:text-black-active capitalize">
            <Link
              className="flex flex-row gap-[10px]"
              href={"https://www.linkedin.com/in/bogdan-vakulenko-89415229b/"}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-handshake"
              >
                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                <path d="m21 3 1 11h-2" />
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                <path d="M3 4h8" />
              </svg>
              Fiverr
            </Link>
          </li>
        </ul>
      </div>
      <div className="py-[10px]">
        <h3 className="text-[15px] text-medium text-gray-300 capitalize">
          {t("helpfulLinks.another")}
        </h3>
        <ul className="flex flex-col gap-[20px] mt-[5px]">
          <li className="cursor-pointer font-medium dark:text-white dark:hover:text-white-hover dark:text-white-active text-black hover:text-black-hover active:text-black-active capitalize">
            <Link
              className="flex flex-row gap-[10px]"
              href={"https://github.com/Bogduto/About-me"}
              target="_blank"
            >
              <SquareCode />
              {t("helpfulLinks.source")}
            </Link>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default HelpfulLinksSection;
