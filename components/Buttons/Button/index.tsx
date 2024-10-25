"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        className,
        "bg-ichigo capitalize rounded-[5px] duration-200 active:scale-[0.95]"
      )}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
