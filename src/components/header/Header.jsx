//////////////////////////////////////////////////////////
// Importaciones

import { ChevronDownIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/NavigationMenu"; // Importando los componentes de la navegación

import Button from "../../components/ui/button";

import { useContent } from "../../context/ContentProvider"; // Importando el hook useContent

//////////////////////////////////////////////////////////
// Componente Header/Navigation
export default function Header() {
  // Esto sirve para obtener los datos del JSON que cargamos en el ContentProvider
  // Se usa "|| {}" para asegurarnos de que, si useContent() devuelve null o undefined
  // no intentemos hacer destructuring de un valor que no existe, evitando errores.
  // Además, asignamos un array vacío como valor por defecto ([]) para que
  // en caso de que estas propiedades no existan en el contexto, la aplicación
  // no falle al intentar mapearlas o usarlas en la UI.
  const { navLinks = [] } = useContent() || {};

  return (
    <>
      <header className="flex flex-col w-full items-center bg-white fixed top-0 z-50">
        <div className="flex h-[72px] items-center justify-between px-16 py-0 relative self-stretch w-full">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <img
              className="w-[84px] h-9"
              alt="Company logo"
              src="public/company-logo.svg"
            />
          </div>

          {/* Navigation. Se usa únicamente para el menú de navegación (desktop y mobile), difiere del componente Button ya que el menú muestra una lista de enlaces de navegación, mientras que el botón es un elemento interactivo que generalmente dispara una acción. */}
          {/* DARLE FUNCIONALIDAD (MÁS PARA MOBILE) */}
          <div className="flex items-center justify-center gap-4">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-8">
                {navLinks?.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href}
                        className="font-text-regular-normal text-[#4a3164] hover:underline"
                      >
                        {item.text}
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              {/* Botón de cambio de idioma */}
              {/* DARLE FUNCIONALIDAD */}
              <Button
                variant="outline"
                className="px-5 py-2 bg-[#08030d0d] rounded-[100px] border-transparent"
              >
                <span className="font-text-regular-medium text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  ESP
                </span>
                <ChevronDownIcon className="w-6 h-6" />
              </Button>

              {/* Botón de contacto */}
              {/* DARLE FUNCIONALIDAD */}
              <Button className="px-5 py-2 bg-[#a33cfa] rounded-[100px]" href="#">
                <span className="font-text-regular-medium text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  Contacto
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
