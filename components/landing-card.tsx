"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";


export function LandingCard() {
  return (
    <div className="mt-8">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-xl"
        shadow="sm"
      >
        <CardHeader className="inline-block text-center justify-center pb-0 pt-2 px-4 flex-col items-start">
          
        </CardHeader>
        <CardBody>
          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusamus ullam maiores ex cupiditate, inventore repellat velit beatae impedit quos illum ad doloremque nisi similique! Autem, hic similique? Dolor, doloribus.
            </p>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center pt-4">
        </CardFooter>
      </Card>
    </div>
  );
}