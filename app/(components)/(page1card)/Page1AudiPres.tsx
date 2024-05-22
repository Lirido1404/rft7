'use client'
import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";

function Page1AudiPres() {
  return (
    
        <motion.img
            src="/Images/audi/audir8.png"
            alt="r8"
            initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75 }}
          
            className="absolute z-2 floublanc w-80 h-80"
          />
    
  )
}

export default Page1AudiPres