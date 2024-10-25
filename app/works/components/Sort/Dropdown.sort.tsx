"use client"
import React from "react";

interface DropdownProps {
  open: boolean;
  onSort: (method: string) => void;
  sortmethods: { method: string; name: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ open, onSort, sortmethods }) => {
  return (
    <ul
      className={`w-[150px] absolute bg-white border mt-2 py-[10px] shadow-lg z-10 flex flex-col gap-2 transition-all duration-300 ease-in-out ${
        open
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      {sortmethods.map((item, key) => (
        <li
          key={key}
          className="active:scale-[0.95] duration-200 capitalize text-base text-black font-normal cursor-pointer py-[2px] px-[20px]"
          onClick={() => onSort(item.method)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
