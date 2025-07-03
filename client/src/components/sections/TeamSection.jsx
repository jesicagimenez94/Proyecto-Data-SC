//////////////////////////////////////////////////////////
// Importaciones
import Button from "../ui/button";
import { Card, CardContent } from "../ui/Card";
import { useContent } from "../../context/ContentProvider";
import { useState, useEffect } from "react";
import "../../styles/TeamSection.css";

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

//////////////////////////////////////////////////////////
// Componente TeamSection
const TeamSection = () => {
  // Esto sirve para obtener los datos del JSON que cargamos en el ContentProvider
  const {teamMembers=[]} = useContent() || {};
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

  return (
    <>
      <section className="team-section">
        <div className="team-header">
          <div className="team-header-content">
            <h2 className="heading-h5 text-center text-white">Nuestro Equipo</h2>

            <p className="team-description">
              Somos un equipo apasionado por la tecnología, con experiencia en desarrollo, infraestructura y consultoría. 
            </p>
            <p className="team-description">
              Nos mueve la innovación, el aprendizaje constante y el trabajo colaborativo para crear soluciones eficientes y a medida de cada cliente.
            </p>
          </div>
        </div>

        <div className="team-grid">
          {/* Renderizar filas con 3 miembros cada una por defecto */}
          {teamRows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="team-row">
              {row.map((member, memberIndex) => (
                <Card
                  key={`member-${rowIndex}-${memberIndex}`}
                  className="team-card"
                >
                  <CardContent className="team-card-content">
                    <div className="team-member-info">
                      <img
                        className="team-member-image"
                        alt={member.name || "Placeholder image"}
                        src={member.image}
                      />

                      <div className="team-member-details">
                        <div className="team-member-header">
                          <h4 className="team-member-name">
                            {member.name}
                          </h4>

                          <p className="team-member-title">
                            {member.jobTitle}
                          </p>
                        </div>

                        <p className="team-member-description">
                          {member.description}
                        </p>
                      </div>
                    </div>

                    <div className="team-social-links">
                      {member.socialLinks?.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <img
                            alt={`Icon ${link.platform}`}
                            src={link.icon}
                            className="social-icon"
                          />
                        </a>
                      ))}
                      {/* Ícono de LinkedIn */}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="linkedin-icon"
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

        <div className="hiring-section">
          <div className="hiring-content">
            <h4 className="hiring-title">
              We&apos;re hiring!
            </h4>

            <p className="hiring-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="hiring-button-container">
            <Button
              variant="outline"
              className="hiring-button"
            >
              <span className="button-text">
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