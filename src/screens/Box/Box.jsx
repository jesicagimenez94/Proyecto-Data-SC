import React from "react";
import { DesktopViewSection } from "./sections/DesktopViewSection/DesktopViewSection";
import { MobileViewSection } from "./sections/MobileViewSection/MobileViewSection";

export const Box = () => {
  return (
    <main className="w-full">
      {/* Desktop view - hidden on mobile */}
      <div className="hidden md:block">
        <DesktopViewSection />
      </div>
      
      {/* Mobile view - hidden on desktop */}
      <div className="block md:hidden">
        <MobileViewSection />
      </div>
    </main>
  );
};