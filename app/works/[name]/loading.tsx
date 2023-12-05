import React from "react";
import DefaultContainer from "@/components/containers/DefaultContainer/index";
import { Skeleton } from "@/components/ui/skeleton";
const Loading = () => {
  return (
    <div className="w-full h-full">
      <DefaultContainer>
        <div className="pt-[60px] w-full min-h-[240px] flex flex-col justify-center items-center">
          {/* Skeleton for links */}
          <div className="w-full items-start mb-[35px]">
            <Skeleton className="w-[215px] h-[20px] bg-black dark:bg-white" />
          </div>

          {/* Skeleton for description */}
          <div className="w-full flex flex-col gap-[5px]">
            <Skeleton className="w-[75%] h-[15px] bg-black dark:bg-white" />
            <Skeleton className="w-[70%] h-[15px] bg-black dark:bg-white" />
            <Skeleton className="w-[40%] h-[15px] bg-black dark:bg-white" />
            <Skeleton className="w-[55%] h-[15px] bg-black dark:bg-white" />
          </div>

          {/* Skeleton for links, stack, platforms */}
          <div className="w-full items-start">
            <div className="flex flex-col gap-[20px] my-[40px]">
              <div className="flex flex-row gap-[10px]">
                <Skeleton className="w-[100px] h-[25px] bg-black dark:bg-white" />
                <Skeleton className="w-full h-[25px] bg-black dark:bg-white" />
              </div>

              <div className="flex flex-row gap-[10px]">
                <Skeleton className="w-[100px] h-[25px] bg-black dark:bg-white" />
                <Skeleton className="w-full h-[25px] bg-black dark:bg-white" />
              </div>

              <div className="flex flex-row gap-[10px]">
                <Skeleton className="w-[100px] h-[25px] bg-black dark:bg-white" />
                <Skeleton className="w-full h-[25px] bg-black dark:bg-white" />
              </div>
            </div>
          </div>

          {/* Skeleton for images */}
          <div className="w-full mb-[40px] flex flex-col gap-[20px]">
            <Skeleton className="w-full min-h-[270px] bg-black dark:bg-white" />
            <Skeleton className="w-full min-h-[270px] bg-black dark:bg-white" />
            <Skeleton className="w-full min-h-[270px] bg-black dark:bg-white" />
          </div>
        </div>
      </DefaultContainer>
    </div>
  );
};

export default Loading;
