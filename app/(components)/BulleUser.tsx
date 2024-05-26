"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

function BulleUser({ allUsers,twoCars }: any) {
  const getRandomPosition = (max: number) => {
    return Math.random() * max;
  };

  const getRandomDirection = () => {
    return Math.random() > 0.5 ? 1 : -1;
  };

  const pre1 = allUsers[0]?.nomProprio;
  const pre2 = allUsers[1]?.nomProprio;
  const pre3 = allUsers[2]?.nomProprio;

  const initialX = 50; // Point de départ commun (au centre horizontalement)
  const initialY = 50; // Point de départ commun (au centre verticalement)


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
                className="h-4 w-4"
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
                className="h-4 w-4"
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
                className="h-4 w-4"
              />{" "}
            </div>
          </>
        );
        break;
    }
  };

  return (
    <div className="relative w-[85%] mx-auto bg-[#f4f4f7] rounded-lg mt-8  grid grid-cols-2">
      <div className="p-8">
        <h2 className="text-lg font-bold text-[#2a292f]">
          Venez, discutez, mais aussi achetez et louez !
        </h2>

        <p className="mt-4">
          RFT propose de la vente de véhicule de passionés, en effet, si vous
          souhaitez transmettre votre trésor entre de bonnes mains, vous êtes au
          bon endroit. Faites comme {pre1} {pre2 && `, ${pre2}`}{" "}
          {pre3 && ` ou encore ${pre3}`}{" "}
          {pre2
            ? "qui ont déjà saisi leur chance."
            : "qui a déjà saisi sa chance."}
          Vous pouvez même aller voir leur offre en cliquant sur{" "}
          <span className="font-bold">ces petites pastilles</span>
        </p>
        <div className="flex items-center gap-2 mt-6">
          <Link href={"/EspaceDeVente"}>
            <Button
              className="py-1 px-4 font-bold text-white"
              variant="destructive"
            >
              Accéder au magasin
            </Button>
          </Link>

          <Link href={"/Offre"}>
            <Button
              className="py-1 px-4 font-bold text-white"
              variant="destructive"
            >
              Déposer mon offre
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-[#2a292f]">Quelques annonces :</p>
        <div className="flex items-center gap-8 mt-1 ">
          
        {twoCars?.map((car: any, index: number) => (
            <motion.div
              key={car._id}
              className=""
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
            >
              <Link href={`/EspaceDeVente/${car._id}`}>
                <Card className="hover:shadow-lg ease-in-out duration-150 relative border-2 border-[#C91313] h-24 w-40">
                  <div className="absolute flex flex-col gap-1 -left-4 top-1">
                    <Badge className="inline-flex items-center bg-[#f4f4f7] border-2 border-white rounded-full px-2 text-black hover:bg-white shadow">
                      <span className="flex gap-1 items-center">
                        {returnTag(car.tag)}
                        <p className="font-bold text-[9px] "> {car.name} </p>
                      </span>
                    </Badge>

                    
                  </div>
                  <img
                    src={car.image}
                    alt=""
                    className="h-full w-full rounded-lg ease-in-out duration-150 object-cover hover:scale-105"
                  />
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-full w-full flex items-start justify-end relative">
        <img src="/Images/audiiwet.png" className="h-96" alt="" />
      </div>
      <div className="absolute w-8 rounded-lg right-0 top-0 h-full bg-[#C91313] "></div>

      {allUsers?.map((user: any, index: number) => {
        const finalX = getRandomDirection() * getRandomPosition(400); // Position d'arrivée aléatoire sur l'axe X
        const finalY = getRandomDirection() * getRandomPosition(100); // Position d'arrivée aléatoire sur l'axe Y

        return (
          <Link key={index} href={`/MonCompte/Annonces/${user.userId}`} className=" ">
            <motion.div
              
              className="flex text-center justify-center items-center h-12 w-12 xl:h-20 xl:w-20 rounded-full bg-[#f4f4f7] border-[#d4d4d4] border-2 relative "
              style={{
                position: "absolute",
                left: `${initialX}%`,
                top: `${initialY}%`,
                boxShadow:
                  "0 0 5px rgba(201, 19, 19, 0.5), 0 0 10px rgba(201, 19, 19, 0.5), 0 0 15px rgba(201, 19, 19, 0.5), 0 0 20px rgba(201, 19, 19, 0.5)",
              }}
              initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
              whileInView={{
                x: finalX,
                y: finalY,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: index * 0.2,
              }}
            >
              <p className="text-center text-sm">{user.nomProprio}</p>
              <img
                src={user?.photoProfilProprio || "Images/profilsvg1.svg"}
                alt=""
                className="h-8 w-8 rounded-full absolute -top-2 -right-2 border bg-white"
              />
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}

export default BulleUser;
