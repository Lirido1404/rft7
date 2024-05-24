"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function BulleUser({ allUsers }: any) {
  const getRandomPosition = (max: number) => {
    return Math.random() * max;
  };

  const getRandomDirection = () => {
    return Math.random() > 0.5 ? 1 : -1;
  };

  return (
    <div className="relative w-[85%] mx-auto bg-[#f4f4f7] rounded-lg mt-8 h-96 grid grid-cols-2">
      <div className="p-8">
        <h2 className="text-lg font-bold text-[#2a292f]">
          Venez, discutez, mais aussi achetez et louer !
        </h2>

        <p className="mt-4">
          RFT propose de la vente de véhicule de passionés, en effet, si vous
          souhaitez transmettre votre trésor entre de bonnes mains, vous êtes au
          bon endroit. Faites comme {allUsers[0].nomProprio},{" "}
          {allUsers[1].nomProprio} ou encore {allUsers[2].nomProprio} !
        </p>
      </div>
      <div className="h-full w-full flex items-center relative">
        <img src="/Images/mcevo22inv.png" className="h-72" alt="" />
      </div>
      <div className="absolute w-8 rounded-lg right-0 top-0 h-full bg-[#C91313] "></div>

      {allUsers?.map((user: any, index: number) => (
        <Link key={index} href={`/MonCompte/Messages/${user.userId}`}>
          <motion.div
            className="flex text-center justify-center items-center h-12 w-12 xl:h-20 xl:w-20 rounded-full bg-[#f4f4f7] border-[#d4d4d4] border-2"
            style={{
              position: "absolute",
              left: `${getRandomPosition(100)}%`,
              top: `${getRandomPosition(250)}px`,
              boxShadow:
                "0 0 10px rgba(201, 19, 19, 0.5), 0 0 20px rgba(201, 19, 19, 0.5), 0 0 30px rgba(201, 19, 19, 0.5), 0 0 40px rgba(201, 19, 19, 0.5)",
            }}
            initial={{ scale: 0, opacity: 0, rotate: getRandomPosition(360) }}
            animate={{
              y: [0, getRandomDirection() * getRandomPosition(50), 0], // Amplitude de mouvement aléatoire
              x: [0, getRandomDirection() * getRandomPosition(50), 0], // Amplitude de mouvement aléatoire
              opacity: [0.5, 1, 0.5],
              scale: [0.8, 1, 0.8],
              rotate: [
                getRandomPosition(360),
                getRandomPosition(360),
                getRandomPosition(360),
              ],
            }}
            transition={{
              duration: 3 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.2,
            }}
          >
            <p className="text-center text-sm">{user.nomProprio}</p>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

export default BulleUser;
