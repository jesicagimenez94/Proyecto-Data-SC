//////////////////////////////////////////////////////////
// Importaciones
import { Card, CardContent } from "../../components/ui/Card";
import Button from "../../components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useContent } from "../../context/ContentProvider";

//////////////////////////////////////////////////////////
// Componente FeaturesSection
const FeaturesSection = () => {
  // Esto sirve para obtener los datos del JSON que cargamos en el ContentProvider
  // Se usa "|| {}" para asegurarnos de que, si useContent() devuelve null o undefined
  // no intentemos hacer destructuring de un valor que no existe, evitando errores.
  // Además, asignamos un array vacío como valor por defecto ([]) para que
  // en caso de que estas propiedades no existan en el contexto, la aplicación
  // no falle al intentar mapearlas o usarlas en la UI.
  const {features = []} = useContent() || {};

  return (
    <>
      {/* Features Section */}
      <section className="w-full items-center gap-20 px-16 py-28 flex flex-col bg-white">
        <h3 className="w-[768px] text-[length:var(--heading-desktop-h3-font-size)] text-center tracking-[var(--heading-desktop-h3-letter-spacing)] leading-[var(--heading-desktop-h3-line-height)] font-heading-desktop-h3 text-[#08030d] [font-style:var(--heading-desktop-h3-font-style)]">
          Key Features
        </h3>

        <div className="flex flex-col items-start gap-16 self-stretch w-full">
          <div className="flex items-start justify-center gap-12 self-stretch w-full">
            {features?.map((feature, index) => (
              <Card
                key={index}
                className="flex-1 bg-transparent border-none shadow-none"
              >
                <CardContent className="flex flex-col items-center gap-8 p-0">
                  <div className="flex flex-col items-center gap-6 self-stretch w-full">
                    <img
                      className="w-12 h-12"
                      alt="Icon relume"
                      src="public/icon---relume.svg"
                    />

                    <div className="flex flex-col items-start gap-6 self-stretch w-full">
                      <h5 className="self-stretch text-[length:var(--heading-desktop-h5-font-size)] text-center tracking-[var(--heading-desktop-h5-letter-spacing)] leading-[var(--heading-desktop-h5-line-height)] font-heading-desktop-h5 text-[#08030d] [font-style:var(--heading-desktop-h5-font-style)]">
                        {feature.title}
                      </h5>

                      <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-2 self-stretch w-full">
                    <Button
                      variant="link"
                      className="rounded-[100px] overflow-hidden p-0 bg-[#f2f2f2]"
                    >
                      <span className="font-text-regular-medium text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                        Button
                      </span>
                      <ChevronRightIcon className="w-6 h-6" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturesSection
