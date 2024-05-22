"use client";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BadgeCardSpe from "@/app/(components)/BadgeCardSpe";
import { motion } from "framer-motion";

const truncateDescription = (description: string, maxLength: number) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "...";
  }
  return description;
};

function PartieScrollArea({ randomCars }: any) {
  return (
    <ScrollArea className="whitespace-nowrap rounded-md border shadow hover:shadow-lg">
      <motion.div
        className="flex w-max space-x-8 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {randomCars.map((car: any, index: number) => (
          <motion.div
            key={car._id}
            className="cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }} // Adjust delay as needed
          >
            <Card className="hover:shadow-lg ease-in-out duration-150 w-[450px]">
              <CardHeader>
                <div className="rounded-full">
                  <Image
                    src={car.image}
                    width={200}
                    height={200}
                    alt="bmw"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>
                <div>
                  <CardTitle>{car.name}</CardTitle>
                  <CardDescription>{car.datesortie}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{truncateDescription(car.description, 40)}</p>
              </CardContent>
              <CardFooter className="flex flex-col justify-start items-start gap-2">
                <BadgeCardSpe
                  emission={car.emission}
                  power={car.power}
                  perf={car.performance}
                  colorText="text-black"
                />{" "}
                <Link href={`/EspaceDeVente/${car._id}`}>
                  <Button variant="destructive" className="text-white">
                    View Car
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default PartieScrollArea;
