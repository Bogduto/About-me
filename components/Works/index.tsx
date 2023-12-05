import React from "react";
import CartSkeleton from "../CartSkeleton/index";
import WorkCart from "../WorkCart/index";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/configs/firebase.config";
import Section from "../Section/index";

export const revalidate = 3600;

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "works"));

  const docRes = await querySnapshot.docs.map((doc: any) => ({
    id: doc.id,
    data: doc.data(),
  }));

  return docRes;
};

const WorkSection = async () => {
  const works = await getData();

  return (
    <Section title={"Works"} sectionId={"works"}>
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
