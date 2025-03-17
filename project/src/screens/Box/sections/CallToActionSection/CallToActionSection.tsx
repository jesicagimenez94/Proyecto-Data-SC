import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full py-28 px-16 bg-white">
      <div className="flex items-center gap-8 w-full">
        <div className="flex flex-col items-start gap-6 flex-1">
          <div className="flex flex-col items-start gap-6 max-w-[768px]">
            <h3 className="text-[44px] leading-[120%] tracking-[-0.44px] font-normal text-[#0d0107] font-heading-desktop-h3">
              Medium length heading goes here
            </h3>

            <p className="text-[18px] leading-[150%] font-normal text-[#0d0107] font-text-medium-normal">
              Ready to transform your ideas? Contact us today for a
              consultation!
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Button className="px-6 py-2.5 rounded-[100px] bg-[#fa0e8d] text-white hover:bg-[#fa0e8d]/90">
            <span className="font-text-regular-medium text-[16px] leading-[150%] font-medium">
              Button
            </span>
          </Button>

          <Button
            variant="outline"
            className="px-6 py-2.5 rounded-[100px] bg-[#0d01070d] border-transparent hover:bg-[#0d01070d]/80"
          >
            <span className="font-text-regular-medium text-[16px] leading-[150%] font-medium text-[#0d0107]">
              Button
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
