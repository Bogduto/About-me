import React from "react";
import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";
// icons
import { ArrowRight } from "lucide-react";
// components
import { Skeleton } from "@/components/ui/skeleton";
import DefaultContainer from "@/components/containers/DefaultContainer/index";
// services
import { getDocumentByName } from "@/services/document.firebase";

const WorkDetailPage = async ({ params }: { params: { name: string } }) => {
  const workName = params.name.replaceAll("%20", " ");
  const workDoc = await getDocumentByName(workName);
  const work = workDoc?.data;
  return (
    <div className="relative w-full h-full flex flex-row flex-wrap items-start">
      <DefaultContainer
        customStyles={
          "mt-[60px] min-h-auto desktop:sticky desktop:top-[60px] desktop:z-10"
        }
      >
        <div className="w-full flex flex-col justify-start items-center">
          <div className="w-full">
            <ul className="flex flex-row items-center mb-[35px] gap-[8px]">
              <Link
                className="text-black hover:text-black-hover active:text-black-active dark:text-white dark:hover:text-white-hover dark:active:text-white-active duration-200 capitalize font-medium text-[14px]"
                href="/"
              >
                Home Page
              </Link>
              <div className="relative flex flex-row items-center justify-center w-[14px] h-[14px]">
                <ArrowRight />
              </div>
              <li className="capitalize font-medium text-[14px]">{workName}</li>
            </ul>
          </div>
          <div className="w-full text-normal text-[15px] leading-[25px]">
            {work.desc}
          </div>
          <div className="w-full">
            <ul className="flex flex-col gap-[20px] my-[40px]">
              {work.website && (
                <li className="flex flex-row items-center gap-[10px]">
                  <span className="text-white rounded-[2px] uppercase bg-ichigo px-[12px] font-bold text-[13px]">
                    Website
                  </span>
                  <Link
                    href={work.website}
                    target="_blank"
                    className="font-bold text-[14px] text-black hover:text-black-hover active:text-black-active dark:text-white dark:hover:text-white-hover dark:active:text-white-active cursor-pointer"
                  >
                    {work.website}
                  </Link>
                </li>
              )}

              <li className="flex flex-row items-center gap-[10px]">
                <span className="text-white rounded-[2px] uppercase bg-ichigo px-[12px]  font-bold text-[13px]">
                  Platforms
                </span>
                <span className="font-bold text-[14px] text-black dark:text-white">
                  {work.platforms.join("/")}
                </span>
              </li>

              <li className="flex flex-row items-center gap-[10px]">
                <span className="text-white rounded-[2px] uppercase bg-ichigo px-[12px] font-bold text-[13px]">
                  Stack
                </span>
                <span className="font-bold capitalize text-[14px] text-black dark:text-white">
                  {work.stack.join(", ")}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </DefaultContainer>

      <DefaultContainer>
        <div className="pt-[60px] w-full min-h-auto flex flex-col justify-center items-center">
          <div className="w-full mb-[40px] flex flex-col gap-[20px]">
            {work.images.map((item: string, key: any) => (
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
    </div>
  );
};

export default WorkDetailPage;
