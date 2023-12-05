import React from "react";
import DefaultContainer from "@/components/containers/DefaultContainer/index";
import { ArrowRight } from "lucide-react";
import Link from "@/node_modules/next/link";

import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "@/configs/firebase.config";
import { notFound } from "@/node_modules/next/navigation";

import Image from "@/node_modules/next/image";

const getDocumentByName = async (documentName: string) => {
  const q = query(collection(db, "works"), where("name", "==", documentName));

  try {
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docData = querySnapshot.docs[0].data();
      const docId = querySnapshot.docs[0].id;

      return {
        id: docId,
        data: docData,
      };
    } else {
      console.log("No documents found with the specified field value.", documentName);
      notFound();
    }
  } catch (error) {
    console.error("Error getting documents:", error);
    throw error;
  }
};

const WorkDetailPage = async ({ params }: { params: { name: string } }) => {
  const workName = params.name.replaceAll("%20", " ")
  const workDoc = await getDocumentByName(workName);
  const work = workDoc?.data;
  return (
    <div className="w-full h-full">
      <DefaultContainer>
        <div className="pt-[60px] w-full min-h-[240px] flex flex-col justify-center items-center">
          <div className="w-full items-start">
            <ul className="flex flex-row items-center mb-[35px] gap-[8px]">
              <Link
                className="text-black hover:text-black-hover active:text-black-active dark:text-white dark:hover:text-white-hover dark:active:text-white-active duration-200 capitalize font-medium text-[14px]"
                href={"/"}
              >
                home page
              </Link>
              <div className="relative flex flex-row items-center justify-center w-[14px] h-[14px]">
                <ArrowRight />
              </div>
              {/* work name */}
              <li className="capitalize font-medium text-[14px]">{workName}</li>
            </ul>
          </div>

          {/* description */}
          <div className="w-full items-start text-normal text-[15px] leading-[25px]">
            {work.desc}
          </div>

          {/* links, stack, platforms */}
          <div className="w-full items-start">
            <ul className="flex flex-col gap-[20px] my-[40px]">
              <li className="flex flex-row items-center gap-[10px]">
                <span className="text-white rounded-[2px] uppercase bg-pink px-[12px] py-[5px] font-bold text-[13px]">
                  website
                </span>
                <Link href={work.website} target="_blank" className="font-bold text-[14px] text-black hover:text-black-hover active:text-black-active dark:text-white dark:hover:text-white-hover dark:active:text-white-active cursor-pointer">
                  {work.website}
                </Link>
              </li>

              <li className="flex flex-row items-center gap-[10px]">
                <span className="text-white rounded-[2px] uppercase bg-pink px-[12px] py-[5px] font-bold text-[13px]">
                  platforms
                </span>
                <span className="font-bold text-[14px] text-black dark:text-white">
                  {work.platforms.map((item: string) => `${item}/`)}
                </span>
              </li>

              <li className="flex flex-row items-center gap-[10px]">
                <span className="text-white rounded-[2px] uppercase bg-pink px-[12px] py-[5px] font-bold text-[13px]">
                  stack
                </span>
                <span className="font-bold text-[14px] text-black dark:text-white">
                  {work.stack.map((item: string) => `${item},`)}
                </span>
              </li>
            </ul>
          </div>

          <div className="w-full mb-[40px] flex flex-col gap-[20px]">
            {work.images.map((item: string, key: any) => (
              <div key={key} className="relative w-full min-h-[270px] bg-[#CCCDC6]">
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
