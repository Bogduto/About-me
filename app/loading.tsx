import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import DefaultContainer from "@/components/Containers/DefaultContainer/index";

const Loading = () => {
  return (
    <div className="w-full h-full">
      <DefaultContainer>
        <div className="w-full min-h-[240px] flex flex-col justify-center items-center">
          <div className="w-full pt-[60px] mb-[35px]">
            <Skeleton className="w-[120px] h-[25px] bg-black-skeleton dark:bg-white-skeleton" />
          </div>

          <div className="w-full flex flex-col gap-[5px]">
            <Skeleton className="w-[75%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
            <Skeleton className="w-[70%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
            <Skeleton className="w-[40%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
            <Skeleton className="w-[55%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
            <Skeleton className="w-[70%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
          </div>
        </div>

        <div className="w-full min-h-[240px] flex flex-col justify-center items-center">
          <div className="w-full pt-[60px] mb-[35px]">
            <Skeleton className="w-[120px] h-[25px] bg-black-skeleton dark:bg-white-skeleton" />
          </div>

          <div className="w-full flex flex-col gap-[20px]">
            <div className="w-full flex flex-row flex-wrap gap-[10px]">
              <div className="w-full min-h-[270px]">
                <Skeleton className="w-full h-full bg-black-skeleton dark:bg-white-skeleton" />
              </div>

              <Skeleton className="mb-[10px] w-[40%] h-[20px] bg-black-skeleton dark:bg-white-skeleton" />

              <div className="w-full flex flex-col gap-[5px]">
                <Skeleton className="w-[60%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
                <Skeleton className="w-[45%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
              </div>
            </div>
            <div className="w-full flex flex-row flex-wrap gap-[10px]">
              <div className="w-full min-h-[270px]">
                <Skeleton className="w-full h-full bg-black-skeleton dark:bg-white-skeleton" />
              </div>

              <Skeleton className="mb-[10px] w-[40%] h-[20px] bg-black-skeleton dark:bg-white-skeleton" />

              <div className="w-full flex flex-col gap-[5px]">
                <Skeleton className="w-[60%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
                <Skeleton className="w-[45%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full min-h-[240px] flex flex-col justify-center items-center">
          <div className="w-full pt-[60px] mb-[35px]">
            <Skeleton className="w-[120px] h-[25px] bg-black-skeleton dark:bg-white-skeleton" />
          </div>

          <div className="w-full flex flex-col gap-[20px] ">
            <Skeleton className="w-[50%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
            <Skeleton className="w-[50%] h-[15px] bg-black-skeleton dark:bg-white-skeleton" />
          </div>
        </div>
      </DefaultContainer>
    </div>
  );
};

export default Loading;
