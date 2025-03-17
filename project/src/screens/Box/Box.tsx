import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { MainLayoutSection } from "./sections/MainLayoutSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { PageLayoutSection } from "./sections/PageLayoutSection/PageLayoutSection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Box = (): JSX.Element => {
  return (
    <main className="w-full flex flex-col">
      <NavigationBarSection />
      <HeaderSection />
      <MainLayoutSection />
      <PageLayoutSection />
      <TestimonialsSection />
      <MainContentSection />
      <CallToActionSection />
      <TeamSection />
      <FeaturesSection />
      <FooterSection />
    </main>
  );
};
