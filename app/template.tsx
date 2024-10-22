"use client";
import i18n from "@/lib/i18n";
import React from "react";
import { I18nextProvider } from "react-i18next";

const template = ({ children }: any) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default template;
