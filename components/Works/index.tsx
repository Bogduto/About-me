import React from "react";
// components
import { WorkCart } from "./components/index";
import CartSkeleton from "../CartSkeleton/index";
import Section from "../Section/index";
// services
import { getProjects } from "@/utils/requests";
// supabase
export const revalidate = 3600;

const WorkSection = async () => {

  const projects = await getProjects();
  
  
  if (!projects) {
    return <p>No posts found.</p>
  }

  return (
    <Section title={"works"} sectionId={"works"}>
      <div className="flex flex-row flex-wrap gap-[20px]">
        {projects ? (
          projects.map((work: any, key: any) => (
            <WorkCart
              key={key}
              website={work.name}
              image={work.images[0]}
              title={work.name}
              desc={work.desc}
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
