"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
// components
import { Button } from "@/components/Buttons/index";
import { DropdownSort } from "../index";

export const sortmethods = [
  { method: "a-z", name: "A to Z" },
  { method: "z-a", name: "Z to A" },
  { method: "createdDate", name: "Created date" },
];

const SortButton = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown container

  const handleSort = (method: string) => {
    router.push(`?sort=${method}`);
    setOpen(false);
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button onClick={handleClick} className={"p-[5px]"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff"
        >
          <path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </Button>

      <DropdownSort open={open} onSort={handleSort} sortmethods={sortmethods} />
    </div>
  );
};

export default SortButton;
