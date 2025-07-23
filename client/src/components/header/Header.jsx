import { useState, useEffect } from "react";
import { useContent } from "../../context/ContentProvider";
import { ChevronDownIcon, Menu, X } from "lucide-react";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
// } from "../../components/ui/NavigationMenu";
import Button from "../ui/Button.jsx";

export default function Header() {
  const { navLinks = [] } = useContent() || {};
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  const LanguageButton = (
    <Button variant="ghost" className="bg-slate-200 text-black rounded-full px-5 py-2 shadow-md flex items-center gap-2">
      ESP <ChevronDownIcon className="w-4 h-4" />
    </Button>
  );

  const ContactButton = (
    <a
      href="#form-section"
      onClick={() => setIsNavOpen(false)}
      className="bg-[#750cca] hover:bg-[#8a31dd] text-white font-medium rounded-full px-5 py-2 shadow-md transition-colors text-center"
    >
      Contacto
    </a>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className="fixed z-[1000] w-[96%] md:w-[53.33%] p-4 md:px-6 md:py-2  transform -translate-x-1/2 bg-opacity-50 rounded-full top-4 left-1/2 bg-zinc-900 backdrop-blur-2xl border border-zinc-800"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center z-20">
            <img
              src="/logos/web_square_500x500.png"
              alt="Company logo"
              className="h-12 md:h-12 lg:h-14 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between flex-1 ml-10">
            <nav className="flex-1">
              <ul className="font-rajdhani flex items-center justify-center gap-8">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-slate-100 hover:text-[#b459ff] text-[17px] transition-all"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="font-rajdhani flex items-center gap-4">
              {LanguageButton}
              {ContactButton}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-20 p-2"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label={isNavOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isNavOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 backdrop-blur-lg z-10 flex flex-col items-center justify-center transition-all duration-300 ease-in-out lg:hidden ${
          isNavOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="w-full max-w-md px-6">
          <ul className="flex flex-col items-center gap-8 mb-10">
            {navLinks.map((item, index) => (
              <li key={index} className="w-full text-center">
                <a
                  href={item.href}
                  onClick={() => setIsNavOpen(false)}
                  className="text-slate-100 hover:text-[#b459ff] text-2xl font-medium block py-2 transition-all"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-5">
            {LanguageButton}
            {ContactButton}
          </div>
        </nav>
      </div>
    </header>
  );
}
