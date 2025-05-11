import { useState } from "react";
import { useContent } from "../../context/ContentProvider";
import { ChevronDownIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/NavigationMenu";
import Button from "../../components/ui/button";

export default function Header() {
  const { navLinks = [] } = useContent() || {};
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 z-50 w-full flex justify-center">
        <div className="flex h-[72px] items-center justify-between px-10 w-full max-w-[80%] bg-[#000]/60 backdrop-blur-md rounded-full">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="h-12 md:h-14 lg:h-16 object-contain"
              alt="Company logo"
              src="public/logos/web_square_500x500.png"
            />
          </div>

          {/* Menú para escritorio */}
          <div className="hidden lg:flex items-center justify-between gap-6">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-10">
                {navLinks.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href}
                        className="text-regular-normal text-white hover:underline text-md transition-all"
                      >
                        {item.text}
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="px-5 py-2 bg-white text-black rounded-full flex items-center gap-2 shadow-md"
              >
                <span className="font-medium">ESP</span>
                <ChevronDownIcon className="w-4 h-4" />
              </Button>
              <Button
                className="px-5 py-2 bg-[#a33cfa] text-white rounded-full font-medium shadow-md"
                href="#form-section"
              >
                Contacto
              </Button>
            </div>
          </div>

          {/* Ícono hamburguesa para mobile */}
          <div className="flex lg:hidden">
            <div
              className="space-y-2 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
            </div>
          </div>
        </div>

        {/* Menú mobile desplegable */}
        {isNavOpen && (
          <div
            className={`absolute top-0 left-0 w-full h-screen bg-black/100 flex flex-col items-center justify-center z-[999] gap-8 text-white text-xl transition-all duration-300 ease-in-out transform ${
              isNavOpen
                ? "opacity-100 scale-100 visible pointer-events-auto"
                : "opacity-0 scale-95 invisible pointer-events-none"
            }`}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setIsNavOpen(false)}
            >
              ×
            </button>
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsNavOpen(false)}
                className="hover:underline"
              >
                {item.text}
              </a>
            ))}

            <Button
              variant="outline"
              className="px-5 py-2 bg-white text-black rounded-full flex items-center gap-2 shadow-md"
            >
              <span className="font-medium">ESP</span>
              <ChevronDownIcon className="w-4 h-4" />
            </Button>

            <Button
              className="px-5 py-2 bg-[#a33cfa] text-white rounded-full font-medium shadow-md"
              href="#form-section"
            >
              Contacto
            </Button>
          </div>
        )}
      </header>
    </>
  );
}
