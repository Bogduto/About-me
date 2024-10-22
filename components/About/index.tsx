"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import Section from "../Section/index";
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <Section title="about" sectionId="about">
      <p className="text-[15px] text-left text-black dark:text-white">
        {t('about')}
        <span className="font-bold">
          <Link
            className="duration-200 text-ichigo hover:text-black-hover"
            href="https://react.dev/"
          >
            React.js
          </Link>
        </span>
        ,{" "}
        <span className="font-bold">
          <Link
            className="duration-200 text-ichigo hover:text-black-hover"
            href={"https://nextjs.org/"}
          >
            Next.js
          </Link>
        </span>{" "}
      </p>
    </Section>
  );
};

export default AboutSection;
