//////////////////////////////////////////////////////////
// Importaciones
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

//////////////////////////////////////////////////////////
// Componente TestimonialSection
const TestimonialSection = () => {
  return (
    <>
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
    </>
  );
};

export default TestimonialSection;
