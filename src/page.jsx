//////////////////////////////////////////////////////////
// Importaciones
import HeroSection from "./components/sections/HeroSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import {ServicesSection} from "./components/sections/services/servicesSection";
import CTASection from "./components/sections/CTASection";
import TeamSection from "./components/sections/TeamSection";
import StatsSection from "./components/sections/StatsSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import BenefitsSection from "./components/sections/BenefitsSection";
import Proyectos from "./components/sections/Proyectos";

//////////////////////////////////////////////////////////
// Componente DesktopViewSection
export const Home = () => {
  return (
    <div className="flex flex-col items-start w-full">
      <HeroSection />
      <ExperienceSection />
      <Proyectos />
      <ServicesSection />
      <TestimonialSection />
      <BenefitsSection />
      <TeamSection />
      <StatsSection />
      <CTASection />
    </div>
  );
};
