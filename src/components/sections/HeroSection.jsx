//////////////////////////////////////////////////////////
// Importaciones
import Button from "../ui/button";

//////////////////////////////////////////////////////////
// Componente HeroSection
const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex w-full h-[900px] items-center px-16 py-0 [background:linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url(../public/header---5---1.png)_50%_50%_/_cover]">
        <div className="flex flex-col w-[560px] items-start gap-8">
          <div className="flex flex-col items-start gap-6 self-stretch w-full">
            <h1 className="self-stretch font-heading-desktop-h1 text-white text-[length:var(--heading-desktop-h1-font-size)] tracking-[var(--heading-desktop-h1-letter-spacing)] leading-[var(--heading-desktop-h1-line-height)] [font-style:var(--heading-desktop-h1-font-style)]">
              Transformamos datos en decisiones
            </h1>

            <p className="text-white text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] self-stretch font-text-medium-normal tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
              LincePulce is a leading consultancy firm specializing in data-driven
              solutions. We provide services in data analytics, business
              intelligence, and strategy development to help organizations make
              informed decisions. Our team of experts works closely with clients
              to unlock the potential of their data, driving growth and
              innovation.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Button className="px-6 py-2.5 bg-white rounded-[100px]">
              <span className="font-text-regular-medium text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Conocenos
              </span>
            </Button>

            <Button
              variant="outline"
              className="px-6 py-2.5 bg-[#ffffff1a] rounded-[100px] border-transparent"
            >
              <span className="font-text-regular-medium text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Button
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
