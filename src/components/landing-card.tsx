import { Card, CardFooter } from "@heroui/card";
import Typewriter from "@/components/Typewriter";

const description = "I'm a tinkerer passionate about giving new life to old technology. \
I've worked on kernel development for Android devices and continue to explore microcontrollers, SBCs, and other unusual hardware. \
My journey blends my hobby of hands-on experimentation with my goal of becoming a software engineer specializing in AI.";

export default function LandingCard() {
  return (
    <Card
      isHoverable
      isFooterBlurred
      className="landing-card grid place-items-center w-full h-full -m-4 max-lg:max-w-md"
      shadow="sm"
    >
      <div className="card-image col-start-1 row-start-1 z-0 h-full w-full">
        <img
          alt="Profile picture"
          className="h-full w-full"
          src="https://heroui.com/images/album-cover.png"
        />
      </div>
      <CardFooter className="card-footer col-start-1 row-start-1 z-10 w-full h-full backdrop-blur backdrop-saturate-70 
          bg-background/60 dark:bg-background/60 font-mono">
        <Typewriter text={description} speed={35} startDelay={500}/>
      </CardFooter>
    </Card>
  );
}