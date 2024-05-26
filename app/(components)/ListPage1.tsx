'use client'
import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { imgSrc: "/Images/Calendrierr.svg", text: "Toujours à l'actu" },
  { imgSrc: "/Images/carrs.svg", text: "Des voitures inédites" },
  { imgSrc: "/Images/commu2.svg", text: "Une communauté de passionnés" },
  { imgSrc: "/Images/handd.svg", text: "Des échanges enrichissants" },
  { imgSrc: "/Images/racee.svg", text: "Un gout pour la course et l'amusement" }
];

const listVariants = {
  visible: (i: number)  => ({
    opacity: 1,
    transition: {
      delay: i * 0.5,
    },
  }),
  hidden: { opacity: 0 },
};

function ListPage1() {
  return (
    <ul className="flex flex-col gap-3 mt-10">
      {items.map((item, index) => (
        <motion.li
          className="flex gap-6 items-center"
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          <div className="flex justify-center items-center rounded-full bg-[#f4f4f7] p-2 border-2 border-red-500">
            <img src={item.imgSrc} className="h-6 w-6 lg:h-8 lg:w-8" alt="" />
          </div>
          <p className="text-lg text-[#2a292f]">{item.text}</p>
        </motion.li>
      ))}
    </ul>
  )
}

export default ListPage1
