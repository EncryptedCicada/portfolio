import { title } from "@/components/primitives";
import Highlights from "@/components/highlights";
import Typewriter from "@/components/Typewriter";
import { SkillsAndTechnologies } from "@/components/skills";
import { ScrollDown } from "@/components/icons"
// import { Toc } from "@/components/toc";

const description = "I'm a developer passionate about low(er) level programming, have worked on linux kernel development \
and through my hobby of hands-on experimentation, I'm currently exploring embedded systems and \
firmware development.";

// const headings = [
//   { level: 2, text: "About", id: "section1" },
//   { level: 2, text: "Showcase", id: "section2" },
// ];

export default function About() {
  return (
    <div className="flex gap-8">
      <div className="flex-1 flex flex-col items-center justify-start">
        <section
          id="section1"
          data-toc="About"
          className="relative w-full min-h-dvh pt-20 flex flex-col items-center justify-start overflow-hidden"
        >
          <div className="w-full flex flex-col items-center px-4 sm:py-10 md:py-15 lg:py-20">
            <div className="inline-block text-center justify-top md:gap-2 relative lg:pb-10">
              <span className={title({ size: "lg" })}>Hi, I'm&nbsp;</span>
              <br className="block md:hidden" />
              <span className={title({ size: "lg", color: "violet" })}>Varnit!&nbsp;</span>
              <br />
            </div>

            <div className="relative flex items-center text-center justify-items-center max-w-7xl py-10 gap-4 lg:gap-20 text-2xl">
              <Typewriter text={description} speed={25} startDelay={500} />
            </div>

            <div className="relative flex items-center text-center justify-items-center max-w-7xl py-20 gap-4 lg:gap-20">
              <h1 className={title({ size: "sm", color: "blue" })}>Skills & Technologies</h1>
            </div>
            <SkillsAndTechnologies />
          </div>

          <div className="absolute bottom-20 animate-bounce hidden md:block">
            <ScrollDown className="w-8 h-8 text-default-500" />
          </div>
        </section>

        <section
          id="section2"
          data-toc="Showcase"
          className="relative w-full min-h- flex flex-col items-center justify-top px-4 pb-50"
        >
          <div className="relative items-center text-center justify-items-center max-w-7xl pb-10 gap-4 lg:gap-16">
            <h1 className={title({ size: "sm", color: "blue" })}>Highlights</h1>
          </div>
          <Highlights />
        </section>
      </div>

      {/* <div className="hidden xl:block">
        <Toc headings={headings} />
      </div> */}
    </div>
  );
}