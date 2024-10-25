import React from "react";
import Link from "@/node_modules/next/link";
// components
import { Skeleton } from "@/components/ui/skeleton";
import DefaultContainer from "@/components/Containers/DefaultContainer/index";
import WorkDetails from "@/app/works/[name]/components/WorkDetails/index";
import { ImagesContainer, NavigationContainer } from "./components/index";
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
            <NavigationContainer workName={workName} />
          </div>
          <div className="w-full text-normal text-[15px] leading-[25px]">
            {work.desc}
          </div>
          <div className="w-full">
            <WorkDetails work={work} />
          </div>
        </div>
      </DefaultContainer>

      <ImagesContainer images={work.images} />
    </div>
  );
};

export default WorkDetailPage;
