const Timeline = () => {
  return (
    <section className="bg-[#08030D] flex flex-col w-full items-center gap-20 mb-20 mt-20 px-4 md:px-0">
      <h4 className="heading-h4 mb-6 text-white text-center">Herramientas usadas</h4>
      <div className="flex w-full flex-col gap-8">
        {/* Item 1 - Diagnóstico (izquierda en escritorio) */}
        <div className="flex justify-start md:justify-start">
          <div className="w-full md:w-[52%] bg-[#201C25] p-6 md:pl-16 md:pt-8 md:pb-8 md:pr-8 
              rounded-[10px] 
              md:rounded-l-none md:rounded-tr-[10px] md:rounded-br-[10px]">
            <h4 className="heading-h4 text-[#e0d5ee] mt-2 mb-4">Diagnóstico</h4>
            <p className="text-regular-normal text-base md:text-[20px] text-[#e0d5ee] max-w-[90%]">
              Reuniones con equipos municipales y vecinos para identificar pain points:
            </p>
            <ul className="mt-4 pl-4 pr-4">
              <li className="text-regular-normal text-base md:text-[20px] text-[#e0d5ee] list-disc mt-1">78% de usuarios no encontraba trámites clave.</li>
              <li className="text-regular-normal text-base md:text-[20px] text-[#e0d5ee] list-disc mt-1">Sitio con 2.3 segundos de retraso en móviles.</li>
            </ul>
          </div>
        </div>

        {/* Item 2 - Prototipado (derecha en escritorio) */}
        <div className="flex justify-start md:justify-end">
          <div className="w-full md:w-[52%] bg-[#201C25] p-6 md:pl-16 md:pt-8 md:pb-8 md:pr-8 
              rounded-[10px] 
              md:rounded-r-none md:rounded-tl-[10px] md:rounded-bl-[10px]">
            <div className="flex flex-row items-center">
              <img src="public/icon-figma.webp" alt="icon-Figma" className="w-8 h-8 md:w-auto md:h-auto" />
              <h4 className="heading-h4 text-[#e0d5ee] mt-2 mb-4 ml-2 md:ml-0">Prototipado</h4>
            </div>
            <p className="text-regular-normal text-base md:text-[20px] text-[#e0d5ee] max-w-[90%]">
              Wireframes interactivos validados con:
            </p>
            <ul className="mt-4 pl-4 pr-4">
              <li className="text-regular-normal text-base md:text-[20px] text-[#e0d5ee] list-disc mt-1">Adultos mayores (accesibilidad).</li>
              <li className="text-regular-normal text-base md:text-[20px] text-[#e0d5ee] list-disc mt-1">Funcionarios (flujos administrativos).</li>
            </ul>
          </div>
        </div>

        {/* Item 3 - Desarrollo (izquierda en escritorio) */}
        <div className="flex justify-start md:justify-start">
          <div className="w-full md:w-[52%] bg-[#201C25] p-6 md:pl-16 md:pt-8 md:pb-8 md:pr-8 
              rounded-[10px] 
              md:rounded-l-none md:rounded-tr-[10px] md:rounded-br-[10px]">
            <h4 className="heading-h4 text-[#e0d5ee] mt-2 mb-4">Desarrollo</h4>
            <ul className="mt-4 pl-4 pr-4">
              <li className="text-regular-normal text-base md:text-[20px] text-[#e0d5ee] list-disc mt-1">React + Vite: Estructura modular con carga veloz para una experiencia fluida.</li>
              <li className="text-regular-normal text-base md:text-[20px] text-[#e0d5ee] list-disc mt-1">CSS puro: Estilos accesibles (contraste AA+) y diseño adaptable a todos los dispositivos.</li>
              <li className="text-regular-normal text-base md:text-[20px] text-[#e0d5ee] list-disc mt-1">Node.js: APIs REST para gestión de turnos online de forma eficiente y escalable.</li>
            </ul>
            <div className="flex flex-row flex-wrap items-center justify-start md:justify-center w-full md:w-[90%] mt-4 gap-2">
              <img src="public/icon-react.webp" alt="icon-React" className="w-8 h-8 md:w-auto md:h-auto" />
              <img src="public/icon-vite.webp" alt="icon-Vite" className="w-8 h-8 md:w-auto md:h-auto" />
              <img src="public/icon-css3.webp" alt="icon-CSS3" className="w-8 h-8 md:w-auto md:h-auto" />
              <img src="public/icon-node.webp" alt="icon-Node" className="w-8 h-8 md:w-auto md:h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline;