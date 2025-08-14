import { useState, useEffect } from "react";
import { useContent } from "../../context/ContentProvider";
import { ChevronDownIcon, Menu, X } from "lucide-react";
import Button from "../ui/Button.jsx";

export default function Header() {
  const { navLinks = [] } = useContent() || {};
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollHeight = Math.max(
            document.documentElement.scrollHeight - window.innerHeight,
            1
          );
          const scrolled = Math.max(0, window.scrollY);
          const progress = Math.min(scrolled / scrollHeight, 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Llamada inicial para establecer el estado correcto
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const LanguageButton = (
    <Button
      variant="ghost"
      className="text-regular-medium bg-slate-200 text-black rounded-full px-5 py-1 shadow-md flex items-center gap-2 hover:bg-slate-300"
    >
      ESP <ChevronDownIcon className="w-4 h-4" />
    </Button>
  );

  const ContactButton = (
    <Button
      href="#form-section"
      onClick={() => setIsNavOpen(false)}
      className="text-regular-medium bg-[#750cca] hover:bg-[#8a31dd] text-white rounded-full px-5 py-1 shadow-md hover:shadow-[0_0_24px_#a43cfa] transition-shadow duration-300 text-center"
    >
      Contactanos
    </Button>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="fixed z-[1000] w-[95%] md:w-[98.5%] p-4 md:px-6 md:py-1 transform -translate-x-1/2 bg-[#08030d] rounded-2xl top-2 md:top-4 left-1/2 border border-zinc-800 relative overflow-hidden">
        {/* Borde dinámico optimizado */}
        {scrollProgress > 0 && (
          <>
            <div 
              className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-200"
              style={{
                background: `conic-gradient(from 90deg, 
                  transparent 0deg,
                  transparent ${Math.max(0, 360 - (scrollProgress * 360))}deg,
                  #b459ff ${Math.max(0, 360 - (scrollProgress * 360))}deg,
                  #750cca ${Math.min(360, 270 + (scrollProgress * 90))}deg,
                  #b459ff 360deg
                )`,
                padding: '2px',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'xor',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
              }}
            />
            
            {/* Efecto de brillo optimizado */}
            {/* <div 
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-20 transition-opacity duration-300"
              style={{
                background: `conic-gradient(from ${scrollProgress * 360}deg, 
                  transparent 0deg,
                  rgba(180, 89, 255, 0.6) 15deg,
                  transparent 45deg
                )`,
                filter: 'blur(3px)',
                willChange: 'transform',
              }}
            /> */}
          </>
        )}

        <div className="flex items-center justify-between relative z-10">
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
              <ul className="flex items-center justify-center gap-8">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-regular-medium text-slate-300 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 hover:backdrop-blur-sm relative group"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              {LanguageButton}
              {ContactButton}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-20 p-2 rounded-full hover:bg-white/10 transition-all duration-200"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label={isNavOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`w-6 h-6 text-white absolute inset-0 transition-all duration-300 ${
                  isNavOpen
                    ? "opacity-0 rotate-180 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`w-6 h-6 text-white absolute inset-0 transition-all duration-300 ${
                  isNavOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-180 scale-75"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Indicador de progreso optimizado */}
        {/* {scrollProgress > 0.01 && (
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-zinc-800/50 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-[#b459ff] to-[#750cca] transition-all duration-100 ease-out will-change-transform"
              style={{ 
                width: `${scrollProgress * 100}%`,
                transform: `translateZ(0)` // Fuerza aceleración hardware
              }}
            />
          </div>
        )}  */}
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-10 lg:hidden transition-all duration-500 ease-out ${
          isNavOpen
            ? "opacity-100 visible backdrop-blur-lg"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Background Overlay with Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-black/95 via-zinc-900/95 to-purple-900/20 transition-all duration-500 ${
            isNavOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Menu Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6">
          <nav className="w-full max-w-md">
            {/* Navigation Links */}
            <ul className="flex flex-col items-center gap-3 mb-12">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className={`w-full text-center transform transition-all duration-500 ${
                    isNavOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isNavOpen
                      ? `${index * 100 + 200}ms`
                      : "0ms",
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsNavOpen(false)}
                    className="text-regular-medium text-slate-100 text-2xl sm:text-3xl block py-4 transition-all duration-300 relative group overflow-hidden"
                  >
                    <span className="relative z-10 transition-all duration-300 group-hover:text-white">
                      {item.text}
                    </span>
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#b459ff]/20 via-[#750cca]/30 to-[#b459ff]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center rounded-full"></div>
                    {/* Side accent lines */}
                    <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-[#b459ff] transform -translate-y-1/2 group-hover:w-8 transition-all duration-300 ease-out"></div>
                    <div className="absolute right-0 top-1/2 w-0 h-0.5 bg-[#750cca] transform -translate-y-1/2 group-hover:w-8 transition-all duration-300 ease-out delay-75"></div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-5 transform transition-all duration-500 ${
                isNavOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: isNavOpen
                  ? `${navLinks.length * 100 + 300}ms`
                  : "0ms",
              }}
            >
              <div className="transform hover:scale-105 transition-transform duration-200">
                {LanguageButton}
              </div>
              <div className="transform hover:scale-105 transition-transform duration-200">
                {ContactButton}
              </div>
            </div>
          </nav>

          {/* Decorative Elements */}
          <div
            className={`absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1000 ${
              isNavOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          />
          <div
            className={`absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000 ${
              isNavOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ transitionDelay: "200ms" }}
          />
        </div>
      </div>
    </header>
  );
}