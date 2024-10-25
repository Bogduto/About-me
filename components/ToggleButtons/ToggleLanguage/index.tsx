"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {currentLanguage != "en" ? (
        <button
          className="font-bold text-[14px]"
          onClick={() => handleChangeLanguage("en")}
        >
          EN
        </button>
      ) : (
        <button
          className="font-bold text-[14px]"
          onClick={() => handleChangeLanguage("ua")}
        >
          UA
        </button>
      )}
    </>
  );
};

export default LanguageToggle;
