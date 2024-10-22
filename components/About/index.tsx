"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import Section from "../Section/index";

const AboutSection = () => {
  return (
    <Section title="About" sectionId="about">
      <p className="text-[15px] text-left text-black dark:text-white">
        Hello, I&apos;m Bogdan from Ukraine, and I am passionate about computer
        science. I&apos;ve been studying computer science at university while
        also working as a Full Stack developer, specializing in website
        development using{" "}
        <span className="font-bold">
          <Link
            className="duration-200 text-ichigo hover:text-black-hover"
            href="https://react.dev/"
          >
            React.js
          </Link>
        </span>{" "}
        and{" "}
        <span className="font-bold">
          <Link
            className="duration-200 text-ichigo hover:text-black-hover"
            href={"https://nextjs.org/"}
          >
            Next.js
          </Link>
        </span>{" "}
        frameworks.
      </p>
    </Section>
  );
};

export default AboutSection;
