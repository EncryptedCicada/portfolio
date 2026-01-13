import { link } from "fs";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Varnit Singh | EncryptedCicada : Portfolio",
  description: "Varnit Singh's personal portfolio showcasing projects, skills, and contact information.",
  navItems: [
    {
      label: "About",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Resume",
      href: "/resume",
    },
  ],
  links: {
    github: "https://github.com/EncryptedCicada",
    twitter: "https://twitter.com/me_varnit",
    linkedin: "https://www.linkedin.com/in/varnit-singh/",
  },
};
