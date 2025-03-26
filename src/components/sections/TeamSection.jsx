//////////////////////////////////////////////////////////
// Importaciones
import Button from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/Card";
import { useContent } from "../../context/ContentProvider";

//////////////////////////////////////////////////////////
// Componente TeamSection
const TeamSection = () => {
  // Esto sirve para obtener los datos del JSON que cargamos en el ContentProvider
  // Se usa "|| {}" para asegurarnos de que, si useContent() devuelve null o undefined
  // no intentemos hacer destructuring de un valor que no existe, evitando errores.
  // Además, asignamos un array vacío como valor por defecto ([]) para que
  // en caso de que estas propiedades no existan en el contexto, la aplicación
  // no falle al intentar mapearlas o usarlas en la UI.
  const {teamMembers=[]} = useContent() || {};

  return (
    <>
      <section className="flex flex-col w-full items-center gap-20 px-16 py-28 bg-[#f2f2f2]">
        <div className="w-[768px] flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-6 self-stretch w-full">
            <h2 className="self-stretch text-[length:var(--heading-desktop-h2-font-size)] text-center tracking-[var(--heading-desktop-h2-letter-spacing)] leading-[var(--heading-desktop-h2-line-height)] font-heading-desktop-h2 text-[#08030d] [font-style:var(--heading-desktop-h2-font-style)]">
              Our team
            </h2>

            <p className="text-[#08030d] text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] self-stretch font-text-medium-normal tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
              We are excited to introduce our key team members, each bringing
              unique expertise to our project.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-16 self-stretch w-full">
          {/* Primer fila del equipo */}
          <div className="flex items-start gap-12 self-stretch w-full">
            {teamMembers?.slice(0, 3).map((member, index) => (
              <Card
                key={index}
                className="flex-1 bg-transparent border-none shadow-none"
              >
                <CardContent className="flex flex-col items-center gap-6 p-0">
                  <img
                    className="w-20 h-20 object-cover rounded-[20px] shadow-2xl"
                    alt="Placeholder image"
                    src={member.image}
                  />

                  <div className="flex flex-col items-center gap-4 self-stretch w-full">
                    <div className="flex flex-col items-center self-stretch w-full">
                      <h4 className="self-stretch font-text-large-semi-bold text-[#08030d] text-[length:var(--text-large-semi-bold-font-size)] text-center tracking-[var(--text-large-semi-bold-letter-spacing)] leading-[var(--text-large-semi-bold-line-height)] [font-style:var(--text-large-semi-bold-font-style)]">
                        Full name
                      </h4>

                      <p className="self-stretch font-text-medium-normal text-[#08030d] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                        Job title
                      </p>
                    </div>

                    <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <img
                      className="w-6 h-6"
                      alt="Icon linkedin"
                      src="public/icon---linkedin.svg"
                    />
                    <img
                      className="w-6 h-6"
                      alt="Icon x"
                      src="public/icon---x.svg"
                    />
                    <img
                      className="w-6 h-6"
                      alt="Icon dribble"
                      src="public/icon---dribble.svg"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Segunda fila del equipo */}
          <div className="flex items-start gap-12 self-stretch w-full">
            {teamMembers.slice(3, 6).map((member, index) => (
              <Card
                key={index}
                className="flex-1 bg-transparent border-none shadow-none"
              >
                <CardContent className="flex flex-col items-center gap-6 p-0">
                  <img
                    className="w-20 h-20 object-cover rounded-[20px] shadow-2xl"
                    alt="Placeholder image"
                    src={member.image}
                  />

                  <div className="flex flex-col items-center gap-4 self-stretch w-full">
                    <div className="flex flex-col items-center self-stretch w-full">
                      <h4 className="self-stretch font-text-large-semi-bold text-[#08030d] text-[length:var(--text-large-semi-bold-font-size)] text-center tracking-[var(--text-large-semi-bold-letter-spacing)] leading-[var(--text-large-semi-bold-line-height)] [font-style:var(--text-large-semi-bold-font-style)]">
                        Full name
                      </h4>

                      <p className="self-stretch font-text-medium-normal text-[#08030d] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                        Job title
                      </p>
                    </div>

                    <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <img
                      className="w-6 h-6"
                      alt="Icon linkedin"
                      src="public/icon---linkedin.svg"
                    />
                    <img
                      className="w-6 h-6"
                      alt="Icon x"
                      src="public/icon---x.svg"
                    />
                    <img
                      className="w-6 h-6"
                      alt="Icon dribble"
                      src="public/icon---dribble.svg"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col w-[768px] items-center gap-4">
            <h4 className="self-stretch text-[length:var(--heading-desktop-h4-font-size)] text-center tracking-[var(--heading-desktop-h4-letter-spacing)] leading-[var(--heading-desktop-h4-line-height)] font-heading-desktop-h4 text-[#08030d] [font-style:var(--heading-desktop-h4-font-style)]">
              We&apos;re hiring!
            </h4>

            <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col w-[155px] items-start gap-4">
            <Button
              variant="outline"
              className="py-4 bg-zinc-900 rounded-[100px] border-transparent  shadow-2xl"
            >
              <span className="font-text-regular-medium text-[#f2f2f2] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Open positions
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamSection
