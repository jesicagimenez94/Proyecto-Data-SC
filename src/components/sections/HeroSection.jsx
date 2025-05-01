//////////////////////////////////////////////////////////
// Importaciones
import Button from "../ui/button";

//////////////////////////////////////////////////////////
// Componente HeroSection
const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex w-full h-[900px] text-center items-center justify-center [background:linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.7)_100%),url(public/background-hero.webp)_50%_50%_/_cover]">
        <div className="flex flex-col w-[95%] items-center gap-8">
          <div className="flex flex-col items-center gap-6 self-stretch w-full">
            <h1 className="self-stretch font-heading-desktop-h1 text-white tracking-[var(--heading-desktop-h1-letter-spacing)] leading-[var(--heading-desktop-h1-line-height)] [font-style:var(--heading-desktop-h1-font-style)] text-[40px] md:text-[80px]">
              Impulsamos tu transformación digital
            </h1>

            <p className="text-white text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] self-stretch font-text-medium-normal tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
              Innovación, precisión y tecnología a tu alcance.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Button className="px-6 py-2.5 bg-[#a33cfa] rounded-[100px]" href="#form-section">
              <span className="font-text-regular-medium text-[#fff] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Contactanos
              </span>
            </Button>

            <Button
              variant="outline"
              className="px-6 py-2.5 bg-[#ffffff1a] rounded-[100px] border-transparent"
            >
              <span className="font-text-regular-medium text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Leer más
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
