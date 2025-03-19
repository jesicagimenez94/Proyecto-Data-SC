import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import Button from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/Card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/NavigationMenu";
import { Separator } from "../../../../components/ui/Separator";

export const DesktopViewSection = () => {
  // Navigation links data
  const navLinks = [
    { text: "Servicios" },
    { text: "Proyectos" },
    { text: "Acerca de" },
  ];

  // Features data
  const features = [
    {
      title: "Innovative data analytics solutions",
      description:
        "Data SC offers advanced data analytics services that empower businesses to make informed decisions. By harnessing the power of big data, we help organizations uncover valuable insights and optimize their operations for success.",
    },
    {
      title: "Customized business intelligence tools",
      description:
        "Data SC offers customized business intelligence tools that enhance decision-making. These tools provide seamless data visualization, real-time insights, and intuitive reporting, allowing your team to access and analyze critical information efficiently.",
    },
    {
      title: "Comprehensive data management service",
      description:
        "Our Data Management Service provides an efficient solution for organizing, storing, and analyzing your data. It ensures security, accessibility, and maintenance at every stage. From collection to reporting, our service simplifies the process, allowing informed decisions based on accurate information.",
    },
  ];

  // Team members data
  const teamMembers = [
    { image: "public/placeholder-image-11.png" },
    { image: "public/placeholder-image-12.png" },
    { image: "public/placeholder-image-13.png" },
    { image: "public/placeholder-image-14.png" },
    { image: "public/placeholder-image-15.png" },
    { image: "public/placeholder-image-16.png" },
  ];

  // Footer links data
  const footerLinks = [
    { text: "Servicios" },
    { text: "Proyectos" },
    { text: "Acerca de" },
    { text: "Link Four" },
    { text: "Link Five" },
  ];

  // Social media icons
  const socialIcons = [
    { src: "public/icon---facebook.svg", alt: "Icon facebook" },
    { src: "public/icon---instagram.svg", alt: "Icon instagram" },
    { src: "public/icon---x.svg", alt: "Icon x" },
    { src: "public/icon---linkedin.svg", alt: "Icon linkedin" },
    { src: "public/icon---youtube.svg", alt: "Icon youtube" },
  ];

  return (
    <div className="flex flex-col items-start w-full">
      {/* Header/Navigation */}
      <header className="flex flex-col w-full items-center bg-white rounded-[10px]">
        <div className="flex h-[72px] items-center justify-between px-16 py-0 relative self-stretch w-full">
          <div className="flex items-center gap-6">
            <img
              className="w-[84px] h-9"
              alt="Company logo"
              src="public/company-logo.svg"
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink className="font-text-regular-normal text-[#08030d] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {link.text}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              <div className="flex flex-col items-start gap-2.5">
                <div className="flex items-center justify-center gap-1">
                  <span className="font-text-regular-normal text-[#08030d] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    Link Four
                  </span>
                  <ChevronDownIcon className="w-6 h-6" />
                </div>
              </div>

              <Button
                variant="outline"
                className="px-5 py-2 bg-[#08030d0d] rounded-[100px] border-transparent"
              >
                <span className="font-text-regular-medium text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  ESP
                </span>
                <ChevronDownIcon className="w-6 h-6" />
              </Button>

              <Button className="px-5 py-2 bg-[#a33cfa] rounded-[100px]">
                <span className="font-text-regular-medium text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  Contacto
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex w-full h-[900px] items-center px-16 py-0 [background:linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url(../public/header---5---1.png)_50%_50%_/_cover]">
        <div className="flex flex-col w-[560px] items-start gap-8">
          <div className="flex flex-col items-start gap-6 self-stretch w-full">
            <h1 className="self-stretch font-heading-desktop-h1 text-white text-[length:var(--heading-desktop-h1-font-size)] tracking-[var(--heading-desktop-h1-letter-spacing)] leading-[var(--heading-desktop-h1-line-height)] [font-style:var(--heading-desktop-h1-font-style)]">
              Transformamos datos en decisiones
            </h1>

            <p className="text-white text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] self-stretch font-text-medium-normal tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
              Data SC is a leading consultancy firm specializing in data-driven
              solutions. We provide services in data analytics, business
              intelligence, and strategy development to help organizations make
              informed decisions. Our team of experts works closely with clients
              to unlock the potential of their data, driving growth and
              innovation.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Button className="px-6 py-2.5 bg-white rounded-[100px]">
              <span className="font-text-regular-medium text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Conocenos
              </span>
            </Button>

            <Button
              variant="outline"
              className="px-6 py-2.5 bg-[#ffffff1a] rounded-[100px] border-transparent"
            >
              <span className="font-text-regular-medium text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Button
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full items-start gap-20 px-16 py-28 flex flex-col bg-white">
        <div className="flex items-center gap-20 self-stretch w-full">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6 self-stretch w-full">
              <h3 className="self-stretch text-[length:var(--heading-desktop-h3-font-size)] tracking-[var(--heading-desktop-h3-letter-spacing)] leading-[var(--heading-desktop-h3-line-height)] font-heading-desktop-h3 text-[#08030d] [font-style:var(--heading-desktop-h3-font-style)]">
                Elevate Your Experience
              </h3>

              <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
                Data SC offers tailored data solutions that empower businesses
                to harness their full potential.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 px-0 py-2 self-stretch w-full">
              <div className="flex items-center gap-4 self-stretch w-full">
                <img
                  className="w-4 h-4"
                  alt="Icon relume"
                  src="public/icon---relume.svg"
                />

                <p className="flex-1 font-text-regular-normal text-[#08030d] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  Data SC stands out with its exceptional ability to provide
                  tailored data solutions that cater specifically to the
                  individual needs of each client, ensuring maximum impact and
                  effectiveness.
                </p>
              </div>

              <div className="flex items-center gap-4 self-stretch w-full">
                <img
                  className="w-4 h-4"
                  alt="Icon relume"
                  src="public/icon---relume.svg"
                />

                <p className="flex-1 font-text-regular-normal text-[#08030d] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  Our analytic strategies transform complex data into actionable
                  insight
                </p>
              </div>

              <div className="flex items-center gap-4 self-stretch w-full">
                <img
                  className="w-4 h-4"
                  alt="Icon relume"
                  src="public/icon---relume.svg"
                />

                <p className="flex-1 font-text-regular-normal text-[#08030d] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  Seamless integration and personalized support
                </p>
              </div>
            </div>
          </div>

          <img
            className="flex-1 h-[640px] object-cover"
            alt="Placeholder image"
            src="public/placeholder-image-9.png"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full items-center gap-20 px-16 py-28 flex flex-col bg-white">
        <h3 className="w-[768px] text-[length:var(--heading-desktop-h3-font-size)] text-center tracking-[var(--heading-desktop-h3-letter-spacing)] leading-[var(--heading-desktop-h3-line-height)] font-heading-desktop-h3 text-[#08030d] [font-style:var(--heading-desktop-h3-font-style)]">
          Key Features
        </h3>

        <div className="flex flex-col items-start gap-16 self-stretch w-full">
          <div className="flex items-start justify-center gap-12 self-stretch w-full">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex-1 bg-transparent border-none shadow-none"
              >
                <CardContent className="flex flex-col items-center gap-8 p-0">
                  <div className="flex flex-col items-center gap-6 self-stretch w-full">
                    <img
                      className="w-12 h-12"
                      alt="Icon relume"
                      src="public/icon---relume.svg"
                    />

                    <div className="flex flex-col items-start gap-6 self-stretch w-full">
                      <h5 className="self-stretch text-[length:var(--heading-desktop-h5-font-size)] text-center tracking-[var(--heading-desktop-h5-letter-spacing)] leading-[var(--heading-desktop-h5-line-height)] font-heading-desktop-h5 text-[#08030d] [font-style:var(--heading-desktop-h5-font-style)]">
                        {feature.title}
                      </h5>

                      <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-2 self-stretch w-full">
                    <Button
                      variant="link"
                      className="rounded-[100px] overflow-hidden p-0"
                    >
                      <span className="font-text-regular-medium text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
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

      {/* Testimonial Section */}
      <section className="flex flex-col w-full items-center gap-20 px-16 py-28 bg-[#f5ebfe]">
        <div className="flex flex-col w-[768px] items-center gap-8">
          <img
            className="w-[120px] h-12"
            alt="Placeholder logo"
            src="public/placeholder-logo.svg"
          />

          <blockquote className="text-[length:var(--heading-desktop-h5-font-size)] tracking-[var(--heading-desktop-h5-letter-spacing)] leading-[var(--heading-desktop-h5-line-height)] self-stretch font-heading-desktop-h5 text-[#08030d] text-center [font-style:var(--heading-desktop-h5-font-style)]">
            &#34;We are truly impressed with the results we achieved! The
            team&#39;s expertise made a significant difference in our project.
            They were responsive, professional, and dedicated to exceeding our
            expectations. It was a fantastic collaboration that led us to
            success!&#34;
          </blockquote>

          <div className="flex flex-col w-[300px] items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="public/avatar-image-1.png" alt="Avatar" />
              <AvatarFallback>NS</AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-start self-stretch w-full">
              <p className="font-text-regular-semi-bold text-[length:var(--text-regular-semi-bold-font-size)] text-center leading-[var(--text-regular-semi-bold-line-height)] self-stretch text-[#08030d] tracking-[var(--text-regular-semi-bold-letter-spacing)] [font-style:var(--text-regular-semi-bold-font-style)]">
                Name Surname
              </p>

              <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                Position, Company name
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full items-start gap-20 px-16 py-28 flex flex-col bg-white">
        <div className="flex items-center gap-20 self-stretch w-full">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6 self-stretch w-full">
              <img
                className="w-20 h-20"
                alt="Icon relume"
                src="public/icon---relume-10.svg"
              />

              <div className="flex flex-col items-start gap-6 self-stretch w-full">
                <h2 className="self-stretch text-[length:var(--heading-desktop-h2-font-size)] tracking-[var(--heading-desktop-h2-letter-spacing)] leading-[var(--heading-desktop-h2-line-height)] font-heading-desktop-h2 text-[#08030d] [font-style:var(--heading-desktop-h2-font-style)]">
                  Our benefits
                </h2>

                <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
                  Our expert team provides tailored solutions that optimize
                  performance and efficiency. Clients gain insights through
                  data-driven strategies, leading to informed decision-making.
                  Additionally, we prioritize innovative approaches that enhance
                  productivity and streamline operations, ensuring organizations
                  can adapt to market changes swiftly. With our support,
                  businesses can achieve sustainable growth and a competitive
                  edge.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                className="px-6 py-2.5 bg-[#08030d0d] rounded-[100px] border-transparent"
              >
                <span className="font-text-regular-medium text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  Button
                </span>
              </Button>

              <Button
                variant="link"
                className="rounded-[100px] overflow-hidden p-0"
              >
                <span className="font-text-regular-medium text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  Button
                </span>
                <ChevronRightIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <img
            className="flex-1 h-[640px] object-cover"
            alt="Placeholder image"
            src="public/placeholder-image-10.png"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col w-full items-start gap-20 px-16 py-28 bg-[#f2f2f2]">
        <div className="flex items-center gap-8 self-stretch w-full">
          <div className="flex flex-col items-start gap-6 flex-1">
            <div className="flex flex-col w-[768px] items-start gap-6">
              <h3 className="self-stretch text-[length:var(--heading-desktop-h3-font-size)] tracking-[var(--heading-desktop-h3-letter-spacing)] leading-[var(--heading-desktop-h3-line-height)] font-heading-desktop-h3 text-[#08030d] [font-style:var(--heading-desktop-h3-font-style)]">
                Medium length heading goes here
              </h3>

              <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
                Ready to transform your ideas? Contact us today for a
                consultation!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Button className="px-6 py-2.5 bg-[#a33cfa] rounded-[100px]">
              <span className="font-text-regular-medium text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Button
              </span>
            </Button>

            <Button
              variant="outline"
              className="px-6 py-2.5 bg-[#08030d0d] rounded-[100px] border-transparent"
            >
              <span className="font-text-regular-medium text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Button
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex flex-col w-full items-center gap-20 px-16 py-28 bg-[#f2f2f2]">
        <div className="w-[768px] flex flex-col items-center gap-4">
          <div className="flex items-center self-stretch">
            <span className="font-heading-desktop-tagline text-[#08030d] text-[length:var(--heading-desktop-tagline-font-size)] text-center tracking-[var(--heading-desktop-tagline-letter-spacing)] leading-[var(--heading-desktop-tagline-line-height)] [font-style:var(--heading-desktop-tagline-font-style)]">
              Tagline
            </span>
          </div>

          <div className="flex flex-col items-center gap-6 self-stretch w-full">
            <h2 className="self-stretch text-[length:var(--heading-desktop-h2-font-size)] text-center tracking-[var(--heading-desktop-h2-letter-spacing)] leading-[var(--heading-desktop-h2-line-height)] font-heading-desktop-h2 text-[#08030d] [font-style:var(--heading-desktop-h2-font-style)]">
              Our team
            </h2>

            <p className="text-[#08030d] text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] self-stretch font-text-medium-normal tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
              We are excited to introduce our key team members, each bringing
              unique expertise to our project.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-16 self-stretch w-full">
          {/* First row of team members */}
          <div className="flex items-start gap-12 self-stretch w-full">
            {teamMembers.slice(0, 3).map((member, index) => (
              <Card
                key={index}
                className="flex-1 bg-transparent border-none shadow-none"
              >
                <CardContent className="flex flex-col items-center gap-6 p-0">
                  <img
                    className="w-20 h-20 object-cover"
                    alt="Placeholder image"
                    src={member.image}
                  />

                  <div className="flex flex-col items-center gap-4 self-stretch w-full">
                    <div className="flex flex-col items-center self-stretch w-full">
                      <h4 className="self-stretch font-text-large-semi-bold text-[#08030d] text-[length:var(--text-large-semi-bold-font-size)] text-center tracking-[var(--text-large-semi-bold-letter-spacing)] leading-[var(--text-large-semi-bold-line-height)] [font-style:var(--text-large-semi-bold-font-style)]">
                        Full name
                      </h4>

                      <p className="self-stretch font-text-medium-normal text-[#08030d] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                        Job title
                      </p>
                    </div>

                    <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <img
                      className="w-6 h-6"
                      alt="Icon linkedin"
                      src="public/icon---linkedin.svg"
                    />
                    <img
                      className="w-6 h-6"
                      alt="Icon x"
                      src="public/icon---x.svg"
                    />
                    <img
                      className="w-6 h-6"
                      alt="Icon dribble"
                      src="public/icon---dribble.svg"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second row of team members */}
          <div className="flex items-start gap-12 self-stretch w-full">
            {teamMembers.slice(3, 6).map((member, index) => (
              <Card
                key={index}
                className="flex-1 bg-transparent border-none shadow-none"
              >
                <CardContent className="flex flex-col items-center gap-6 p-0">
                  <img
                    className="w-20 h-20 object-cover"
                    alt="Placeholder image"
                    src={member.image}
                  />

                  <div className="flex flex-col items-center gap-4 self-stretch w-full">
                    <div className="flex flex-col items-center self-stretch w-full">
                      <h4 className="self-stretch font-text-large-semi-bold text-[#08030d] text-[length:var(--text-large-semi-bold-font-size)] text-center tracking-[var(--text-large-semi-bold-letter-spacing)] leading-[var(--text-large-semi-bold-line-height)] [font-style:var(--text-large-semi-bold-font-style)]">
                        Full name
                      </h4>

                      <p className="self-stretch font-text-medium-normal text-[#08030d] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                        Job title
                      </p>
                    </div>

                    <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <img
                      className="w-6 h-6"
                      alt="Icon linkedin"
                      src="public/icon---linkedin.svg"
                    />
                    <img
                      className="w-6 h-6"
                      alt="Icon x"
                      src="public/icon---x.svg"
                    />
                    <img
                      className="w-6 h-6"
                      alt="Icon dribble"
                      src="public/icon---dribble.svg"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col w-[768px] items-center gap-4">
            <h4 className="self-stretch text-[length:var(--heading-desktop-h4-font-size)] text-center tracking-[var(--heading-desktop-h4-letter-spacing)] leading-[var(--heading-desktop-h4-line-height)] font-heading-desktop-h4 text-[#08030d] [font-style:var(--heading-desktop-h4-font-style)]">
              We&apos;re hiring!
            </h4>

            <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col w-[155px] items-start gap-4">
            <Button
              variant="outline"
              className="px-6 py-2.5 bg-[#08030d0d] rounded-[100px] border-transparent"
            >
              <span className="font-text-regular-medium text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Open positions
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full items-start gap-20 px-16 py-28 flex flex-col bg-white">
        <div className="flex items-center gap-20 self-stretch w-full">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6 self-stretch w-full">
              <h3 className="self-stretch text-[length:var(--heading-desktop-h3-font-size)] tracking-[var(--heading-desktop-h3-letter-spacing)] leading-[var(--heading-desktop-h3-line-height)] font-heading-desktop-h3 text-[#08030d] [font-style:var(--heading-desktop-h3-font-style)]">
                Long heading is what you see here in this feature section
              </h3>

              <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
                In the past year, our company has increased revenue by 25%,
                achieving a record profit margin of 15%. We successfully
                launched 10 innovative products, reaching over 1 million
                customers worldwide. Our commitment to sustainability has
                reduced carbon emissions by 40%, positively impacting the
                environment and our community.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 self-stretch w-full">
              <div className="flex items-start gap-6 px-0 py-2 self-stretch w-full">
                <div className="flex-1 flex flex-col items-start gap-2">
                  <h2 className="text-[length:var(--heading-desktop-h2-font-size)] tracking-[var(--heading-desktop-h2-letter-spacing)] leading-[var(--heading-desktop-h2-line-height)] self-stretch font-heading-desktop-h2 text-[#08030d] [font-style:var(--heading-desktop-h2-font-style)]">
                    25%
                  </h2>

                  <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                    Increased in revenue in the past year
                  </p>
                </div>

                <div className="flex-1 flex flex-col items-start gap-2">
                  <h2 className="text-[length:var(--heading-desktop-h2-font-size)] tracking-[var(--heading-desktop-h2-letter-spacing)] leading-[var(--heading-desktop-h2-line-height)] self-stretch font-heading-desktop-h2 text-[#08030d] [font-style:var(--heading-desktop-h2-font-style)]">
                    50%
                  </h2>

                  <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] self-stretch text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <img
            className="flex-1 h-[640px] object-cover"
            alt="Placeholder image"
            src="public/placeholder-image-20.png"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="flex w-full gap-20 px-16 py-20 bg-white flex-col items-center">
        <div className="flex items-center gap-8 self-stretch w-full">
          <div className="flex flex-col items-start gap-6 flex-1">
            <img
              className="w-[84px] h-9"
              alt="Company logo"
              src="public/company-logo.svg"
            />
          </div>

          <div className="flex items-start gap-8">
            {footerLinks.map((link, index) => (
              <span
                key={index}
                className="font-text-small-semi-bold text-[#08030d] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]"
              >
                {link.text}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-end gap-3 flex-1">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className="w-6 h-6"
                alt={icon.alt}
                src={icon.src}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 self-stretch w-full">
          <Separator className="w-full h-px" />

          <div className="flex items-start gap-6">
            <span className="font-text-small-normal text-[#08030d] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
              © 2024 Data CS. All rights reserved.
            </span>

            <a
              href="#"
              className="font-text-small-link text-[#08030d] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="font-text-small-link text-[#08030d] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)]"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="font-text-small-link text-[#08030d] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)]"
            >
              Cookies Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
