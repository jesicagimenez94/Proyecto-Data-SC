//////////////////////////////////////////////////////////
// Importaciones
import { Card, CardContent } from "../ui/Card";
import Button from "../ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useContent } from "../../context/ContentProvider";

//////////////////////////////////////////////////////////
// Componente FeaturesSection
const FeaturesSection = () => {
<<<<<<< HEAD:src/components/sections/FeaturesSection.jsx
  const { features = [] } = useContent() || {};

  return (
    <>
      {/* Features Section */}
      <section className="w-full items-center gap-10 px-4 py-16 sm:gap-16 sm:px-8 md:gap-1 md:px-16 lg:px-28 flex flex-col bg-[#141118]">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center tracking-[var(--heading-desktop-h3-letter-spacing)] leading-[var(--heading-desktop-h3-line-height)] font-heading-desktop-h3 text-[#E0CFF7]">
          Proyectos
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[var(--text-medium-normal-line-height)] text-center text-[#E0CFF7]">
          En EstelarCode la tecnología no es sólo nuestra herramienta, es nuestra pasión.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[var(--text-medium-normal-line-height)] text-center text-[#E0CFF7] mb-8">
          Conocé nuestros servicios y llevá tu negocio al próximo nivel.
        </p>
=======
  
  const {features = []} = useContent() || {};
  /* Esto sirve para obtener los datos del JSON que cargamos en el ContentProvider
     Se usa "|| {}" para asegurarnos de que, si useContent() devuelve null o undefined
    no intentemos hacer destructuring de un valor que no existe, evitando errores.
    Además, asignamos un array vacío como valor por defecto ([]) para que
    en caso de que estas propiedades no existan en el contexto, la aplicación
    no falle al intentar mapearlas o usarlas en la UI. */
    
  return (
    <>
      {/* Features Section */}
      <section className="w-full items-center gap-20 px-16 py-28 flex flex-col bg-white">
        <h3 className="w-[768px] text-[length:var(--heading-desktop-h3-font-size)] text-center tracking-[var(--heading-desktop-h3-letter-spacing)] leading-[var(--heading-desktop-h3-line-height)] font-heading-desktop-h3 text-[#08030d] [font-style:var(--heading-desktop-h3-font-style)]">
          Lo que ofrecemos
        </h3>
        <h4 className="w-[768px] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] font-text-medium-normal text-[#08030d] [font-style:var(--text-medium-normal-font-style)]">
        En Estelar Code, nuestra tecnología no es sólo nuestra herramienta, es nuestra pasión. Conocé nuestros servicios y llegá tu negocio al próximo nivel.
        </h4>
>>>>>>> origin/main:src/components/sections/ServicesSection.jsx

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

<<<<<<< HEAD:src/components/sections/FeaturesSection.jsx
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
=======
                  <div className="flex flex-col items-center gap-2 self-stretch w-full">
                    <Button
                      variant="link"
                      className="rounded-[100px] overflow-hidden p-0 bg-[#f2f2f2]"
                    >
                      <span className="font-text-regular-medium text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                        Ver más
                      </span>
                      <ChevronRightIcon className="w-6 h-6" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
>>>>>>> origin/main:src/components/sections/ServicesSection.jsx
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
