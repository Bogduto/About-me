import React from "react";
// components
import WorkCart from "../WorkCart/index";
import CartSkeleton from "../CartSkeleton/index";
import Section from "../Section/index";
// services
import { getDocuments } from "@/services/document.firebase";

export const revalidate = 3600;

const WorkSection = async () => {
  const works = await getDocuments();

  return (
    <Section title={"works"} sectionId={"works"}>
      <div className="flex flex-row flex-wrap gap-[20px]">
        {works ? (
          works.map((work: any, key: any) => (
            <WorkCart
              key={key}
              website={work.data.name}
              image={work.data.homePageImage}
              title={work.data.name}
              desc={work.data.desc}
            />
          ))
        ) : (
          <CartSkeleton />
        )}
      </div>
    </Section>
  );
};

export default WorkSection;
