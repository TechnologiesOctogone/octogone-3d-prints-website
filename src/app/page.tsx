"use client";

import { HeroSection } from "@/components/modules/hero";
import { ProjectsSection } from "@/components/modules/projects";
import { ServicesSection } from "@/components/modules/services";
import { StatsSection } from "@/components/modules/stats";

const App = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
    </>
  );
};

export default App;
