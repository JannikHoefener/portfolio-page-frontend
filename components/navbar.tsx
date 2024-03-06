import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";

import { link as linkStyles } from "@nextui-org/theme";

import { ThemeSwitch } from "@/config/theme-switch";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import NextLink from "next/link";
import { BsGithub } from "react-icons/bs";
import { DynLink } from "./basicComponents/linkIcon";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">JANNIK HOEFENER</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        {/* <ul className="hidden lg:flex gap-4 justify-start ml-2"> */}
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
        {/* </ul> */}
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <DynLink props={{
            __typename: undefined,
            website: "GitHub",
            title: "Github",
            url: "https://github.com/JannikHoefener",
            description: "Github",
            type: "linkIcon"
            
          }} />
          <Link
            isExternal
            href={siteConfig.links.github}
            aria-label="Github"
          ></Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <BsGithub size={22} className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};
