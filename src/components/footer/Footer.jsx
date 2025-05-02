import { Separator } from "../../components/ui/Separator";
import { useContent } from "../../context/ContentProvider";

export default function Footer() {
  const { footerLinks = [], socialIcons = [] } = useContent() || {};

  return (
    <>
      <footer className="flex w-full gap-10 px-16 py-16 bg-[var(--background-footer)] flex-col items-center">
        <div className="flex items-center gap-8 self-stretch w-full">
          <div className="flex flex-col items-start gap-6 flex-1">
            <img
              className="w-[100px] h-[100px]"
              alt="Company logo"
              src="public/estelar-logo-500x500.png"
            />
          </div>
          <FooterLinks links={footerLinks} />
          <SocialIcons icons={socialIcons} />
        </div>

        <div className="flex flex-col items-center gap-8 self-stretch w-full">
          <Separator className="w-full h-px" />
          <div className="flex items-start gap-6">
            <span className="font-text-small-normal text-white text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
              © 2024 EstelarCode. All rights reserved.
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
          className="font-text-small-semi-bold text-white text-[length:var(--text-small-semi-bold-font-size)] underline-none tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]"
          href={link.href}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

const SocialIcons = ({ icons }) => {
  return (
    <div className="flex items-center justify-end gap-3 flex-1">
      {icons?.map((icon, index) => (
        <a href={icon.url}>
          <img key={index} className="w-6 h-6" alt={icon.alt} src={icon.src} />
        </a>
      ))}
    </div>
  );
};

const FooterLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="font-text-small-link text-white text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline-none [font-style:var(--text-small-link-font-style)]"
    >
      {children}
    </a>
  );
};
