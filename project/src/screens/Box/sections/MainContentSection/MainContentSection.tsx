import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-20 px-16 py-28 bg-white w-full">
      <div className="flex items-center gap-20 w-full">
        <div className="flex flex-col items-start gap-8 flex-1">
          <div className="flex flex-col items-start gap-6 w-full">
            <img
              className="w-20 h-20"
              alt="Icon relume"
              src="public/icon---relume-3.svg"
            />

            <div className="flex flex-col items-start gap-6 w-full">
              <h2 className="text-[52px] tracking-[-0.52px] leading-[120%] font-heading-desktop-h2 font-normal text-[#0d0107] mt-[-1px]">
                Our benefits
              </h2>

              <p className="font-text-medium-normal text-[18px] leading-[150%] text-[#0d0107] font-normal">
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
              className="rounded-[100px] bg-[#0d01070d] border-transparent text-[#0d0107] font-text-regular-medium text-[16px] font-medium"
            >
              Button
            </Button>

            <Button
              variant="ghost"
              className="rounded-[100px] p-0 text-[#0d0107] font-text-regular-medium text-[16px] font-medium"
            >
              Button
              <ChevronRightIcon className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>

        <Card className="flex-1 border-none">
          <CardContent className="p-0">
            <img
              className="h-[640px] w-full object-cover"
              alt="Placeholder image"
              src="public/placeholder-image-8.png"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
