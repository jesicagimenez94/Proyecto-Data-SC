import { ServiceCard } from "./serviceCard"
import { servicesData } from "./servicesData"
import {
  BusinessIntelligencePattern,
  SoporteTecnicoPattern,
  DesarrolloSoftwarePattern,
  RedesPattern,
  SeguridadPattern
} from "./backgroundPatterns"

export function ServicesSection() {
  const patternMap = {
    "business-intelligence": <BusinessIntelligencePattern />,
    "soporte-tecnico": <SoporteTecnicoPattern />,
    "desarrollo-software": <DesarrolloSoftwarePattern />,
    "seguridad-informatica": <SeguridadPattern />,
    "redes-y-comunicaciones": <RedesPattern />
  }

  const firstThree = servicesData.slice(0, 3)
  const lastTwo = servicesData.slice(3)

  return (
    <section className="w-full py-20 px-4 md:px-8 relative overflow-hidden" id="servicios">
      
      {/* fondo oscuro con patron radial, (los puntitos) */}
      <div className="absolute top-0 left-0 z-[-2] w-full h-full bg-[#08030d] bg-[radial-gradient(#ffffff10_1.5px,#08030d_2px)] bg-[size:1.5rem_1.5rem]" />


      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-center my-2">
          <div className="text-sm text-white bg-purple-800/30 p-8 border border-[#a33cfa]/20 px-4 py-1 rounded-2xl">
            Explora
          </div>
        </div>
        <h2 className="heading-h2 md:text-3xl mb-10 text-center text-white">
          Nuestros Servicios
        </h2>

        {/* Primer fila: 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {firstThree.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              backgroundPattern={patternMap[service.id as keyof typeof patternMap]}
              url={service.url}
              items={service.items}
            />
          ))}
        </div>

        {/* Segunda fila: 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lastTwo.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              backgroundPattern={patternMap[service.id as keyof typeof patternMap]}
              url={service.url}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
