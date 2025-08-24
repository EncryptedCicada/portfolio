import { Image } from "@heroui/image";
import { Card, CardBody } from "@heroui/card";
import { subtitle } from "@/components/primitives";
import Typewriter from "@/components/Typewriter";

const description = "I'm a tinkerer passionate about giving new life to old technology. \
I've worked on kernel development for Android devices and continue to explore microcontrollers, SBCs, and other unusual hardware. \
My journey blends my hobby of hands-on experimentation with my goal of becoming a software engineer specializing in AI.";

export default function LandingCard() {
  return (
    <Card
      isBlurred
      isHoverable
      className="relative w-full max-w-lg border-none bg-background/60 dark:bg-default-100/50"
      shadow="sm"
    >
      <CardBody className="flex flex-col p-6 lg:p-10">
        {/* Mobile: Image at top, Desktop: Projects showcase at top */}
        <div className="flex justify-center mb-6">
          <Image
            alt="Profile image"
            height="100%"
            className="flex object-cover w-64 h-48"
            shadow="md"
            src="https://heroui.com/images/album-cover.png"
          />
        </div>

        {/* Desktop: Image and text side by side, Mobile: text only */}
        <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-start">
          
          {/* Text content */}
          <div className="flex-1 lg:pt-2">
            <div className={subtitle({ class: "text-center !w-full !max-w-none" })}>
              <Typewriter text={description} speed={30} startDelay={1000} />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}