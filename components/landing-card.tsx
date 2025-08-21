"use client";
import { Card, CardHeader, CardBody, CardFooter, Image } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";


export function LandingCard() {
  return (
    <div className="mt-8">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-xl"
        shadow="md"
      >
        <CardHeader className="inline-block text-center justify-center pb-0 pt-2 px-4 flex-col items-start">
          <div className="inline-block max-w-xl text-center justify-center gap-2">
            <span className={title()}>Hi, I'm&nbsp;</span>
            <br className="block md:hidden" />
            <span className={title({ color: "violet" })}>Varnit Singh!&nbsp;</span>
            <br />
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
                <div className={subtitle({ class: "mt-4" })}>
                  An OS developer learning AI
                </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}