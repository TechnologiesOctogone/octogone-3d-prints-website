"use client";

import { HeroSection } from "@/components/modules/hero-section";
import { ProjectsSection } from "@/components/modules/projects";
import { ServicesSection } from "@/components/modules/services-section";
import { StatsSection } from "@/components/modules/stats-section";

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
