"use client";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";

import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { NavbarTabs } from "@/components/navbar-tabs";

export const HeroUINavbar = () => {
  const pathname = usePathname();

  return (
    <Navbar
      maxWidth="2xl"
      position="sticky"
      isBordered={true}
      shouldHideOnScroll={false}
      isBlurred={false}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <NavbarTabs />
      </NavbarContent>

      <NavbarContent className="hidden md:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* <NavbarItem className="sm:flex gap-2">
          <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
        </NavbarItem> */}
        <ThemeSwitch />
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        {/* <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
        </NavbarItem> */}
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  pathname === item.href
                    ? "primary"
                    : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};