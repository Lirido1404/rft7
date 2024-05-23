import Image from "next/image";
import "./page.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Badge } from "@/components/ui/badge";

import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Page1card from "./(components)/(page1card)/Page1card";
import Page1Card2 from "./(components)/(page1card)/Page1Card2";
import Page1AudiPres from "./(components)/(page1card)/Page1AudiPres";
import FetchMarque from "./(components)/Marques/fetchMarque";
import { Suspense } from "react";
import HandleScroll from "./(components)/handleScroll";

export default function Home({ searchParams }: any) {
  const queryMarqueHome = searchParams?.marquehome || "";

  return (
    <main className="">
      <HandleScroll queryMarqueHome={queryMarqueHome} />

      {/*<div className="w-[70%] flex justify-evenly mx-auto mt-6">
          <Link href={"#bmw"}>
            <Image
              src="/Images/bmwlogo.svg"
              width={60}
              height={60}
              alt="bmw"
              className=" bmwlogo cursor-pointer"
            />
          </Link>
          <Link href={"#mercedes"}>
            <Image
              src="/Images/mercedeslogo.svg"
              width={60}
              height={60}
              alt="mercedes"
              className="hover:rotate-[120deg] ease-in-out duration-200 cursor-pointer"
            />
          </Link>
          <Link href={"#audi"}>
            <Image
              src="/Images/audilogo.svg"
              width={60}
              height={60}
              alt="audi"
              className="hover:rotate-[180deg] ease-in-out duration-200 cursor-pointer"
            />
          </Link>
        </div>*/}
      <div className="relative w-full h-[800px] ">
        <div className="ml-32 mt-20">
          <div className="flex flex-col gap-2">
            <p className=" opacity-65">Mercedes 190 evo 2</p>
            <h1 className="text-7xl font-bold opac text-[#2a292f]">
              Découvrez l&apos;univers des <br /> rassos
            </h1>

            <p className="w-[45ch] text-lg mt-4 text-justify text-[#2a292f]">
              Vous aimez les voitures, les bruits de voitures et les courses, et
              nous aussi ! C&apos;est pourquoi nous visons à transmettre cette
              passion, en ayant des échanges autour de vieilles bonne soirées et
              vielles bonnes courses.
            </p>
            <Link href={"/Rassemblements"}>
              <Button
                className="w-80 font-bold text-white"
                variant="destructive"
              >
                Découvrez ce monde rapidement
              </Button>
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src="/Images/mcevo22.png"
            width={1200}
            height={600}
            alt="evo2"
            className="drop-shadow-xl absolute bottom-60 right-0 animvoit1"
          />
        </div>
      </div>

      <div className="w-[70%] mx-auto">
        <Separator />
      </div>

      <div className="grid grid-cols-2 w-[85%] mx-auto  bg-[#f4f4f7] mt-12 rounded-lg ">
        <div className="h-full w-full flex items-center relative">
          <div className="absolute w-8 rounded-lg left-0 top-0 h-full bg-[#C91313] "></div>
          <img src="/Images/mcevo22inv.png" className="h-72" alt="" />
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold text-[#2a292f]">
            Votre passion, nos services
          </h2>
          <ul className="flex flex-col gap-3 mt-10">
            <li className="flex gap-6 items-center">
              <div className="flex justify-center items-center rounded-full bg-[#f4f4f7] p-2 border-2 border-red-500">
                <img src="/Images/Calendrierr.svg" className="h-8 w-8" alt="" />
              </div>
              <p className="text-lg text-[#2a292f]">Toujours à l&apos;actu</p>
            </li>
            <li className="flex gap-6 items-center">
              <div className="flex justify-center items-center rounded-full bg-[#f4f4f7] p-2 border-2 border-red-500">
                <img src="/Images/carrs.svg" className="h-8 w-8" alt="" />
              </div>
              <p className="text-lg text-[#2a292f]">Des voitures inédites</p>
            </li>
            <li className="flex gap-6 items-center">
              <div className="flex justify-center items-center rounded-full bg-[#f4f4f7] p-2 border-2 border-red-500">
                <img src="/Images/commu2.svg" className="h-8 w-8" alt="" />
              </div>
              <p className="text-lg text-[#2a292f]">
                Une communauté de passionnés
              </p>
            </li>
            <li className="flex gap-6 items-center">
              <div className="flex justify-center items-center rounded-full bg-[#f4f4f7] p-2 border-2 border-red-500">
                <img src="/Images/handd.svg" className="h-8 w-8" alt="" />
              </div>
              <p className="text-lg text-[#2a292f]">
                Des échanges enrichissants
              </p>
            </li>
            <li className="flex gap-6 items-center">
              <div className="flex justify-center items-center rounded-full bg-[#f4f4f7] p-2 border-2 border-red-500">
                <img src="/Images/racee.svg" className="h-8 w-8" alt="" />
              </div>
              <p className="text-lg text-[#2a292f]">
                Un gout pour la course et l&apos;amusement
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[70%] mx-auto mt-12">
        <Separator />
      </div>

      <Suspense
        fallback={
          <>
            <p>Loading...</p>
          </>
        }
      >
        <FetchMarque queryMarqueHome={queryMarqueHome} />
      </Suspense>

      <div className="flex justify-center mt-8">
        <Link href={"/Rassemblements"}>
          <Button className="w-80 font-bold text-white" variant="destructive">
            Créer mon Rasso
          </Button>
        </Link>
      </div>

      <div className="w-[80%] mx-auto">
        <h3 className="text-2xl font-bold text-[#2a292f] mt-12">
          Et encore plus ...{" "}
        </h3>
      </div>

      {/* <div className="w-full flex mt-20 bg-[#1f1f1f]">
        <div className="w-1/2 flex items-center justify-center ">
          <Image
            src="/Images/bmwlogocolor.svg"
            width={700}
            height={700}
            className="absolute opacity-85"
            alt="bmw logo"
          />
          <Image
            src="/Images/bmwam2.png"
            width={800}
            height={800}
            className="aret absolute animvoit2 mr-40"
            alt="bmw"
          />
        </div>

        <div className="w-1/2  grid grid-cols-2 p-20 gap-8 ">
          <Page1card />
        </div>
      </div>

      <div className="w-[70%] mx-auto mt-20" id="mercedes">
        <Separator />
      </div>

      <div className="w-full flex mt-20">
        <div className="w-1/2  grid grid-cols-2 p-20 gap-8">
          <Page1Card2 />
        </div>

        <div className="w-1/2 flex items-center justify-center ">
          <Image
            src="/Images/mercedeslogo.svg"
            width={550}
            height={550}
            className="absolute opacity-100"
            alt="bmw logo"
          />
          <Image
            src="/Images/mercedes/amggt.png"
            width={950}
            height={950}
            className="aret absolute animvoit2"
            alt="bmw"
          />
        </div>
      </div>

      <div className="w-[70%] mx-auto mt-20" id="audi">
        <Separator />
      </div>

      <div className="p-8 flex items-center justify-between mt-20 bg-[#1f1f1f]">
        <div className="p-8">
          <Card className="hover:shadow-lg hover:shadow-white ease-in-out duration-100">
            <CardHeader className="">
              <div className="rounded-full">
                <Image
                  src="https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width={200}
                  height={200}
                  alt="audi"
                  className=" w-16 h-16 object-cover rounded-full"
                />
              </div>

              <div>
                <CardTitle>Audi A3</CardTitle>
                <CardDescription>2020</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                distinctio?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={"/EspaceDeVente/663230657229e5ff78d7102c"}>
                <Button variant="destructive" className="text-white">
                  View Car
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center items-start ">
          <Image
            src="/Images/audilogo2.svg"
            alt="r8"
            width={500}
            height={500}
            className=" scale-y-100 z-1 hover:scale-y-50 pt-10 duration-200 ease-in-out  "
          />
          <Page1AudiPres />
        </div>

        <div className="p-8">
          <Card className="hover:shadow-lg hover:shadow-white ease-in-out duration-100">
            <CardHeader className="">
              <div className="rounded-full">
                <Image
                  src="https://images.pexels.com/photos/17593023/pexels-photo-17593023/free-photo-of-rue-arbres-voiture-vehicule.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width={200}
                  height={200}
                  alt="bmw"
                  className=" w-16 h-16 object-cover rounded-full"
                />
              </div>

              <div>
                <CardTitle>Audi RS7</CardTitle>
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
              <Link href={"/EspaceDeVente/663231027229e5ff78d7102d"}>
                <Button variant="destructive" className="text-white">
                  View Car
                </Button>{" "}
              </Link>
              <Badge variant="outline">New</Badge>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="w-[70%] mx-auto mt-8">
        <Separator />
      </div> */}

      <div className="w-[80%] mx-auto mt-12">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">
              Des magasins de concessions sont-ils prévus ?
            </AccordionTrigger>
            <AccordionContent>
              Oui. Nous disposerons les modèles les plus récents dans des
              espaces dédiés à la vente physique.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold">
              Les gammes vont-elles s&apos;hétérogénéiser ?
            </AccordionTrigger>

            <AccordionContent>
              Oui. Il est possible que nous proposions des voitures de plus en
              plus cotés, celà peut amener à des prix plus élevés.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold">
              Des partenariats avec d&apos;autres marques sont-ils prévus ?
            </AccordionTrigger>
            <AccordionContent>
              Nous collabererons bien avec d&apos;autres marques que celles
              présentées, mais uniquement des marques allemandes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
