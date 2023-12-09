import React, { Suspense } from "react";

import AboutSection from "@/components/About/index";
import HelpfulLinksSection from "@/components/Links/index";
import WorkSection from "@/components/Works/index";

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
