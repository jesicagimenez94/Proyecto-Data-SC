//////////////////////////////////////////////////////////
// Importaciones
import Button from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/Card";
import { useContent } from "../../context/ContentProvider";
import { useState, useEffect } from "react";


// Hook personalizado para detectar el tamaño de la ventana
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    
  }, []);

  return windowSize;
};

// Componente TeamSection
const TeamSection = () => {
  
  const {teamMembers=[]} = useContent() || {};
// Esto sirve para obtener los datos del JSON que cargamos en el ContentProvider
  // Se usa "|| {}" para asegurarnos de que, si useContent() devuelve null o undefined
  // no intentemos hacer destructuring de un valor que no existe, evitando errores.
  // Además, asignamos un array vacío como valor por defecto ([]) para que
  // en caso de que estas propiedades no existan en el contexto, la aplicación
  // no falle al intentar mapearlas o usarlas en la UI.

  const { width } = useWindowSize();
  // Función para determinar el número de tarjetas por fila según el ancho de la pantalla
  const getCardsPerRow = () => {
    if (width > 1024) return 3; // Pantallas grandes: 3 tarjetas
    if (width > 480) return 2;  // Tablets: 2 tarjetas
    return 1;                   // Móviles: 1 tarjeta
  };

  // Función para agrupar miembros según el tamaño de la pantalla
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Agrupar miembros dinámicamente según el tamaño de la pantalla
  const teamRows = chunkArray(teamMembers, getCardsPerRow());

  // Si no hay miembros, evitamos renderizar la sección
  if (!teamMembers.length) return null;

  return (
    <>
      <section className="flex flex-col w-full items-center gap-10 px-12 py-20 bg-[#08030d]" id="team-members">
        <div className="w-fill flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-1 self-stretch w-full">
            <h2 className="self-stretch heading-h4 text-center mb-6 text-white">
              Nuestro Equipo
            </h2>

            <p className="text-medium-normal text-center w-full max-w-4xl mb-3 text-white">
              Somos un equipo apasionado por la tecnología, con experiencia en desarrollo, infraestructura y consultoría. 
            </p>
            <p className="text-regular-normal text-center w-full max-w-2xl mb-8 text-[#b2a9be]">
            Nos mueve la innovación, el aprendizaje constante y el trabajo colaborativo para crear soluciones eficientes y a medida de cada cliente.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-10 self-stretch w-full">
          {/* Renderizar filas con 3 miembros cada una por defecto */}
          {teamRows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex items-start gap-12 self-stretch w-full">
            {row.map((member, memberIndex) => (
              <Card
                key={`member-${rowIndex}-${memberIndex}`}
                className="flex-1 bg-transparent border-none shadow-none"
              >
                <CardContent className="flex flex-col items-center gap-6 p-0">
                <div className="flex flex-col items-center">
                  <img
                    className="w-40 h-40 object-cover rounded-[20px] shadow-2xl"
                    alt={member.name || "Placeholder image"}
                    src={member.image}
                  />

                  <div className="flex flex-col items-center gap-4 self-stretch w-full">
                    <div className="flex flex-col items-center self-stretch w-full">
                      <h4 className="text-medium-normal text-center text-[#e0d5ee]">
                        {member.name}
                      </h4>

                      <p className="text-small-normal text-center text-[#a03df4]">
                        {member.jobTitle}
                      </p>
                    </div>

                    <p className="text-regular-normal line-clamp-6 md:line-clamp-none text-clip text-center text-[#c7bcd6]">
                      {member.description}
                    </p>
                  </div>
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
          ))}
        </div>
        

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col w-[768px] items-center gap-4">
            <h4 className="text-medium-normal text-2xl text-center  text-[#E0CFF7]">
              We&apos;re hiring!
            </h4>

            <p className="text-medium-normal text-center text-[#E0CFF7]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col w-[155px] items-start gap-4">
            <Button
              variant="outline"
              className="py-4 rounded-[100px] border-transparent  shadow-2xl bg-[#a03df4]"
            >
              <span className="text-regular-medium text-[#f2f2f2]">
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
