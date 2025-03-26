//////////////////////////////////////////////////////////
// Importaciones
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";

//////////////////////////////////////////////////////////

/// forwardRef es una función que crea un componente de reenvío de referencia: https://es.reactjs.org/docs/forwarding-refs.html

// Contenedor principal del Accordion
const Accordion = AccordionPrimitive.Root;

// Ítem del Accordion. Cada uno es una sección con contenido expandible.
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)} 
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

// Botón de activación para expandir o contraer el contenido del Accordion.
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", 
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// Contenido del Accordion que se muestra al expandir el ítem.
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// Exportamos los componentes para su uso en otras partes del proyecto.
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
