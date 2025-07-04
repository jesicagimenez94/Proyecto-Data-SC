//////////////////////////////////////////////////////////
// Importaciones
import Button from "../../components/ui/button";

//////////////////////////////////////////////////////////
// Componente CTASection
const CTASection = () => {
  return (
    <>
      <section className="flex flex-col w-full items-start gap-20 px-16 py-28 bg-zinc-800">
        <div className="flex items-center gap-8 self-stretch w-full">
          <div className="flex flex-col items-start gap-6 flex-1">
            <div className="flex flex-col w-[768px] items-start gap-6">
              <h3 className="self-stretch text-[length:var(--heading-desktop-h3-font-size)] tracking-[var(--heading-desktop-h3-letter-spacing)] leading-[var(--heading-desktop-h3-line-height)] font-heading-desktop-h3 text-[#f2f2f2] [font-style:var(--heading-desktop-h3-font-style)]">
                Medium length heading goes here
              </h3>

              <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] self-stretch text-[#f2f2f2] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
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
              className="px-6 py-2.5 bg-[#08030d] rounded-[100px] border-transparent"
            >
              <span className="font-text-regular-medium text-[#f2f2f2] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Button
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
