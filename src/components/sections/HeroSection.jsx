//////////////////////////////////////////////////////////
// Importaciones
import Button from "../ui/button";

//////////////////////////////////////////////////////////
// Componente HeroSection
const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex w-full h-[1100px] text-center items-center justify-center py-4 [background:linear-gradient(0deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.7)_100%),url(public/background-hero.webp)_50%_50%_/_cover] ">

        <div className="flex flex-col w-full items-center gap-8">
          <div className="flex flex-col items-center gap-6 w-full max-w-3xl ">
            <h1 className="heading-h1 text-[32px] md:text-[56px] text-white text">
              Impulsamos tu transformación digital
            </h1>
            <p className=" text-regular-normal text-[#d1c7df] ">
              Innovación, precisión y tecnología a tu alcance.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Button className="px-6 py-2.5 bg-[#a33cfa] rounded-[100px]" href="#form-section">
              <span className=" text-regular-medium  text-white ">
                Contactanos
              </span>
            </Button>

            <Button
              variant="outline"
              className="px-6 py-2.5 bg-[#ffffff1a] rounded-[100px] border-transparent"
            >
              <span className=" text-regular-normal  text-white ">
                Leer más
              </span>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
