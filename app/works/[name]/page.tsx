import React from "react";
// components
import DefaultContainer from "@/components/Containers/DefaultContainer/index";
import WorkDetails from "@/app/works/[name]/components/WorkDetails/index";
import { ImagesContainer, NavigationContainer } from "./components/index";
// services
import { getProject } from "@/utils/requests";

const WorkDetailPage = async ({ params }: { params: { name: string } }) => {
  const workName = params.name.replaceAll("%20", " ");

  const project = await getProject(workName);
  
  if (!project) {
    return <div>not found</div>;
  }

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
          <p className="w-full text-normal text-[15px] leading-[25px]">
            {project.desc}
          </p>
          <div className="w-full">
            <WorkDetails work={project} />
          </div>
        </div>
      </DefaultContainer>

      <ImagesContainer images={project.images} />
    </div>
  );
};

export default WorkDetailPage;
