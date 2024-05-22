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

function Page1card() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75 }}
      >
        <Card className="hover:shadow-lg hover:shadow-white ease-in-out duration-100">
          <CardHeader className="">
            <div className="rounded-full">
              <Image
                src="https://images.pexels.com/photos/12249428/pexels-photo-12249428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={200}
                height={200}
                alt="bmw"
                className=" w-16 h-16 object-cover rounded-full"
              />
            </div>

            <div>
              <CardTitle>BMW M2 G87</CardTitle>
              <CardDescription>2023</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              distinctio?
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/EspaceDeVente/6632011ee9d6f145b719ee17"}>
              <Button variant="destructive" className="text-white">
                View Car
              </Button>
            </Link>
            <Badge variant="outline">New</Badge>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.15 }}
      >
        <Card className="hover:shadow-lg hover:shadow-white ease-in-out duration-100">
          <CardHeader className="">
            <div className="rounded-full">
              <Image
                src="https://images.pexels.com/photos/18554951/pexels-photo-18554951/free-photo-of-route-soleil-couchant-coucher-de-soleil-coucher-du-soleil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={200}
                height={200}
                alt="bmw"
                className=" w-16 h-16 object-cover rounded-full"
              />
            </div>

            <div>
              <CardTitle>BMW M3 G80</CardTitle>
              <CardDescription>2022</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              distinctio?
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/EspaceDeVente/6632024d85c2358e94f0d410"}>
              <Button variant="destructive" className="text-white">
                View Car
              </Button>{" "}
            </Link>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.3 }}
      >
        <Card className="hover:shadow-lg hover:shadow-white ease-in-out duration-100">
          <CardHeader className="">
            <div className="rounded-full">
              <Image
                src="https://wallpapercave.com/wp/wp3192871.jpg"
                width={200}
                height={200}
                alt="bmw"
                className=" w-16 h-16 object-cover rounded-full"
              />
            </div>

            <div>
              <CardTitle>BMW 135i</CardTitle>
              <CardDescription>2007</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              distinctio?
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/EspaceDeVente/66322e9c7229e5ff78d71026"}>
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
        transition={{ duration: 0.75, delay: 0.45 }}
      >
        <Card className="hover:shadow-lg hover:shadow-white ease-in-out duration-100">
          <CardHeader className="">
            <div className="rounded-full">
              <Image
                src="https://carfans.fr/wp-content/uploads/2022/10/BMW-M5-CS-arriere.jpg.webp"
                width={200}
                height={200}
                alt="bmw"
                className=" w-16 h-16 object-cover rounded-full"
              />
            </div>

            <div>
              <CardTitle>BMW M5 CS F90</CardTitle>
              <CardDescription>2021</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              distinctio?
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/EspaceDeVente/66322f077229e5ff78d71028"}>
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

export default Page1card;
