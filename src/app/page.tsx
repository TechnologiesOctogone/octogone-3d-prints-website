"use client";

import { HeroSection } from "@/components/modules/landing/hero-section";
import { ServicesSection } from "@/components/modules/landing/services-section";
import { StatsSection } from "@/components/modules/landing/stats-section";
import { PortfolioSection } from "@/components/modules/portfolio/portfolio-section";

const App = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
    </>
  );
};

export default App;
