import { Tabs, Tab } from "@heroui/tabs";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { link as linkStyles } from "@heroui/theme";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarTabs = () => {
  const pathname = usePathname();

  return (
    <Tabs aria-label="Pages"
      selectedKey={pathname} className="hidden md:flex gap-4 justify-start ml-2"
      variant="underlined"
      color="primary"
      items={siteConfig.navItems}
    >
      {(item) => (
        <Tab
          key={item.href}
          as={NextLink}
          href={item.href}
          title={item.label}
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium",
          )}
          data-active={pathname === item.href}
        />
      )}
    </Tabs>
  );
};

export { NavbarTabs };