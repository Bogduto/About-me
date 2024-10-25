"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const { setTheme, theme } = useTheme();

  const handleChangeMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  
  return (
    <div
      className="cursor-pointer w-full h-full flex flex-row justify-center items-center"
      onClick={handleChangeMode}
    >
      {theme === "light" ? (
        <Sun className="w-full h-full active:w-[17px] active:h-[17px] duration-200 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Moon className="w-full h-full active:w-[17px] active:h-[17px] duration-200 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </div>
  );
};

export default ModeToggle;
