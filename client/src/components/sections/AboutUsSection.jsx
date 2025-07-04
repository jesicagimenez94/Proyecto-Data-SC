//////////////////////////////////////////////////////////
// Importaciones
//////////////////////////////////////////////////////////
// Componente ExperienceSection
const ExperienceSection = () => {
  return (
    <section className="w-full flex flex-col items-start gap-10 px-4 py-20 sm:gap-16 sm:px-8 md:gap-20 md:px-16 lg:px-28 bg-[#08030d]" id="sobre-nosotros">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full">
        {/* Contenido de texto */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <h3 className="heading-h5 text-[#E0CFF7]">
            Nos preocupamos por nuestro trabajo
          </h3>
          <p className="text-regular-normal text-[#b2a9be]">
            Llevamos la inteligencia de los datos, el desarrollo de software y el soporte técnico al siguiente nivel. Ofrecemos soluciones avanzadas para optimizar procesos, impulsar el crecimiento y mejorar la toma de decisiones en tu empresa.
          </p>

          {/* Lista de beneficios */}
          <div className="w-full flex flex-col gap-4 py-2">
            {[
              "Soluciones de datos personalizadas que se ajustan a vos, garantizando el máximo impacto y eficacia.",
              "Transforma datos complejos en información procesable con nuestras estrategias analíticas",
              "Integración perfecta y soporte personalizado",
            ].map((text, index) => (
              <div key={index} className="w-full flex items-start gap-4">
                {/* SVG inline con color personalizado */}
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-[#a259ff]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-17h2v8h-2zm0 10h2v2h-2z" />
                </svg>
                <p className="text-regular-normal flex-1 text-xs xs:text-base md:text-base lg:text-base text-[#E0CFF7]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <img
          className="flex-1 w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[540px] object-cover rounded-[20px] lg:rounded-[40px]"
          alt="Placeholder image"
          src="/rocket.png"
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
