import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Hi, I'm&nbsp;</span>
        <br className="block md:hidden" />
        <span className={title({ color: "violet" })}>Varnit Singh!&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          An OS developer learning AI
        </div>
      </div>
      
      {/*<div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "flat",
          })}
          href={siteConfig.navItems.find(item => item.label === "Projects")?.href || "/projects"}
        >
          View Projects
        </Link>
        <Link
          className={buttonStyles({ variant: "flat", radius: "full" })}
          href={siteConfig.navItems.find(item => item.label === "Blog")?.href || "/blog"}
        >
          <GithubIcon size={20} />
          Blog
        </Link>
      </div> */}

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
