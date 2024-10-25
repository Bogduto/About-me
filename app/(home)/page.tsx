import React, { Suspense } from "react";
// components
import WorkSection from "@/components/Works/index";
import { About, ContactLinks } from "./components/index";
import { Skeleton } from "@/components/ui/skeleton";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  return (
    <div>
      <About />

      <WorkSection />

      <ContactLinks />
    </div>
  );
};

export default HomePage;
