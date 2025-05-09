//////////////////////////////////////////////////////////
// Importaciones
import HeroSection from "./components/sections/HeroSection";
import ExperienceSection from "./components/sections/AboutUsSection";
import {ServicesSection} from "./components/sections/services/servicesSection";
import TeamSection from "./components/sections/TeamSection";
import StatsSection from "./components/sections/statsSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import BenefitsSection from "./components/sections/MissionSection";
import Projects from "./components/sections/projectsSections";
import FormularioSection from "./components/sections/FormSection";
//import CTASection from "./components/sections/CTASection";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";

//////////////////////////////////////////////////////////
// Componente Home (DesktopViewSection)
export const Home = () => {
  return (
    <div className="flex flex-col items-start w-full">
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <Projects />
      <BenefitsSection />
      <TestimonialSection />
      <TeamSection />
      {/*<StatsSection />*/}
      {/*<CTASection />*/}
      <FormularioSection />
      <ScrollToTopButton />
    </div>
  );
};