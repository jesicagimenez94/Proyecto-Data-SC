//////////////////////////////////////////////////////////
// Importaciones
import HeroSection from "./components/sections/HeroSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import {ServicesSection} from "./components/sections/services/servicesSection";
import TeamSection from "./components/sections/TeamSection";
import StatsSection from "./components/sections/StatsSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import BenefitsSection from "./components/sections/BenefitsSection";
import Proyectos from "./components/sections/Proyectos";
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
      <Proyectos />
      <BenefitsSection />
      <TestimonialSection />
      <TeamSection />
      <StatsSection />
      {/*<CTASection />*/}
      <FormularioSection />
      <ScrollToTopButton />
    </div>
  );
};