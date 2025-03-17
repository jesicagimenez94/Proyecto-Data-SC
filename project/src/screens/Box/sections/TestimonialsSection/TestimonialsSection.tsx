import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  const testimonialData = {
    logoSrc: "public/placeholder-logo.svg",
    logoAlt: "Placeholder logo",
    quote:
      '"We are truly impressed with the results we achieved! The team\'s expertise made a significant difference in our project. They were responsive, professional, and dedicated to exceeding our expectations. It was a fantastic collaboration that led us to success!"',
    avatarSrc: "public/placeholder-image-7.png",
    avatarAlt: "Avatar image",
    name: "Name Surname",
    position: "Position, Company name",
  };

  return (
    <section className="flex flex-col items-center gap-20 px-16 py-28 bg-white w-full">
      <Card className="border-none shadow-none bg-transparent max-w-[768px] w-full">
        <CardContent className="flex flex-col items-center gap-8 p-0">
          <img
            className="w-[120px] h-12"
            alt={testimonialData.logoAlt}
            src={testimonialData.logoSrc}
          />

          <p className="font-heading-desktop-h5 font-[number:var(--heading-desktop-h5-font-weight)] text-[#0d0107] text-[length:var(--heading-desktop-h5-font-size)] text-center tracking-[var(--heading-desktop-h5-letter-spacing)] leading-[var(--heading-desktop-h5-line-height)] [font-style:var(--heading-desktop-h5-font-style)]">
            {testimonialData.quote}
          </p>

          <div className="flex flex-col items-center gap-4 w-[300px]">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src={testimonialData.avatarSrc}
                alt={testimonialData.avatarAlt}
                className="object-cover"
              />
              <AvatarFallback>NS</AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-center w-full">
              <p className="font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[length:var(--text-regular-semi-bold-font-size)] text-center leading-[var(--text-regular-semi-bold-line-height)] text-[#0d0107] tracking-[var(--text-regular-semi-bold-letter-spacing)] [font-style:var(--text-regular-semi-bold-font-style)]">
                {testimonialData.name}
              </p>

              <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] text-[#0d0107] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                {testimonialData.position}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
