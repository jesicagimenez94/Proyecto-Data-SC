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
      <header className="fixed top-4 z-50 w-full flex justify-center">
        
        <div className="flex h-[72px] items-center justify-between px-10 w-full max-w-[1650px] bg-[#000]/60 backdrop-blur-md rounded-full">
          
        

          {/* Navigation. Se usa únicamente para el menú de navegación (desktop y mobile), difiere del componente Button ya que el menú muestra una lista de enlaces de navegación, mientras que el botón es un elemento interactivo que generalmente dispara una acción. */}
          {/* DARLE FUNCIONALIDAD (MÁS PARA MOBILE) */}
          <div className="flex items-center w-full justify-between gap-6">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-10">
                {navLinks?.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href}
                        className="text-white hover:underline text-md transition-all"
                      >
                        {item.text}
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Logo */}
        <div className="flex items-center gap-6">
              <img
                className="w-[200px] h-9 object-contain rounded-2xl"
                alt="Company logo"
                src="public/logos/web_header_600x200.png"
              />
            </div>

            <div className="flex items-center gap-4">
              {/* Botón de cambio de idioma */}
              {/* DARLE FUNCIONALIDAD */}
              <Button
                variant="outline"
                className="px-5 py-2 bg-white text-black rounded-full flex items-center gap-2 shadow-md"
              >
                <span className="font-medium">ESP</span>
                <ChevronDownIcon className="w-4 h-4" />
              </Button>

              {/* Botón de contacto */}
              {/* DARLE FUNCIONALIDAD */}
              <Button
                className="px-5 py-2 bg-[#a33cfa] text-white rounded-full font-medium shadow-md"
                href="#"
              >
                Contacto
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
