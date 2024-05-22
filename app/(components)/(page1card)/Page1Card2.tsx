"use client";
import React from "react";
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
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

function Page1Card2() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75 }}
      >
        <Card className="hover:shadow-lg ease-in-out duration-150 bg-black">
          <CardHeader className="">
            <div className="rounded-full">
              <Image
                src="https://img.goodfon.com/original/2048x1351/0/eb/mercedes-c63-amg-black-face-front-autumn-sight-w205.jpg"
                width={200}
                height={200}
                alt="bmw"
                className=" w-16 h-16 object-cover rounded-full"
              />
            </div>

            <div>
              <CardTitle className="text-white">Mercedes W205</CardTitle>
              <CardDescription className="text-white">2015</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              distinctio?
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/EspaceDeVente/66322f3e7229e5ff78d71029"}>
              <Button variant="destructive" className="text-white">
                View Car
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.15 }}
      >
        <Card className="hover:shadow-lg ease-in-out duration-150 bg-black">
          <CardHeader className="">
            <div className="rounded-full">
              <Image
                src="https://images.pexels.com/photos/19597723/pexels-photo-19597723/free-photo-of-route-campagne-voiture-vehicule.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={200}
                height={200}
                alt="bmw"
                className=" w-16 h-16 object-cover rounded-full "
              />
            </div>

            <div>
              <CardTitle className="text-white">Mercedes Class G</CardTitle>
              <CardDescription className="text-white">2012</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              distinctio?
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/EspaceDeVente/66322fb27229e5ff78d7102a"}>
              <Button variant="destructive" className="text-white">
                View Car
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.3 }}
      >
        <Card className="hover:shadow-lg ease-in-out duration-150 bg-black">
          <CardHeader className="">
            <div className="rounded-full">
              <Image
                src="https://images.pexels.com/photos/19758543/pexels-photo-19758543/free-photo-of-voiture-vehicule-mercedes-argent.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={200}
                height={200}
                alt="bmw"
                className=" w-16 h-16 object-cover rounded-full"
              />
            </div>

            <div>
              <CardTitle className="text-white">Mercedes CLS63</CardTitle>
              <CardDescription className="text-white">2010</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              distinctio?
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/EspaceDeVente/663230187229e5ff78d7102b"}>
              <Button variant="destructive" className="text-white">
                View Car
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
}

export default Page1Card2;
