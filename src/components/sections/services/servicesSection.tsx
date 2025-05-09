import { ServiceCard } from "./serviceCard"
import { servicesData } from "./servicesData"
import { BusinessIntelligencePattern, SoporteTecnicoPattern, DesarrolloSoftwarePattern } from "./backgroundPatterns"
import React from "react"

// Cambiado de export default a export nombrada
export function ServicesSection() {
  // Se define un mapa que asocia cada ID de servicio con su patrón de fondo correspondiente
  const patternMap = {
    "business-intelligence": <BusinessIntelligencePattern />,
    "soporte-tecnico": <SoporteTecnicoPattern />,
    "desarrollo-software": <DesarrolloSoftwarePattern />,
  }

  return (
    <section className="w-full bg-[#08030d] py-20 px-4 md:px-8" id="servicios">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-h5 md:text-3xl mb-12 text-center text-white">Nuestros Servicios</h2>        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Se usa el método `map()` para iterar sobre los datos y crear una tarjeta para cada servicio*/}
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              backgroundPattern={patternMap[service.id as keyof typeof patternMap]}
              url={service.url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
