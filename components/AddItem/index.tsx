"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface AddItemI {
  placeholder?: string;
  field?: any;
  name: string;
}

const AddItem = ({ placeholder, field, name }: AddItemI) => {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    // setIsLoading(true);
    setItems((prevItems: any) => [...prevItems, inputValue]);
    setInputValue("");
    // setIsLoading(false);
  };

  const handleRemove = (name: string) => {
    const removeItem = items.filter((item: string) => item !== name);
    setItems(removeItem);
  };

  return (
    <div>
      <div className="capitalize text-[20px] mb-[20px] text-black dark:text-white">
        {name}
      </div>

      <ul className="flex flex-row flex-wrap gap-[10px]">
        {items.length
          ? items.map((item: string, key: any) => (
              <li className="flex flex-row gap-[5px]" key={key}>
                <span>{item}</span>
                <span
                  className="cursor-pointer"
                  onClick={() => handleRemove(item)}
                >
                  😥
                </span>
              </li>
            ))
          : null}
      </ul>

      <div className="flex flex-row gap-[20px]">
        <Input
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <Button onClick={handleClick} type="button">
          add to list
        </Button>
      </div>
    </div>
  );
};

export default AddItem;
