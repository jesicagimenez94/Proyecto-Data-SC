import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature data for mapping
const features = [
  {
    icon: "public/icon---relume.svg",
    title: "Innovative data analytics solutions",
    description:
      "Data SC offers advanced data analytics services that empower businesses to make informed decisions. By harnessing the power of big data, we help organizations uncover valuable insights and optimize their operations for success.",
  },
  {
    icon: "public/icon---relume.svg",
    title: "Customized business intelligence tools",
    description:
      "Data SC offers customized business intelligence tools that enhance decision-making. These tools provide seamless data visualization, real-time insights, and intuitive reporting, allowing your team to access and analyze critical information efficiently.",
  },
  {
    icon: "public/icon---relume.svg",
    title: "Comprehensive data management service",
    description:
      "Our Data Management Service provides an efficient solution for organizing, storing, and analyzing your data. It ensures security, accessibility, and maintenance at every stage. From collection to reporting, our service simplifies the process, allowing informed decisions based on accurate information.",
  },
];

export const PageLayoutSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 relative bg-white">
      <h2 className="text-[length:var(--heading-desktop-h3-font-size)] text-center tracking-[var(--heading-desktop-h3-letter-spacing)] leading-[var(--heading-desktop-h3-line-height)] font-heading-desktop-h3 font-[number:var(--heading-desktop-h3-font-weight)] text-[#0d0107] [font-style:var(--heading-desktop-h3-font-style)] max-w-[768px]">
        Key Features
      </h2>

      <div className="flex flex-col items-start gap-16 relative w-full">
        <div className="flex items-start justify-center gap-12 relative w-full">
          {features.map((feature, index) => (
            <Card key={index} className="flex-1 border-none shadow-none">
              <CardContent className="flex flex-col items-center gap-8 p-0">
                <div className="flex flex-col items-center gap-6 w-full">
                  <img
                    className="w-12 h-12"
                    alt="Icon relume"
                    src={feature.icon}
                  />

                  <div className="flex flex-col items-start gap-6 w-full">
                    <h3 className="self-stretch text-[length:var(--heading-desktop-h5-font-size)] text-center tracking-[var(--heading-desktop-h5-letter-spacing)] leading-[var(--heading-desktop-h5-line-height)] mt-[-1.00px] font-heading-desktop-h5 font-[number:var(--heading-desktop-h5-font-weight)] text-[#0d0107] [font-style:var(--heading-desktop-h5-font-style)]">
                      {feature.title}
                    </h3>

                    <p className="font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch font-text-regular-normal text-[#0d0107] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 w-full">
                  <Button
                    variant="ghost"
                    className="rounded-[100px] p-0 h-auto"
                  >
                    <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#0d0107] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                      Button
                    </span>
                    <ChevronRightIcon className="w-6 h-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
