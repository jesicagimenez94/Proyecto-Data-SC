import {
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  XIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Avatar } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const MobileViewSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { title: "Link One" },
    { title: "Link Two" },
    { title: "Link Three" },
    {
      title: "Link Four",
      hasSubmenu: true,
      submenu: [
        {
          groupTitle: "Page group one",
          pages: [
            { title: "Page One" },
            { title: "Page Two" },
            { title: "Page Three" },
            { title: "Page Four" },
          ],
        },
        {
          groupTitle: "Page group two",
          pages: [
            { title: "Page Five" },
            { title: "Page Six" },
            { title: "Page Seven" },
            { title: "Page Eight" },
          ],
        },
      ],
    },
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
    {
      name: "Full name",
      position: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-11.png",
    },
    {
      name: "Full name",
      position: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-12.png",
    },
    {
      name: "Full name",
      position: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-13.png",
    },
    {
      name: "Full name",
      position: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-14.png",
    },
    {
      name: "Full name",
      position: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-15.png",
    },
    {
      name: "Full name",
      position: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-16.png",
    },
    {
      name: "Full name",
      position: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-19.png",
    },
    {
      name: "Full name",
      position: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-19.png",
    },
    {
      name: "Full name",
      position: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image: "public/placeholder-image-19.png",
    },
  ];

  // Footer links data
  const footerLinks = [
    "Link One",
    "Link Two",
    "Link Three",
    "Link Four",
    "Link Five",
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Mobile Navigation */}
      <section className="flex flex-col w-[375px] items-center bg-white">
        <header className="flex h-16 items-center justify-between pl-5 pr-3 py-0 w-full">
          <div className="flex items-center gap-6">
            <img
              className="w-[84px] h-9"
              alt="Company logo"
              src="public/company-logo.svg"
            />
          </div>

          <Button variant="ghost" size="icon" className="w-12 h-12">
            <XIcon className="w-6 h-6" />
          </Button>
        </header>

        <nav className="flex flex-col items-center justify-center px-5 py-0 w-full">
          <div className="flex flex-col items-center w-full">
            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                {!link.hasSubmenu ? (
                  <div className="flex items-start gap-2.5 px-0 py-3 w-full">
                    <div className="flex-1 mt-[-1.00px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#08030d] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      {link.title}
                    </div>
                  </div>
                ) : (
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="py-3 px-0 hover:no-underline">
                        <div className="flex-1 text-left font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#08030d] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                          {link.title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-0">
                        <div className="flex-col gap-6 px-0 py-4 bg-white flex items-start w-full">
                          {link.submenu?.map((group, groupIndex) => (
                            <div
                              key={groupIndex}
                              className="flex-col gap-4 flex items-start w-full"
                            >
                              <h3 className="text-[length:var(--text-small-semi-bold-font-size)] leading-[var(--text-small-semi-bold-line-height)] self-stretch mt-[-1.00px] font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#08030d] tracking-[var(--text-small-semi-bold-letter-spacing)] [font-style:var(--text-small-semi-bold-font-style)]">
                                {group.groupTitle}
                              </h3>

                              <div className="flex flex-col items-start gap-2 w-full">
                                {group.pages.map((page, pageIndex) => (
                                  <div
                                    key={pageIndex}
                                    className="h-8 gap-3 px-0 py-1 flex items-start w-full"
                                  >
                                    <img
                                      className="w-6 h-6"
                                      alt="Icon relume"
                                      src="public/icon---relume.svg"
                                    />

                                    <div className="flex flex-col items-start flex-1 grow">
                                      <div className="text-[length:var(--text-regular-semi-bold-font-size)] leading-[var(--text-regular-semi-bold-line-height)] self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[#08030d] tracking-[var(--text-regular-semi-bold-letter-spacing)] [font-style:var(--text-regular-semi-bold-font-style)]">
                                        {page.title}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </React.Fragment>
            ))}
          </div>
        </nav>
      </section>

      {/* Hero Section */}
      <section className="flex flex-col w-[375px] h-[812px] items-start justify-center gap-12 px-5 py-16 [background:linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url(../public/header---5---1.png)_50%_50%_/_cover]">
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-5 w-full">
            <h1 className="self-stretch mt-[-1.00px] font-heading-mobile-h1 font-[number:var(--heading-mobile-h1-font-weight)] text-white text-[length:var(--heading-mobile-h1-font-size)] tracking-[var(--heading-mobile-h1-letter-spacing)] leading-[var(--heading-mobile-h1-line-height)] [font-style:var(--heading-mobile-h1-font-style)]">
              Transformamos datos en decisiones
            </h1>

            <p className="text-white text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
              Data SC is a leading consultancy firm specializing in data-driven
              solutions. We provide services in data analytics, business
              intelligence, and strategy development to help organizations make
              informed decisions. Our team of experts works closely with clients
              to unlock the potential of their data, driving growth and
              innovation.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Button className="px-6 py-2.5 bg-white text-[#08030d] rounded-[100px] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
              Button
            </Button>

            <Button
              variant="outline"
              className="px-6 py-2.5 bg-[#ffffff1a] text-white rounded-[100px] border-transparent font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]"
            >
              Button
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section with Image */}
      <section className="w-[375px] items-start gap-12 px-5 py-16 flex flex-col bg-white">
        <div className="flex-col items-start gap-12 flex w-full">
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              <h2 className="self-stretch text-[length:var(--heading-mobile-h3-font-size)] tracking-[var(--heading-mobile-h3-letter-spacing)] leading-[var(--heading-mobile-h3-line-height)] mt-[-1.00px] font-heading-mobile-h3 font-[number:var(--heading-mobile-h3-font-weight)] text-[#08030d] [font-style:var(--heading-mobile-h3-font-style)]">
                Elevate Your Experience
              </h2>

              <p className="font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] self-stretch font-text-regular-normal text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                Data SC offers tailored data solutions that empower businesses
                to harness their full potential.
              </p>
            </div>

            <div className="flex-col items-start gap-4 px-0 py-2 flex w-full">
              {[
                "Data SC stands out with its exceptional ability to provide tailored data solutions that cater specifically to the individual needs of each client, ensuring maximum impact and effectiveness.",
                "Our analytic strategies transform complex data into actionable insight",
                "Seamless integration and personalized support",
              ].map((item, index) => (
                <div key={index} className="items-center gap-4 flex w-full">
                  <img
                    className="w-4 h-4"
                    alt="Icon relume"
                    src="public/icon---relume.svg"
                  />

                  <p className="flex-1 mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#08030d] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <img
            className="w-full h-[348px] object-cover"
            alt="Placeholder image"
            src="public/placeholder-image-9.png"
          />
        </div>
      </section>

      {/* Key Features Section */}
      <section className="flex flex-col w-[375px] items-center gap-12 px-5 py-16 bg-white">
        <h2 className="self-stretch text-[length:var(--heading-mobile-h3-font-size)] text-center tracking-[var(--heading-mobile-h3-letter-spacing)] leading-[var(--heading-mobile-h3-line-height)] mt-[-1.00px] font-heading-mobile-h3 font-[number:var(--heading-mobile-h3-font-weight)] text-[#08030d] [font-style:var(--heading-mobile-h3-font-style)]">
          Key Features
        </h2>

        <div className="flex flex-col items-center gap-12 w-full">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col items-center gap-6 w-full border-none shadow-none"
            >
              <CardContent className="flex flex-col items-center gap-5 p-0 w-full">
                <img
                  className="w-12 h-12"
                  alt="Icon relume"
                  src="public/icon---relume.svg"
                />

                <div className="items-start gap-5 w-full flex flex-col">
                  <h3 className="self-stretch text-[length:var(--heading-mobile-h5-font-size)] text-center tracking-[var(--heading-mobile-h5-letter-spacing)] leading-[var(--heading-mobile-h5-line-height)] mt-[-1.00px] font-heading-mobile-h5 font-[number:var(--heading-mobile-h5-font-weight)] text-[#08030d] [font-style:var(--heading-mobile-h5-font-style)]">
                    {feature.title}
                  </h3>

                  <p className="font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch font-text-regular-normal text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                    {feature.description}
                  </p>
                </div>
              </CardContent>

              <div className="flex flex-col items-center gap-2 w-full">
                <Button
                  variant="ghost"
                  className="flex items-center justify-center gap-2 rounded-[100px]"
                >
                  <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    Button
                  </span>
                  <ChevronRightIcon className="w-6 h-6" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="flex flex-col w-[375px] items-center gap-12 px-5 py-16 bg-[#f5ebfe]">
        <div className="flex flex-col items-center gap-6 w-full">
          <img
            className="w-[120px] h-12"
            alt="Placeholder logo"
            src="public/placeholder-logo.svg"
          />

          <blockquote className="text-[length:var(--heading-mobile-h5-font-size)] tracking-[var(--heading-mobile-h5-letter-spacing)] leading-[var(--heading-mobile-h5-line-height)] self-stretch font-heading-mobile-h5 font-[number:var(--heading-mobile-h5-font-weight)] text-[#08030d] text-center [font-style:var(--heading-mobile-h5-font-style)]">
            &#34;We are truly impressed with the results we achieved! The
            team&#39;s expertise made a significant difference in our project.
            They were responsive, professional, and dedicated to exceeding our
            expectations. It was a fantastic collaboration that led us to
            success!&#34;
          </blockquote>

          <div className="flex flex-col w-[300px] items-center gap-4">
            <Avatar className="w-16 h-16">
              <img
                className="w-full h-full object-cover"
                alt="Avatar image"
                src="public/avatar-image-1.png"
              />
            </Avatar>

            <div className="flex flex-col items-start w-full">
              <div className="mt-[-1.00px] font-[number:var(--text-regular-semi-bold-font-weight)] text-[length:var(--text-regular-semi-bold-font-size)] text-center leading-[var(--text-regular-semi-bold-line-height)] self-stretch font-text-regular-semi-bold text-[#08030d] tracking-[var(--text-regular-semi-bold-letter-spacing)] [font-style:var(--text-regular-semi-bold-font-style)]">
                Name Surname
              </div>

              <div className="font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch font-text-regular-normal text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                Position, Company name
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-[374px] items-start gap-12 px-5 py-16 flex flex-col bg-white">
        <div className="flex-col items-start gap-12 flex w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="items-start gap-5 w-full flex flex-col">
              <img
                className="w-20 h-20"
                alt="Icon relume"
                src="public/icon---relume-10.svg"
              />

              <div className="flex flex-col items-start gap-5 w-full">
                <h2 className="self-stretch text-[length:var(--heading-mobile-h2-font-size)] tracking-[var(--heading-mobile-h2-letter-spacing)] leading-[var(--heading-mobile-h2-line-height)] mt-[-1.00px] font-heading-mobile-h2 font-[number:var(--heading-mobile-h2-font-weight)] text-[#08030d] [font-style:var(--heading-mobile-h2-font-style)]">
                  Our benefits
                </h2>

                <p className="font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] self-stretch font-text-regular-normal text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
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
                variant="secondary"
                className="px-6 py-2.5 bg-[#08030d0d] rounded-[100px] border-transparent"
              >
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                  Button
                </span>
              </Button>

              <Button
                variant="ghost"
                className="flex items-center justify-center gap-2 rounded-[100px]"
              >
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                  Button
                </span>
                <ChevronRightIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <img
            className="w-full h-[348px] object-cover"
            alt="Placeholder image"
            src="public/placeholder-image-10.png"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col w-[375px] items-start gap-12 px-5 py-16 bg-[#f2f2f2]">
        <div className="flex-col items-start justify-center gap-6 flex w-full">
          <div className="flex flex-col items-start gap-3 w-full">
            <h2 className="self-stretch text-[length:var(--heading-mobile-h3-font-size)] tracking-[var(--heading-mobile-h3-letter-spacing)] leading-[var(--heading-mobile-h3-line-height)] mt-[-1.00px] font-heading-mobile-h3 font-[number:var(--heading-mobile-h3-font-weight)] text-[#08030d] [font-style:var(--heading-mobile-h3-font-style)]">
              Medium length heading goes here
            </h2>

            <p className="font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] self-stretch font-text-regular-normal text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
              Ready to transform your ideas? Contact us today for a
              consultation!
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Button className="px-6 py-2.5 bg-[#a33cfa] text-white rounded-[100px] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
              Button
            </Button>

            <Button
              variant="secondary"
              className="px-6 py-2.5 bg-[#08030d0d] text-[#08030d] rounded-[100px] border-transparent font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]"
            >
              Button
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex flex-col w-[375px] items-center gap-12 px-5 py-16 bg-[#f2f2f2]">
        <div className="items-center gap-3 w-full flex flex-col">
          <div className="inline-flex items-center self-stretch">
            <div className="w-fit mt-[-1.00px] font-heading-desktop-tagline font-[number:var(--heading-desktop-tagline-font-weight)] text-[#08030d] text-[length:var(--heading-desktop-tagline-font-size)] text-center tracking-[var(--heading-desktop-tagline-letter-spacing)] leading-[var(--heading-desktop-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-desktop-tagline-font-style)]">
              Tagline
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 w-full">
            <h2 className="self-stretch text-[length:var(--heading-mobile-h2-font-size)] text-center tracking-[var(--heading-mobile-h2-letter-spacing)] leading-[var(--heading-mobile-h2-line-height)] mt-[-1.00px] font-heading-mobile-h2 font-[number:var(--heading-mobile-h2-font-weight)] text-[#08030d] [font-style:var(--heading-mobile-h2-font-style)]">
              Our team
            </h2>

            <p className="text-[#08030d] text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
              We are excited to introduce our key team members, each bringing
              unique expertise to our project.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12 w-full">
          <div className="flex flex-col items-center gap-12 w-full">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="gap-5 w-full flex flex-col items-center"
              >
                <Avatar className="w-20 h-20">
                  <img
                    className="w-full h-full object-cover"
                    alt="Team member"
                    src={member.image}
                  />
                </Avatar>

                <div className="flex flex-col items-center gap-3 w-full">
                  <div className="flex flex-col items-center w-full">
                    <h3 className="self-stretch mt-[-2.00px] font-text-large-semi-bold font-[number:var(--text-large-semi-bold-font-weight)] text-[#08030d] text-[length:var(--text-large-semi-bold-font-size)] text-[length:var(--text-large-semi-bold-font-size)] text-center tracking-[var(--text-large-semi-bold-letter-spacing)] leading-[var(--text-large-semi-bold-line-height)] [font-style:var(--text-large-semi-bold-font-style)]">
                      {member.name}
                    </h3>

                    <div className="self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#08030d] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      {member.position}
                    </div>
                  </div>

                  <p className="font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch font-text-regular-normal text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                    {member.description}
                  </p>
                </div>

                <div className="flex items-start gap-3.5 pt-1">
                  <LinkedinIcon className="w-6 h-6" />
                  <TwitterIcon className="w-6 h-6" />
                  <img
                    className="w-6 h-6"
                    alt="Icon dribble"
                    src="public/icon---dribble.svg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-3 w-full">
            <h3 className="self-stretch text-[length:var(--heading-mobile-h4-font-size)] text-center tracking-[var(--heading-mobile-h4-letter-spacing)] leading-[var(--heading-mobile-h4-line-height)] mt-[-1.00px] font-heading-mobile-h4 font-[number:var(--heading-mobile-h4-font-weight)] text-[#08030d] [font-style:var(--heading-mobile-h4-font-style)]">
              We&apos;re hiring!
            </h3>

            <p className="font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] text-center leading-[var(--text-regular-normal-line-height)] self-stretch font-text-regular-normal text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col w-[155px] items-start gap-4">
            <Button
              variant="secondary"
              className="px-6 py-2.5 bg-[#08030d0d] rounded-[100px] border-transparent font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#08030d] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]"
            >
              Open positions
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-[375px] items-start gap-12 px-7 py-16 flex flex-col bg-white">
        <div className="flex-col items-start gap-12 flex w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              <h2 className="self-stretch text-[length:var(--heading-mobile-h2-font-size)] tracking-[var(--heading-mobile-h2-letter-spacing)] leading-[var(--heading-mobile-h2-line-height)] mt-[-1.00px] font-heading-mobile-h2 font-[number:var(--heading-mobile-h2-font-weight)] text-[#08030d] [font-style:var(--heading-mobile-h2-font-style)]">
                Long heading is what you see here in this feature section
              </h2>

              <p className="font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] self-stretch font-text-regular-normal text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                In the past year, our company has increased revenue by 25%,
                achieving a record profit margin of 15%. We successfully
                launched 10 innovative products, reaching over 1 million
                customers worldwide. Our commitment to sustainability has
                reduced carbon emissions by 40%, positively impacting the
                environment and our community.
              </p>
            </div>

            <div className="flex-col items-start gap-6 px-0 py-2 flex w-full">
              {[
                {
                  stat: "25%",
                  description: "Increased in revenue in the past year",
                },
                {
                  stat: "50%",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col items-start gap-2"
                >
                  <div className="text-[length:var(--heading-mobile-h2-font-size)] tracking-[var(--heading-mobile-h2-letter-spacing)] leading-[var(--heading-mobile-h2-line-height)] self-stretch mt-[-1.00px] font-heading-mobile-h2 font-[number:var(--heading-mobile-h2-font-weight)] text-[#08030d] [font-style:var(--heading-mobile-h2-font-style)]">
                    {item.stat}
                  </div>

                  <p className="font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] self-stretch font-text-regular-normal text-[#08030d] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <img
            className="w-full h-[348px] object-cover"
            alt="Placeholder image"
            src="public/placeholder-image-20.png"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="flex flex-col w-[375px] items-center gap-12 px-5 py-12 bg-white">
        <div className="flex flex-col items-center gap-12 w-full">
          <div className="items-center w-full flex flex-col gap-6">
            <img
              className="w-[84px] h-9"
              alt="Company logo"
              src="public/company-logo.svg"
            />
          </div>

          <nav className="flex flex-col items-center gap-6 w-full">
            {footerLinks.map((link, index) => (
              <div
                key={index}
                className="self-stretch mt-[-1.00px] font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#08030d] text-[length:var(--text-small-semi-bold-font-size)] text-center tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]"
              >
                {link}
              </div>
            ))}
          </nav>

          <div className="flex items-start justify-center gap-3 w-full">
            <FacebookIcon className="w-6 h-6" />
            <InstagramIcon className="w-6 h-6" />
            <TwitterIcon className="w-6 h-6" />
            <LinkedinIcon className="w-6 h-6" />
            <YoutubeIcon className="w-6 h-6" />
          </div>
        </div>

        <div className="gap-6 pt-0 pb-4 px-0 flex flex-col items-center w-full">
          <Separator className="w-full h-px" />

          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-4 flex-col items-center">
              {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="w-fit font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[#08030d] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>

            <div className="w-fit font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#08030d] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
              © 2024 Relume. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
