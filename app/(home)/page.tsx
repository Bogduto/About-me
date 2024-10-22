import React, { Suspense } from "react";
// components
import AboutSection from "@/components/About/index";
import HelpfulLinksSection from "@/components/Links/index";
import WorkSection from "@/components/Works/index";
import { Skeleton } from "@/components/ui/skeleton";

export const dynamic = 'force-dynamic';

const HomePage = async () => {
  
  return (
    <div>
      <AboutSection />

      <WorkSection />

      <HelpfulLinksSection />
    </div>
  );
};

export default HomePage;
