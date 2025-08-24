import { Image } from "@heroui/image";
import { Card, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";

// Mock project data - you can replace this with real project data
// TODO: Limit to 4 Projects
const projects = [
  {
    id: 1,
    title: "Kernel Development",
    image: "https://heroui.com/images/hero-card.jpeg",
    description: "Android kernel development for vintage devices"
  },
  {
    id: 2,
    title: "Hardware Tinkering",
    image: "https://heroui.com/images/hero-card.jpeg", 
    description: "Microcontroller and SBC projects"
  },
  {
    id: 3,
    title: "AI Experiments",
    image: "https://heroui.com/images/hero-card.jpeg",
    description: "Machine learning and AI development"
  },
  {
    id: 4,
    title: "OS Development",
    image: "https://heroui.com/images/hero-card.jpeg",
    description: "Operating system development and customization"
  },
];

export default function ProjectsShowcase() {
  return (
    <div className="hidden lg:flex flex-col justify-center h-full">
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            isBlurred
            isFooterBlurred
            className="flex-1 min-w-[40%] max-w-[50%] border-none"
            shadow="sm"
          >
            <Image
              alt={project.title}
              className="object-cover w-full h-full"
              src={project.image}
              radius="sm"
            />
            {/* <div className="text-center">
              <p className="text-xs font-medium text-default-700 truncate">
                
              </p>
            </div> */}
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">{project.title}</p>
              <Button
                className="text-tiny text-white bg-black/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
