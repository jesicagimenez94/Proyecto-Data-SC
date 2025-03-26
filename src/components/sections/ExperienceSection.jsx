//////////////////////////////////////////////////////////
// Importaciones

//////////////////////////////////////////////////////////
// Componente ExperienceSection
const ExperienceSection = () => {
  return (
    <section className="w-full flex flex-col items-start gap-20 px-16 py-28 bg-white">
      <div className="flex items-center gap-20 w-full">
        {/* Contenido de texto */}
        <div className="flex-1 flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-6">
            <h3 className="text-[length:var(--heading-desktop-h3-font-size)] tracking-[var(--heading-desktop-h3-letter-spacing)] leading-[var(--heading-desktop-h3-line-height)] font-heading-desktop-h3 text-[#08030d]">
              Elevate Your Experience
            </h3>
            <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] text-[#08030d]">
              LincePulce offers tailored data solutions that empower businesses to harness their full potential.
            </p>
          </div>

          {/* Lista de beneficios */}
          <div className="w-full flex flex-col gap-4 py-2">
            {[
              "LincePulce stands out with its exceptional ability to provide tailored data solutions that cater specifically to the individual needs of each client, ensuring maximum impact and effectiveness.",
              "Our analytic strategies transform complex data into actionable insight",
              "Seamless integration and personalized support"
            ].map((text, index) => (
              <div key={index} className="w-full flex items-center gap-4">
                <img className="w-4 h-4" alt="Icon relume" src="public/icon---relume.svg" />
                <p className="flex-1 font-text-regular-normal text-[#08030d] text-[length:var(--text-regular-normal-font-size)]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <img className="flex-1 h-[540px] object-cover rounded-[40px]" alt="Placeholder image" src="public/placeholder-image-9.png" />
      </div>
    </section>
  );
};

export default ExperienceSection;
