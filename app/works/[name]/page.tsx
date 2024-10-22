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
import WorkDetails from "@/components/WorkDetails/index";

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
            <ul className="pb-[5px] flex flex-row items-center mb-[35px] gap-[8px]">
              <Link
                className="border-b-[2px] border-b-ichigo text-black hover:text-black-hover active:text-black-active dark:text-white dark:hover:text-white-hover dark:active:text-white-active duration-200 capitalize font-medium text-[14px]"
                href="/"
              >
                Home
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
            <WorkDetails work={work} />
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
