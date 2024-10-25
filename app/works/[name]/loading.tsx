import React from "react";
import DefaultContainer from "@/components/Containers/DefaultContainer/index";
import { Skeleton } from "@/components/ui/skeleton";
const Loading = () => {
  return (
    <div className="w-full h-full">
      <DefaultContainer>
        <div className="pt-[60px] w-full min-h-[240px] flex flex-col justify-center items-center">
          {/* Skeleton for links */}
          <div className="w-full items-start mb-[35px]">
            <Skeleton className="w-[215px] h-[20px] bg-black-skeleton dark:bg-white-skeleton" />
          </div>

          {/* Skeleton for description */}
          <div className="w-full flex flex-col gap-[5px]">
            <Skeleton className="w-[75%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
            <Skeleton className="w-[70%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
            <Skeleton className="w-[40%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
            <Skeleton className="w-[55%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
          </div>

          {/* Skeleton for links, stack, platforms */}
          <div className="w-full items-start">
            <div className="flex flex-col gap-[20px] my-[40px]">
              <div className="flex flex-row gap-[10px]">
                <Skeleton className="w-[100px] h-[25px] bg-black-skeleton dark:bg-white-skeleton" />
                <Skeleton className="w-full h-[25px] bg-black-skeleton dark:bg-white-skeleton" />
              </div>

              <div className="flex flex-row gap-[10px]">
                <Skeleton className="w-[100px] h-[25px] bg-black-skeleton dark:bg-white-skeleton" />
                <Skeleton className="w-full h-[25px] bg-black-skeleton dark:bg-white-skeleton" />
              </div>

              <div className="flex flex-row gap-[10px]">
                <Skeleton className="w-[100px] h-[25px] bg-black-skeleton dark:bg-white-skeleton" />
                <Skeleton className="w-full h-[25px] bg-black-skeleton dark:bg-white-skeleton" />
              </div>
            </div>
          </div>

          {/* Skeleton for images */}
          <div className="w-full mb-[40px] flex flex-col gap-[20px]">
            <Skeleton className="w-full min-h-[270px] bg-black-skeleton dark:bg-white-skeleton" />
            <Skeleton className="w-full min-h-[270px] bg-black-skeleton dark:bg-white-skeleton" />
            <Skeleton className="w-full min-h-[270px] bg-black-skeleton dark:bg-white-skeleton" />
          </div>
        </div>
      </DefaultContainer>
    </div>
  );
};

export default Loading;
