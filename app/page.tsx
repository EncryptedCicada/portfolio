import { title, subtitle } from "@/components/primitives";
import { LandingCard } from "@/components/landing-card";

export default function Home() {
  return (
    <>
      <section
        className="relative z-10 h-screen flex flex-col items-center justify-start pt-32 md:pt-40 gap-4 py-8 md:py-10 overflow-hidden"
      >
        <div className="inline-block text-center justify-center gap-2 relative z-20">
          <span className={title()}>Hi, I'm&nbsp;</span>
          <br className="block md:hidden" />
          <span className={title({ color: "violet" })}>Varnit Singh!&nbsp;</span>
          <br />
        </div>
        <div className="flex flex-col gap-6 md:gap-4 items-center justify-center relative z-20">
          <div className="relative col-span-6 md:col-span-4">
            <div className={subtitle({ class: "mt-4" })}>
              An OS developer learning AI
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background relative h-screen z-40 flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <LandingCard />
      </section>
    </>
  );
}