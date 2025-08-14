import { Separator } from "../../components/ui/Separator";
import { useContent } from "../../context/ContentProvider";

export default function Footer() {
  const { footerLinks = [], socialIcons = [] } = useContent() || {};

  return (
    <footer className="w-full bg-[var(--background-footer)] px-6 py-12 md:px-12">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 max-w-screen-xl mx-auto w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
            alt="Company logo"
            src="/estelar-logo-500x500.png"
          />
        </div>

        {/* Links y redes */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full">
          <FooterLinks links={footerLinks} />
          <SocialIcons icons={socialIcons} />
        </div>
      </div>

      {/* Separador y derechos */}
      <div className="mt-12 max-w-screen-xl mx-auto w-full">
        <Separator className="w-full h-px bg-white opacity-20" />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <span className="font-text-small-normal text-white text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
            © 2024 EstelarCode. All rights reserved.
          </span>

          <div className="flex flex-wrap justify-center gap-4">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Cookies Setting</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterLinks = ({ links }) => (
  <div className="flex flex-col sm:flex-row items-center gap-4 flex-wrap">
    {links?.map((link, index) => (
      <a
        key={index}
        href={link.href}
        className="font-text-small-semi-bold text-white text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)] hover:underline"
      >
        {link.text}
      </a>
    ))}
  </div>
);

const SocialIcons = ({ icons }) => (
  <div className="flex items-center justify-center gap-3 flex-wrap">
    {icons?.map((icon, index) => (
      <a key={icon.id || index} href={icon.url} target="_blank" rel="noopener noreferrer">
        <img
          className="w-6 h-6 hover:scale-110 transition-transform"
          alt={icon.alt}
          src={icon.src}
        />
      </a>
    ))}
  </div>
);

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="font-text-small-link text-white text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] [font-style:var(--text-small-link-font-style)] hover:underline"
  >
    {children}
  </a>
);