import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Data for statistics to enable mapping
  const stats = [
    {
      value: "25%",
      description: "Increased in revenue in the past year",
    },
    {
      value: "50%",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="w-full py-28 px-16 bg-white">
      <div className="flex flex-col md:flex-row gap-20 items-start">
        <div className="flex flex-col items-start gap-8 flex-1">
          <div className="flex flex-col items-start gap-6 w-full">
            <h3 className="font-heading-desktop-h3 text-[length:var(--heading-desktop-h3-font-size)] tracking-[var(--heading-desktop-h3-letter-spacing)] leading-[var(--heading-desktop-h3-line-height)] font-[number:var(--heading-desktop-h3-font-weight)] text-[#0d0107] [font-style:var(--heading-desktop-h3-font-style)]">
              Long heading is what you see here in this feature section
            </h3>

            <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] font-[number:var(--text-medium-normal-font-weight)] text-[#0d0107] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
              In the past year, our company has increased revenue by 25%,
              achieving a record profit margin of 15%. We successfully launched
              10 innovative products, reaching over 1 million customers
              worldwide. Our commitment to sustainability has reduced carbon
              emissions by 40%, positively impacting the environment and our
              community.
            </p>
          </div>

          <Card className="w-full border-none shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-start gap-6 py-2">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-2 flex-1"
                  >
                    <h2 className="font-heading-desktop-h2 text-[length:var(--heading-desktop-h2-font-size)] tracking-[var(--heading-desktop-h2-letter-spacing)] leading-[var(--heading-desktop-h2-line-height)] font-[number:var(--heading-desktop-h2-font-weight)] text-[#0d0107] [font-style:var(--heading-desktop-h2-font-style)] w-full">
                      {stat.value}
                    </h2>
                    <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] font-[number:var(--text-regular-normal-font-weight)] text-[#0d0107] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)] w-full">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <img
          className="flex-1 h-[640px] object-cover"
          alt="Placeholder image"
          src="public/placeholder-image-8.png"
        />
      </div>
    </section>
  );
};
