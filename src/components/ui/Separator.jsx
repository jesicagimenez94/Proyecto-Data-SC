//////////////////////////////////////////////////////////
// Importaciones
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";
import { cn } from "../../lib/utils";

//////////////////////////////////////////////////////////

// Componente de separador, basado en el componente de Radix
// Este componente se utiliza para separar elementos en una interfaz
// Puede ser horizontal o vertical
// El separador puede ser decorativo o no, dependiendo de la propiedad `decorative`
// Por defecto, el separador es horizontal y decorativo
const Separator = React.forwardRef(({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}, ref) => (
  // SeparatorPrimitive.Root es el componente base de Radix para el separador
  // Recibe las propiedades `decorative` y `orientation` para personalizar su apariencia
  // className es una cadena de clases CSS que se aplican al componente
  // props son las propiedades adicionales que se pueden pasar al componente
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-zinc-800",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className,
    )}
    {...props}
  />
));

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
