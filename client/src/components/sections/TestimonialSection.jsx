//////////////////////////////////////////////////////////
// Importaciones
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar";

//////////////////////////////////////////////////////////
// Componente TestimonialSection
const TestimonialSection = () => {
  return (
    <section className="flex flex-col w-full items-center gap-20 px-16 py-28 bg-[#08030d]">
      <div className="flex flex-col w-full items-center gap-8">
        <img
          className="w-[120px] h-12"
          alt="Placeholder logo"
          src="public/placeholder-logo.svg"
        />

        <blockquote className="text-regular-normal text-sm sm:text-sm md:text-base lg:text-base text-center w-full max-w-3xl text-[#eeeeee] ">
          “We are truly impressed with the results we achieved! The team’s expertise made a significant difference in our project. They were responsive, professional, and dedicated to exceeding our expectations. It was a fantastic collaboration that led us to success!”
        </blockquote>

        <div className="flex flex-col w-[300px] items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="public/avatar-image-1.png" alt="Avatar" />
            <AvatarFallback>NS</AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-start self-stretch w-full">
            <p className="text-regular-semi-bold text-[#f5f5f5] text-center self-stretch">
              Name Surname
            </p>

            <p className="text-regular-normal text-[#c0c0c0] text-center self-stretch">
              Position, Company name
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
