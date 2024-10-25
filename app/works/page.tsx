import React from "react";
// components
import WorkSection from "@/components/Works/index";
import { Button } from "@/components/Buttons/index";
import DefaultContainer from "@/components/Containers/DefaultContainer/index";
import { ButtonSort, FilterButton } from "./components/index";

// sort, search
const WorksPage = () => {
  return (
    <DefaultContainer>
      <div className="pt-[60px] flex flex-row gap-[15px] mb-[20px]">
        <ButtonSort />

        {/* <FilterButton /> */}
      </div>

      <WorkSection />

      <Button className={"mt-[40px] w-full py-[10px] mt-[10px]"}>
        <div className="text-white text-base font-bold">explore more</div>
      </Button>
    </DefaultContainer>
  );
};

export default WorksPage;
