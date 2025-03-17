import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";

export const NavigationBarSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { text: "Link One", hasDropdown: false },
    { text: "Link Two", hasDropdown: false },
    { text: "Link Three", hasDropdown: false },
    { text: "Link Four", hasDropdown: true },
  ];

  return (
    <header className="w-full bg-white">
      <div className="flex h-[72px] items-center justify-between px-16 py-0 w-full">
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
                  {link.hasDropdown ? (
                    <NavigationMenuTrigger className="font-text-regular-normal text-[#0d0107] bg-transparent hover:bg-transparent focus:bg-transparent">
                      {link.text}
                    </NavigationMenuTrigger>
                  ) : (
                    <div className="flex items-start gap-2.5">
                      <div className="font-text-regular-normal text-[#0d0107] cursor-pointer">
                        {link.text}
                      </div>
                    </div>
                  )}
                  {link.hasDropdown && (
                    <NavigationMenuContent>
                      <div className="p-4 w-[200px]">
                        <div className="font-text-regular-normal">
                          Dropdown content
                        </div>
                      </div>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="px-5 py-2 bg-[#0d01070d] rounded-[100px] font-text-regular-medium text-[#0d0107] hover:bg-[#0d01071a]"
            >
              Button
            </Button>

            <Button className="px-5 py-2 rounded-[100px] font-text-regular-medium text-white [background:linear-gradient(0deg,rgba(163,60,250,1)_0%,rgba(163,60,250,1)_100%),linear-gradient(0deg,rgba(250,14,141,1)_0%,rgba(250,14,141,1)_100%)] hover:opacity-90">
              Button
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
