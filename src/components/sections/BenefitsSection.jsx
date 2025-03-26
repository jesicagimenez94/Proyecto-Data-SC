//////////////////////////////////////////////////////////
// Importaciones
import { ChevronRightIcon } from "lucide-react";
import Button from "../../components/ui/button";

//////////////////////////////////////////////////////////
// Componente BenefitsSection
const BenefitsSection = () => {
  return (
    <>
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
            className="flex-1 h-[540px] object-cover rounded-[40px]"
            alt="Placeholder image"
            src="public/placeholder-image-10.png"
          />
        </div>
      </section>
    </>
  )
}

export default BenefitsSection
