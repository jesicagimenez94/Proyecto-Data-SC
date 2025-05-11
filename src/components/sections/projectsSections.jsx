//////////////////////////////////////////////////////////
// Importaciones
import { Card, CardContent } from "../ui/Card";
import Button from "../ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useContent } from "../../context/ContentProvider";

//////////////////////////////////////////////////////////
// Componente FeaturesSection
const Proyectos = () => {
  const { features = [] } = useContent() || {};

  return (
    <>
      {/* Features Section */}
      <section className="w-full items-center gap-10 px-4 py-16 sm:gap-16 sm:px-8 md:gap-1 md:px-16 lg:px-28 flex flex-col bg-[#08030d]" id="proyectos">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center tracking-[var(--heading-desktop-h3-letter-spacing)] leading-[var(--heading-desktop-h3-line-height)] font-heading-desktop-h3 text-[#E0CFF7]">
          Proyectos
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[var(--text-medium-normal-line-height)] text-center text-[#E0CFF7]">
          En EstelarCode la tecnología no es sólo nuestra herramienta, es nuestra pasión.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[var(--text-medium-normal-line-height)] text-center text-[#E0CFF7] mb-8">
          Conocé nuestros servicios y llevá tu negocio al próximo nivel.
        </p>

        {/* Grid responsivo para las tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[100px] w-full auto-rows-fr max-w-[80%] mx-auto ">
          {features?.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col w-full bg-cover bg-center bg-no-repeat border-none shadow-none min-w-[30px]"
              style={{
                backgroundImage: `url(${feature.backgroundImage})`,
                backgroundSize: "cover",
              }}
            >
              <CardContent className="flex flex-col justify-between flex-grow p-4 sm:p-8 bg-black/50 rounded-xl min-h-[20rem] sm:min-h-[20rem] lg:min-h-[25rem]">
                {/* Contenido superior */}
                <div className="flex flex-col items-center gap-4 flex-grow">
                  <h5 className="text-base sm:text-lg md:text-xl text-center text-white">
                    {feature.title}
                  </h5>
                  <div className="flex items-center justify-center flex-grow">
                    <p className="text-sm sm:text-base md:text-lg text-center text-white">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Botón */}
                <div className="flex items-end justify-center mt-auto">
                  <Button
                    variant="link"
                    className="rounded-[100px] overflow-hidden p-0 bg-[#f2f2f2]"
                  >
                    <span className="text-sm sm:text-base md:text-lg text-[#08030d]">
                      Button
                    </span>
                    <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#08030d]" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Proyectos;