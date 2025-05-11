//////////////////////////////////////////////////////////
// Importaciones
import HeroSection from "./components/sections/HeroSection";
import ExperienceSection from "./components/sections/AboutUsSection";
import {ServicesSection} from "./components/sections/services/servicesSection";
import TeamSection from "./components/sections/TeamSection";
import StatsSection from "./components/sections/statsSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import MissionSection from "./components/sections/MissionSection";
import Projects from "./components/sections/projectsSections";
import FormularioSection from "./components/sections/FormSection";
//import CTASection from "./components/sections/CTASection";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";

//////////////////////////////////////////////////////////
// Componente Home (DesktopViewSection)
export const Home = () => {
  
  return (
    <>
    <HeroSection />
    <div className="layout flex flex-col items-start w-full">
      <ServicesSection />
      <ExperienceSection />
      <Projects />
      <MissionSection />
      <TestimonialSection />
      <TeamSection />
      {/*<StatsSection />*/}
      {/*<CTASection />*/}
      <FormularioSection />
      <ScrollToTopButton />
    </div>
    </>
  );
};