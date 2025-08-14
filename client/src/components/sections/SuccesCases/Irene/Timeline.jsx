const Timeline = () => {
  return (
    <section className="bg-[#08030D] flex flex-col w-full items-center gap-20 px-4 py-16">
      <h4 className="heading-h4 mb-6 text-white text-center">Herramientas usadas</h4>
      <picture>
        {/* Imagen para móviles (se muestra por defecto) */}
        <source
          srcSet="public/timeline-mobile.webp"
          media="(max-width: 767px)"
        />
        {/* Imagen para escritorio (se muestra en pantallas mayores a 768px) */}
        <img
          src="public/timeline.webp"
          alt="Línea de tiempo"
          className="w-full h-auto"
        />
      </picture>
    </section>
  )
}

export default Timeline;