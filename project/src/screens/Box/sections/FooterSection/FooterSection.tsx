import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    "Link One",
    "Link Two",
    "Link Three",
    "Link Four",
    "Link Five",
  ];

  // Footer links data
  const footerLinks = [
    { text: "Privacy Policy", isLink: true },
    { text: "Terms of Service", isLink: true },
    { text: "Cookies Settings", isLink: true },
  ];

  // Social media icons with their respective components
  const socialIcons = [
    { icon: <FacebookIcon className="w-6 h-6" />, alt: "Facebook" },
    { icon: <InstagramIcon className="w-6 h-6" />, alt: "Instagram" },
    { icon: <TwitterIcon className="w-6 h-6" />, alt: "X" },
    { icon: <LinkedinIcon className="w-6 h-6" />, alt: "LinkedIn" },
    { icon: <YoutubeIcon className="w-6 h-6" />, alt: "YouTube" },
  ];

  return (
    <footer className="flex flex-col w-full items-center gap-20 px-16 py-20 relative bg-white">
      <div className="flex items-center gap-8 relative self-stretch w-full">
        {/* Logo section */}
        <div className="flex flex-col items-start gap-6 relative flex-1 grow">
          <img
            className="relative w-[84px] h-9"
            alt="Company logo"
            src="public/company-logo.svg"
          />
        </div>

        {/* Navigation links */}
        <nav className="inline-flex items-start gap-8 relative">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="relative w-fit mt-[-1.00px] font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#0d0107] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-small-semi-bold-font-style)]"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social media icons */}
        <div className="flex items-center justify-end gap-3 relative flex-1 grow">
          {socialIcons.map((social, index) => (
            <a key={index} href="#" aria-label={social.alt}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 relative self-stretch w-full">
        {/* Divider line */}
        <Separator className="w-full h-px" />

        {/* Copyright and legal links */}
        <div className="inline-flex items-start gap-6 relative">
          <div className="relative w-fit mt-[-1.00px] font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#0d0107] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
            © 2024 Relume. All rights reserved.
          </div>

          {footerLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="relative w-fit mt-[-1.00px] font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[#0d0107] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
