"use client";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BadgeCardSpe from "../(components)/BadgeCardSpe";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import FiltreVoiture from "./FiltreVoiture";
import { useDateStore } from "@/app/(store)/store";

const truncateDescription = (description: string, maxLength: number) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "...";
  }
  return description;
};

function CompForFetch1({
  res,
  page,
  prevPage,
  nextPage,
  totalPages,
  query,
  pageNumbers,
  offsetNumber,
}: any) {

  return (
    <div className="flex">
      <div className="w-[30%] flex items-center flex-col">
        <FiltreVoiture />
      </div>
      <div className="p-4 w-full">
        <div className=" mt-4 flex justify-between ">
          <div>
            <p className="text-sm italic flex gap-2 items-center">
              <img src="/Images/carssport.svg" className="w-8 h-8" alt="" />
              {res?.itemCount} trouvées
            </p>

            <SearchBar />
          </div>

          <div className="flex items-end">
            <div className="flex items-center justify-end gap-4">
              {page === 1 ? (
                <div className="opacity-60 cursor-default">Previous</div>
              ) : (
                <Link href={`?page=${prevPage}`} className="hover:underline">
                  Previous
                </Link>
              )}
              |
              <div className="flex items-center gap-1">
                {" "}
                {pageNumbers.map((pageNumber: number, index: number) => (
                  <Link
                    key={index}
                    href={`?page=${pageNumber}`}
                    className={`${
                      page === pageNumber
                        ? "bg-[#C91313] font-bold  text-white"
                        : "hover:bg-red-300"
                    } py-2 px-4 rounded-lg ease-in-out duration-200`}
                  >
                    {" "}
                    {pageNumber}{" "}
                  </Link>
                ))}
              </div>
              |
              {page === totalPages ? (
                <div className="opacity-60 cursor-default">Next</div>
              ) : (
                <Link href={`?page=${nextPage}`} className="hover:underline">
                  Next
                </Link>
              )}
            </div>
          </div>
        </div>{" "}
        <div
          className={`grid ${
            query == "" ? "grid-cols-2" : "grid-cols-3"
          } w-[100%] mx-auto mt-6 gap-8 `}
        >
          {res?.items.map((car: any, index: number) => (
            <motion.div
              key={car._id}
              className=""
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
            >
              <Card className="hover:shadow-lg ease-in-out duration-150">
                <CardHeader className="">
                  <div className="rounded-full">
                    <Image
                      src={car.image}
                      width={200}
                      height={200}
                      alt="bmw"
                      className=" w-16 h-16 object-cover rounded-full"
                    />
                  </div>

                  <div>
                    <CardTitle>{car.name}</CardTitle>
                    <CardDescription> {car.datesortie} </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{truncateDescription(car.description, 120)}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={`/EspaceDeVente/${car._id}`}>
                    <Button variant="destructive" className="text-white">
                      View Car
                    </Button>
                  </Link>
                  <BadgeCardSpe
                    emission={car.emission}
                    power={car.power}
                    perf={car.performance}
                    colorText="text-black"
                  />
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompForFetch1;
