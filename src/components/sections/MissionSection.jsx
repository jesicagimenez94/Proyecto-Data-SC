//////////////////////////////////////////////////////////
// Importaciones
import { ChevronRightIcon } from "lucide-react";
import Button from "../ui/button";

//////////////////////////////////////////////////////////
// Componente BenefitsSection
const BenefitsSection = () => {
  return (
    <>
      <section className="w-full items-start gap-10 px-4 py-16 sm:gap-16 sm:px-8 md:gap-20 md:px-16 lg:px-28 flex flex-col bg-[#08030d]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full">
          {/* Contenido de texto */}
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6 w-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[var(--heading-desktop-h2-letter-spacing)] leading-[var(--heading-desktop-h2-line-height)] font-heading-desktop-h2 text-[#E0CFF7]">
                Nuestra misión
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-[var(--text-medium-normal-line-height)] text-[#E0CFF7]">
                En EstelarCode creemos que la tecnología no solo debe resolver problemas, sino también potenciar oportunidades. Nuestra misión es brindar soluciones digitales innovadoras, eficientes a medida que ayuden a empresas y personas a crecer, optimizar sus procesos y adaptarse al mundo digital de forma simple y efectiva. Trabajamos con pasión, transparencia y compromiso, buscando siempre superar las expectativas de nuestros clientes y acompañarlos en cada paso de su evolución tecnológica.
              </p>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="outline"
                className="px-6 py-2.5 bg-[#a03df4] rounded-[100px] border-transparent"
                href="#form-section"
              >
                <span className="text-sm sm:text-base md:text-lg text-[#E0CFF7] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)]">
                  Contactanos
                </span>
              </Button>

              <Button
                variant="link"
                className="rounded-[100px] overflow-hidden p-0"
              >
                <span className="text-sm sm:text-base md:text-lg text-[#E0CFF7] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)]">
                  Conoce más
                </span>
                <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#a259ff]" />
              </Button>
            </div>
          </div>

          {/* Imagen */}
          <img
            className="flex-1 w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[540px] object-cover rounded-[20px] lg:rounded-[40px]"
            alt="Nuestra misión"
            src="public/nuestra-mision.png"
          />
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;
