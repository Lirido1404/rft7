"use client";
import React, { useState } from "react";
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
import { Badge } from "@/components/ui/badge";

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
  const [showDesc, setShowDesc] = useState(false);

  const returnTag = (tag: string) => {
    switch (tag) {
      case "bmw":
        return (
          <>
            <div className="flex gap-2 items-center p-1">
              {" "}
              <img
                src="/Images/bmwlogo.svg"
                alt="bmwlogo"
                className="h-6 w-6"
              />
            </div>
          </>
        );
        break;
      case "mercedes":
        return (
          <>
            <div className="flex gap-2 items-center p-1">
              {" "}
              <img
                src="/Images/mercedeslogo.svg"
                alt="merceslogo"
                className="h-6 w-6"
              />{" "}
            </div>
          </>
        );
        break;
      case "audi":
        return (
          <>
            <div className="flex gap-2 items-center p-1">
              {" "}
              <img
                src="/Images/audilogo.svg"
                alt="audilogo"
                className="h-6 w-6"
              />{" "}
            </div>
          </>
        );
        break;
    }
  };

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
          } w-[100%] mx-auto mt-6 gap-10 `}
        >
          {res?.items.map((car: any, index: number) => (
            <motion.div
              key={car._id}
              className=""
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
            >
              <Link href={`/EspaceDeVente/${car._id}`}>
                <Card className="hover:shadow-lg ease-in-out duration-150 relative border-2 border-[#C91313] w-full h-80 ">
                  <div className="absolute flex flex-col gap-1 -left-6 top-4">
                    <Badge className="inline-flex items-center bg-[#f4f4f7] border-2 border-white rounded-full px-2 text-black hover:bg-white shadow">
                      <span className="flex gap-1 items-center">
                        {returnTag(car.tag)}
                        <p className="font-bold"> {car.name} </p>
                      </span>
                    </Badge>

                    <Link
                      href={`/MonCompte/Messages/${car.userId}`}
                      className="mt-2"
                    >
                      <Badge className="flex gap-1 items-center bg-[#f4f4f7] border-2 border-[#C91313] rounded-full px-2 text-black hover:bg-[#C91313] hover:text-white shadow">
                        <img
                          src={car.photoProfilProprio  || "/Images/profilsvg1.svg"}
                          className="h-6 w-6 rounded-full"
                          alt=""
                        />
                        {car.nomProprio}
                      </Badge>
                    </Link>

                    <Badge className="inline-flex items-center bg-[#f4f4f7] border-2 border-[#C91313] rounded-full px-2 text-black hover:bg-white shadow">
                      <span className="flex gap-1 items-center">
                        <img
                          src="/Images/coinn.svg"
                          alt=""
                          className="h-6 w-6"
                        />
                        <p className="font-bold">{car.price} €</p>
                      </span>
                    </Badge>

                    <Badge className="inline-flex items-center bg-[#f4f4f7] border-2 border-[#C91313] rounded-full px-2 text-black hover:bg-white shadow">
                      <span className="flex gap-1 items-center">
                        <img
                          src="/Images/roadd.svg"
                          alt=""
                          className="h-6 w-6"
                        />
                        <p className="font-bold">{car.performance} Km</p>
                      </span>
                    </Badge>
                  </div>
                  <img
                    src={car.image}
                    alt=""
                    className="h-full w-full rounded-lg hover:brightness-125 ease-in-out duration-150 object-cover hover:scale-105"
                  />
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        <Link href={"/Offre"} className="flex justify-center mt-8">
            <Button className="py-2 px-8 font-bold text-white" variant="destructive">
              Déposer mon offre
            </Button>
          </Link>
      </div>
    </div>
  );
}

export default CompForFetch1;

{
  /*  <Link href={`/EspaceDeVente/${car._id}`}>
                <Card className="hover:shadow-lg ease-in-out duration-150">
                  <CardHeader className="">
                    <div className="rounded-full">
                      <Image
                        src={car.photoProfilProprio}
                        width={200}
                        height={200}
                        alt="bmw"
                        className=" w-12 h-12 object-cover rounded-full"
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
                    <BadgeCardSpe
                      emission={car.emission}
                      power={car.power}
                      perf={car.performance}
                      colorText="text-black"
                    />
                  </CardFooter>
                </Card>
              </Link> */
}
