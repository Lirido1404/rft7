"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BadgeCardSpe from "@/app/(components)/BadgeCardSpe";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

function AnimInset({ response }: any) {
  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  const [affichage, setAffichage] = useState(false);
  const [voirPlus, setVoirPlus] = useState(false);

  useEffect(() => {
    let timeoutId: any;

    if (affichage) {
      timeoutId = setTimeout(() => {
        setAffichage(false);
      }, 5000);
    }

    return () => clearTimeout(timeoutId);
  }, [affichage]);
  return (
    <div
      className={`absolute inset-0 flex flex-col  p-6 text-left bg-black bg-opacity-80 transition-opacity duration-300 ${
        affichage ? "opacity-0" : "opacity-100"
      } `}
    >
      <CardTitle>{response.name}</CardTitle>
      <CardDescription>{response.datesortie}</CardDescription>
      <div className="mt-4">
        {!voirPlus && (
          <>
            <p className="text-justify">
              {truncateDescription(response.description, 300)}{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={(e) => {
                  setVoirPlus(true);
                }}
              >
                Voir plus
              </span>{" "}
            </p>
          </>
        )}
        {voirPlus && (
          <>
            <p className="text-justify">
              {" "}
              {response.description}{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={(e) => {
                  setVoirPlus(false);
                }}
              >
                Voir moins
              </span>{" "}
            </p>
          </>
        )}
      </div>
      {!voirPlus && (
        <>
          <AnimatePresence>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BadgeCardSpe
                emission={response.emission}
                power={response.power}
                perf={response.performance}
                colorText="text-white"
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                setAffichage(!affichage);
              }}
              className="px-4 py-1 bg-[#1A73E8]  text-white rounded-[6px] mt-4 w-48 flex justify-center"
            >
              <span className="flex gap-1"> <img src="/Images/eyee.svg" className="h-6 w-6" alt="" /> <p>Voir Image (5s)</p></span>
            </motion.button>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default AnimInset;
