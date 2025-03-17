import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainLayoutSection = (): JSX.Element => {
  // Data for the feature list items
  const featureItems = [
    {
      id: 1,
      text: "Data SC stands out with its exceptional ability to provide tailored data solutions that cater specifically to the individual needs of each client, ensuring maximum impact and effectiveness.",
    },
    {
      id: 2,
      text: "Our analytic strategies transform complex data into actionable insight",
    },
    {
      id: 3,
      text: "Seamless integration and personalized support",
    },
  ];

  return (
    <section className="w-full py-28 px-16 bg-white">
      <div className="flex flex-col md:flex-row gap-20 items-start">
        <div className="flex flex-col items-start gap-8 flex-1">
          <div className="flex flex-col items-start gap-6 w-full">
            <h3 className="text-[44px] leading-[120%] tracking-[-0.44px] font-heading-desktop-h3 font-normal text-[#0d0107] mt-[-1px]">
              Elevate Your Experience
            </h3>

            <p className="font-text-medium-normal text-[18px] leading-[150%] text-[#0d0107]">
              Data SC offers tailored data solutions that empower businesses to
              harness their full potential.
            </p>
          </div>

          <Card className="w-full border-none shadow-none">
            <CardContent className="p-0 py-2">
              {featureItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 w-full mb-4 last:mb-0"
                >
                  <CheckIcon className="w-4 h-4 text-[#0d0107]" />
                  <p className="flex-1 mt-[-1px] font-text-regular-normal text-[16px] leading-[150%] text-[#0d0107]">
                    {item.text}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="flex-1">
          <img
            className="w-full h-[640px] object-cover"
            alt="Placeholder image"
            src="public/placeholder-image-8.png"
          />
        </div>
      </div>
    </section>
  );
};
