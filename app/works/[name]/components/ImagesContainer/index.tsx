"use client";
import React from "react";
import Image from "@/node_modules/next/image";
// components
import DefaultContainer from "@/components/Containers/DefaultContainer/index";

const ImagesContainer = ({ images }: { images: string[] }) => {
  return (
    <DefaultContainer>
      <div className="pt-[60px] w-full min-h-auto flex flex-col justify-center items-center">
        <div className="w-full mb-[40px] flex flex-col gap-[20px]">
          {images.map((item: string, key: any) => (
            <div
              key={key}
              className="relative w-full mobile:min-h-[150px] mobileM:min-h-[200px] tablet:min-h-[270px] bg-[#CCCDC6]"
            >
              <Image src={item} fill alt="work image" />
            </div>
          ))}
        </div>
      </div>
    </DefaultContainer>
  );
};

export default ImagesContainer;
