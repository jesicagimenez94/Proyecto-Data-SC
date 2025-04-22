//////////////////////////////////////////////////////////
// Importaciones
import HeroSection from "../../components/sections/HeroSection";
import ExperienceSection from "../../components/sections/ExperienceSection";
import FeaturesSection from "../../components/sections/FeaturesSection";
//import CTASection from "../../components/sections/CTASection";
import TeamSection from "../../components/sections/TeamSection";
import StatsSection from "../../components/sections/StatsSection";
import TestimonialSection from "../../components/sections/TestimonialSection";
import BenefitsSection from "../../components/sections/BenefitsSection";
import FormularioSection from "../../components/sections/FormSection";

//////////////////////////////////////////////////////////
// Componente DesktopViewSection
export const DesktopViewSection = () => {
  return (
    <div className="flex flex-col items-start w-full">
      <HeroSection />
      <ExperienceSection />
      <FeaturesSection />
      <TestimonialSection />
      <BenefitsSection />
      <TeamSection />
      <StatsSection />
      {/*<CTASection />*/}
      <FormularioSection />
    </div>
  );
};
