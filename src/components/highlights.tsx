"use client";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";

// Mock project data - you can replace this with real project data
// TODO: Limit to 4 Projects
const projects = [
  {
    title: "Linux Kernel",
    image: "Tux.png",
    description: "Android kernel development for vintage devices"
  },
  {
    title: "AI",
    image: "ML_CH4.png",
    description: "Machine learning and AI development"
  },
  {
    title: "OS",
    image: "OS_Thumb.png",
    description: "Operating system development and customization"
  },
];

export default function Highlights() {
  return (
    <div className="flex flex-wrap justify-center align-center p-10 gap-10">
      {projects.map((project, index) => (
        <Card
          key={index}
          isPressable
          isHoverable
          shadow="lg"
          className="flex bg-default-100/40 dark:bg-default-100/40"
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-3 align-top border-none">
            <Image
              alt={project.title}
              className="object-cover w-xs"
              radius="lg"
              shadow="none"
              src={project.image}
            />
          </CardBody>
          <CardFooter className="text-medium text-foreground-700 justify-center align-center p-3">
            <b>{project.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
