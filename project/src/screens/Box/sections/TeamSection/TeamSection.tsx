import { DribbbleIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TeamSection = (): JSX.Element => {
  // Team member data for easy mapping
  const teamMembers = [
    {
      id: 1,
      name: "Full name",
      title: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-7.png",
    },
    {
      id: 2,
      name: "Full name",
      title: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-7.png",
    },
    {
      id: 3,
      name: "Full name",
      title: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-7.png",
    },
    {
      id: 4,
      name: "Full name",
      title: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-7.png",
    },
    {
      id: 5,
      name: "Full name",
      title: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-7.png",
    },
    {
      id: 6,
      name: "Full name",
      title: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-7.png",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-20 px-16 py-28 bg-white">
      <div className="max-w-[768px] w-full items-center gap-4 flex flex-col">
        <div className="inline-flex items-center relative self-stretch">
          <span className="font-heading-desktop-tagline font-[number:var(--heading-desktop-tagline-font-weight)] text-[#0d0107] text-[length:var(--heading-desktop-tagline-font-size)] text-center tracking-[var(--heading-desktop-tagline-letter-spacing)] leading-[var(--heading-desktop-tagline-line-height)] [font-style:var(--heading-desktop-tagline-font-style)]">
            Tagline
          </span>
        </div>

        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="self-stretch text-[length:var(--heading-desktop-h2-font-size)] text-center tracking-[var(--heading-desktop-h2-letter-spacing)] leading-[var(--heading-desktop-h2-line-height)] font-heading-desktop-h2 font-[number:var(--heading-desktop-h2-font-weight)] text-[#0d0107] [font-style:var(--heading-desktop-h2-font-style)]">
            Our team
          </h2>

          <p className="text-[#0d0107] text-center self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
            We are excited to introduce our key team members, each bringing
            unique expertise to our project.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-16 w-full">
        {/* First row of team members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {teamMembers.slice(0, 3).map((member) => (
            <Card
              key={member.id}
              className="flex flex-col items-center gap-6 border-none shadow-none bg-transparent"
            >
              <CardContent className="flex flex-col items-center gap-6 p-0 w-full">
                <Avatar className="w-20 h-20">
                  <AvatarImage
                    src={member.image}
                    alt={`${member.name} profile`}
                    className="object-cover"
                  />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="flex flex-col items-center w-full">
                    <h3 className="self-stretch font-text-large-semi-bold font-[number:var(--text-large-semi-bold-font-weight)] text-[#0d0107] text-[length:var(--text-large-semi-bold-font-size)] text-center tracking-[var(--text-large-semi-bold-letter-spacing)] leading-[var(--text-large-semi-bold-line-height)] [font-style:var(--text-large-semi-bold-font-style)]">
                      {member.name}
                    </h3>
                    <p className="self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#0d0107] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      {member.title}
                    </p>
                  </div>

                  <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch text-[#0d0107] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                    {member.description}
                  </p>
                </div>

                <div className="flex items-center gap-3.5">
                  <Button variant="ghost" size="icon" className="w-6 h-6 p-0">
                    <LinkedinIcon className="w-6 h-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-6 h-6 p-0">
                    <TwitterIcon className="w-6 h-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-6 h-6 p-0">
                    <DribbbleIcon className="w-6 h-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second row of team members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {teamMembers.slice(3, 6).map((member) => (
            <Card
              key={member.id}
              className="flex flex-col items-center gap-6 border-none shadow-none bg-transparent"
            >
              <CardContent className="flex flex-col items-center gap-6 p-0 w-full">
                <Avatar className="w-20 h-20">
                  <AvatarImage
                    src={member.image}
                    alt={`${member.name} profile`}
                    className="object-cover"
                  />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="flex flex-col items-center w-full">
                    <h3 className="self-stretch font-text-large-semi-bold font-[number:var(--text-large-semi-bold-font-weight)] text-[#0d0107] text-[length:var(--text-large-semi-bold-font-size)] text-center tracking-[var(--text-large-semi-bold-letter-spacing)] leading-[var(--text-large-semi-bold-line-height)] [font-style:var(--text-large-semi-bold-font-style)]">
                      {member.name}
                    </h3>
                    <p className="self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#0d0107] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      {member.title}
                    </p>
                  </div>

                  <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch text-[#0d0107] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                    {member.description}
                  </p>
                </div>

                <div className="flex items-center gap-3.5">
                  <Button variant="ghost" size="icon" className="w-6 h-6 p-0">
                    <LinkedinIcon className="w-6 h-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-6 h-6 p-0">
                    <TwitterIcon className="w-6 h-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-6 h-6 p-0">
                    <DribbbleIcon className="w-6 h-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="max-w-[768px] w-full flex flex-col items-center gap-4">
          <h4 className="self-stretch text-[length:var(--heading-desktop-h4-font-size)] text-center tracking-[var(--heading-desktop-h4-letter-spacing)] leading-[var(--heading-desktop-h4-line-height)] font-heading-desktop-h4 font-[number:var(--heading-desktop-h4-font-weight)] text-[#0d0107] [font-style:var(--heading-desktop-h4-font-style)]">
            We&apos;re hiring!
          </h4>

          <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] self-stretch text-[#0d0107] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Button
            variant="secondary"
            className="px-6 py-2.5 bg-[#0d01070d] rounded-[100px] border border-solid border-transparent"
          >
            <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#0d0107] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
              Open positions
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
