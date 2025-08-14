// import { ChevronRight } from "lucide-react" // --> ícono de flecha que se usaba en el botón "Conocé más". Si lo necesitan, pueden descomentar la línea de importación y el botón en el JSX
import type { ReactNode } from "react"

type ServiceCardProps = {
  title: string
  description: string
  backgroundPattern: ReactNode
  url: string
  items?: string[] // nueva prop
}

export function ServiceCard({ title, description, backgroundPattern, url, items }: ServiceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-[#08030d] p-8 border border-[#a33cfa]/20 h-full transition-transform duration-300 hover:scale-[1.02] hover:border-[#a33cfa]/50">
      
      <div className="absolute inset-0 opacity-10">{backgroundPattern}</div>

      <div className="relative z-10 flex flex-col h-full">
        <h2
          className="text-regular-normal font-semibold text-xl md:text-2xl mb-6 tracking-wider bg-gradient-to-r from-[#a33cfa] via-[#c2a3f2] to-[#a33cfa] bg-clip-text text-transparent"
        >
          {title}
        </h2>

        <p className="text-small-normal text-[#f2f2f2]/80 text-sm md:text-base mb-4">
          {description}
        </p>

        {/* Lista de ítems */}
        {items && (
          <ul className="list-disc pl-5 text-[#f2f2f2]/70 text-sm space-y-1 mb-6">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {/* Botón de "Conocé Más" que puede ser descomentado una vez que tengan las páginas de cada servicio hecha. Si no, no tiene sentido que esté.  */}
        {/* <a href={url} className="inline-flex items-center text-[#a33cfa] group mt-auto w-fit">
        <span className="mr-1">Conocé más</span>
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a> */}
      </div>
    </div>
  )
}
