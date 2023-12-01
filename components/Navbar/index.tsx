'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarItem, Button, NavbarMenuItem, Avatar } from "@nextui-org/react";
import { AcmeLogo } from "../../assets/icons/AcmeLogo";
import { ThemeSwitchComponent } from "../ThemeSwitchButton";
import { UserIcon } from "@/assets/icons/UserIcon";
import { menuItems } from "@/utils/menuItems";

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-base dark:bg-darkbase dark:border-b-1 dark:border-text col-span-12 md:px-8"
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="hidden sm:block font-bold text-inherit">Bioanimal</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem>
          <ThemeSwitchComponent />
        </NavbarItem>
        <NavbarItem>
          <Avatar name="Felix" />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="dark:bg-neutral dark:bg-opacity-70">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Button
              className='bg-transparent hover:bg-neutral hover:text-base duration-250'
              startContent={<item.icon />}
            >
              {item.name}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
