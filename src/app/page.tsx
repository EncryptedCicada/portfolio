import { ScrollDown } from "@/components/icons";
import Link from "next/link";
import { title } from "@/components/primitives";
import LandingCard from "@/components/landing-card";
import ProjectsShowcase from "@/components/projects-showcase";
import { Button } from "@heroui/button";
import { ModalIcon } from "@/components/icons";
import { Divider } from "@heroui/divider";

export default function Home() {
  return (
    <>
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 sm:py-10 md:py-15 lg:py-20 overflow-hidden">
        <div className="inline-block text-center justify-top md:gap-2 relative z-20 lg:pb-10">
          <span className={title()}>Hi, I'm&nbsp;</span>
          <br className="block md:hidden" />
          <span className={title({ color: "violet" })}>Varnit Singh!&nbsp;</span>
          <br />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center w-full py-10 gap-4 lg:gap-20">
          <LandingCard />
          <Divider 
            orientation="vertical" 
            className="hidden lg:block absolute left-1/2 h-[75%] -translate-x-1/2" 
          />
          <div className="hidden lg:flex">
            <ProjectsShowcase />
          </div>
        </div>
        <div className="flex flex-row flex-wrap align-center justify-center mb-6 gap-6">
          <Button variant="solid" color="primary" className="flex lg:hidden items-center">
            View Projects
          </Button>
          <Button startContent={<ModalIcon />} variant="bordered" color="primary" className="hidden min-sm:flex md:hidden items-center">
            Blog
          </Button>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-[10%] hidden sm:flex w-full justify-center items-center">
          <div className="animate-bounce">
            <Link 
              href="#section2"
              className="text-default-500 hover:text-default-900 transition-colors"
            >
              <ScrollDown />
            </Link>
          </div>
        </div>
      </section>

      <section id="section2" className="relative z-10 h-screen flex flex-col items-center justify-center">
        {/* Content for second section */}
      </section>
    </>
  );
}