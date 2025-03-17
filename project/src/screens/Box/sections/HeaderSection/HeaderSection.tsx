import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  // Data for the section
  const heroData = {
    title: "Transformamos datos en decisiones",
    description:
      "Data SC is a leading consultancy firm specializing in data-driven solutions. We provide services in data analytics, business intelligence, and strategy development to help organizations make informed decisions. Our team of experts works closely with clients to unlock the potential of their data, driving growth and innovation.",
    buttons: [
      { text: "Button", variant: "primary" },
      { text: "Button", variant: "secondary" },
    ],
  };

  return (
    <section className="relative flex items-center w-full py-0 px-16 bg-cover bg-center min-h-[900px] [background:linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url(../public/placeholder-image-7.png)_50%_50%_/_cover]">
      <div className="flex flex-col items-start gap-8 max-w-[560px]">
        <div className="flex flex-col items-start gap-6 w-full">
          <h1 className="font-heading-desktop-h1 font-[number:var(--heading-desktop-h1-font-weight)] text-white text-[length:var(--heading-desktop-h1-font-size)] tracking-[var(--heading-desktop-h1-letter-spacing)] leading-[var(--heading-desktop-h1-line-height)] [font-style:var(--heading-desktop-h1-font-style)]">
            {heroData.title}
          </h1>

          <p className="text-white font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
            {heroData.description}
          </p>
        </div>

        <div className="flex items-start gap-4">
          <Button
            className="bg-white text-[#0d0107] rounded-[100px] px-6 py-2.5 font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]"
            variant="outline"
          >
            {heroData.buttons[0].text}
          </Button>

          <Button
            className="bg-[#ffffff1a] text-white border-transparent rounded-[100px] px-6 py-2.5 font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]"
            variant="outline"
          >
            {heroData.buttons[1].text}
          </Button>
        </div>
      </div>
    </section>
  );
};
