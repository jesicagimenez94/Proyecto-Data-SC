import { ChevronRight } from "lucide-react"
import type { ReactNode } from "react"
import React from "react"

type ServiceCardProps = {
  title: string
  description: string
  backgroundPattern: ReactNode
  url: string
}

/* The `export function ServiceCard` is a React functional component that takes in props `title`,
`description`, `backgroundPattern`, and `url` as defined in the `ServiceCardProps` type. */
/**
 * The function `ServiceCard` in TypeScript React renders a styled card component with a title,
 * description, background pattern, and a link to explore more.
 * @param {ServiceCardProps}  - - `title`: The title of the service card.
 * @returns The `ServiceCard` component is being returned. It is a functional component that displays a
 * service card with a title, description, background pattern, and a link to explore more. The
 * component accepts props such as `title`, `description`, `backgroundPattern`, and `url` to customize
 * the content of the service card.
 */
export function ServiceCard({ title, description, backgroundPattern, url }: ServiceCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-[#08030d] p-8 border border-[#a33cfa]/20 h-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">{backgroundPattern}</div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <h2 className="text-[#E0CFF7] text-regular-normal text-xl md:text-2xl mb-6 tracking-wider">{title}</h2>

        <p className="text-small-normal text-[#f2f2f2]/80 mb-8 text-sm md:text-base flex-grow">{description}</p>

        <a href={url} className="font-rajdhani inline-flex items-center text-[#a33cfa] group mt-auto w-fit">
          <span className="mr-1">Conoce más</span>
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}

