//////////////////////////////////////////////////////////
// Importaciones

import { Separator } from "../../components/ui/Separator";
import { useContent } from "../../context/ContentProvider"; // Importando el hook useContent

//////////////////////////////////////////////////////////
// Componente Footer
export default function Footer() {
  // Esto sirve para obtener los datos del JSON que cargamos en el ContentProvider
  // Se usa "|| {}" para asegurarnos de que, si useContent() devuelve null o undefined
  // no intentemos hacer destructuring de un valor que no existe, evitando errores.
  // Además, asignamos un array vacío como valor por defecto ([]) para que
  // en caso de que estas propiedades no existan en el contexto, la aplicación
  // no falle al intentar mapearlas o usarlas en la UI.
  const { footerLinks = [], socialIcons = [] } = useContent() || {};

  return (
    <>
      <footer className="flex w-full gap-20 px-16 py-20 bg-white flex-col items-center">
        <div className="flex items-center gap-8 self-stretch w-full">
          {/* Logo */}
          <div className="flex flex-col items-start gap-6 flex-1">
            <img
              className="w-[84px] h-9"
              alt="Company logo"
              src="public/company-logo.svg"
            />
          </div>

          {/* Footer Links */}
          <FooterLinks links={footerLinks} />

          {/* Social Icons */}
          <SocialIcons icons={socialIcons} />
        </div>

        <div className="flex flex-col items-center gap-8 self-stretch w-full">
          <Separator className="w-full h-px" />

          <div className="flex items-start gap-6">
            <span className="font-text-small-normal text-[#08030d] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
              © 2024 LincePulce. All rights reserved.
            </span>

            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Cookies Setting</FooterLink>
          </div>
        </div>
      </footer>
    </>
  );
}

// Componente para renderizar los links del footer
const FooterLinks = ({ links }) => {
  return (
    <div className="flex items-start gap-8">
      {links?.map((link, index) => (
        <a
          key={index}
          className="font-text-small-semi-bold text-[#08030d] text-[length:var(--text-small-semi-bold-font-size)] underline tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]"
          href={link.href}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

// Componente para renderizar los iconos sociales del footer
const SocialIcons = ({ icons }) => {
  return (
    <div className="flex items-center justify-end gap-3 flex-1">
      {icons?.map((icon, index) => (
        <img key={index} className="w-6 h-6" alt={icon.alt} src={icon.src} />
      ))}
    </div>
  );
};

// Componente reutilizable para los enlaces del footer
const FooterLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="font-text-small-link text-[#08030d] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)]"
    >
      {children}
    </a>
  );
};
