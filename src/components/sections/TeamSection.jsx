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
      <section className="flex flex-col w-full items-center gap-10 px-12 py-12 bg-[#08030d]" id="team-members">
        <div className="w-[768px] flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-1 self-stretch w-full">
            <h2 className="self-stretch heading-h4 text-center text-white">
              Nuestro Equipo
            </h2>

            <p className="text-regular-normal text-center text-white">
              Somos un equipo apasionado por la tecnología, con experiencia en desarrollo, infraestructura y consultoría. 
            </p>
            <p className="text-regular-normal text-center text-white">
            Nos mueve la innovación, el aprendizaje constante y el trabajo colaborativo para crear soluciones eficientes y a medida de cada cliente.
            </p>
            
            
          </div>
        </div>

        <div className="flex flex-col items-start gap-10 self-stretch w-full">
          {/* Primer fila del equipo */}
          <div className="flex items-start gap-12 self-stretch w-full">
            {teamMembers?.slice(0, 3).map((member, index) => (
              <Card
                key={index}
                className="flex-1 bg-transparent border-none shadow-none"
              >
                <CardContent className="flex flex-col items-center gap-6 p-0">
                  <img
                    className="w-40 h-40 object-cover rounded-[20px] shadow-2xl"
                    alt={member.name || "Placeholder image"}
                    src={member.image}
                  />

                  <div className="flex flex-col items-center gap-4 self-stretch w-full">
                    <div className="flex flex-col items-center self-stretch w-full">
                      <h4 className="self-stretch font-text-large-semi-bold text-[#E0CFF7] text-[length:var(--text-large-semi-bold-font-size)] text-center tracking-[var(--text-large-semi-bold-letter-spacing)] leading-[var(--text-large-semi-bold-line-height)] [font-style:var(--text-large-semi-bold-font-style)]">
                        {member.name}
                      </h4>

                      <p className="self-stretch font-text-medium-normal text-[#a03df4] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                        {member.jobTitle}
                      </p>
                    </div>

                    <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch text-[#E0CFF7] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                      {member.description}
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    {member.socialLinks?.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6"
                      >
                        <img
                          alt={`Icon ${link.platform}`}
                          src={link.icon}
                          className="w-full h-full"
                        />
                      </a>
                    ))}
                    {/* Ícono de LinkedIn */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-full h-full text-[#0A66C2]"
                        >
                          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.25 12.27h-3v-5.5c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.6h-3v-11h2.89v1.5h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v6.45z" />
                        </svg>
                      </a>
                    )}
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
                    className="w-40 h-40 object-cover rounded-[20px] shadow-2xl"
                    alt={member.name || "Placeholder image"}
                    src={member.image}
                  />

                  <div className="flex flex-col items-center gap-4 self-stretch w-full">
                    <div className="flex flex-col items-center self-stretch w-full">
                      <h4 className="self-stretch font-text-large-semi-bold text-[#E0CFF7] text-[length:var(--text-large-semi-bold-font-size)] text-center tracking-[var(--text-large-semi-bold-letter-spacing)] leading-[var(--text-large-semi-bold-line-height)] [font-style:var(--text-large-semi-bold-font-style)]">
                        {member.name}
                      </h4>

                      <p className="self-stretch font-text-medium-normal text-[#a03df4] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                        {member.jobTitle}
                      </p>
                    </div>

                    <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch text-[#E0CFF7] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                      {member.description}
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    {member.socialLinks?.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6"
                      >
                        <img
                          alt={`Icon ${link.platform}`}
                          src={link.icon}
                          className="w-full h-full"
                        />
                      </a>
                    ))}
                    {/* Ícono de LinkedIn */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-full h-full text-[#0A66C2]"
                        >
                          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.25 12.27h-3v-5.5c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.6h-3v-11h2.89v1.5h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v6.45z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col w-[768px] items-center gap-4">
            <h4 className="self-stretch text-[length:var(--heading-desktop-h4-font-size)] text-center tracking-[var(--heading-desktop-h4-letter-spacing)] leading-[var(--heading-desktop-h4-line-height)] font-heading-desktop-h4 text-[#E0CFF7] [font-style:var(--heading-desktop-h4-font-style)]">
              We&apos;re hiring!
            </h4>

            <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] self-stretch text-[#E0CFF7] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col w-[155px] items-start gap-4">
            <Button
              variant="outline"
              className="py-4 rounded-[100px] border-transparent  shadow-2xl bg-[#a03df4]"
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
