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
import FetchUsers from "./(components)/FetchUsers";
import { Input } from "@/components/ui/input";
import ListPage1 from "./(components)/ListPage1";

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
      <div className="relative w-full ">
        <div className="ml-32 mt-20">
          <div className="flex flex-col gap-2">
            <p className=" opacity-65">BMW M4 F80</p>
            <h1 className="text-7xl font-bold opac text-[#2a292f]">
              Découvrez l&apos;univers des <br /> rassos
            </h1>

            <p className="w-[45ch] text-lg mt-4 text-justify text-[#2a292f]">
              Vous aimez les voitures, les bruits de voitures et les courses, et
              <span className="text-red-500"> RFT</span> aussi ! C&apos;est
              pourquoi nous visons à transmettre cette passion, en ayant des
              échanges autour de vieilles bonne soirées et vielles bonnes
              courses.
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
        <img
          src="/Images/bmwmw1.png"
          alt="evo2"
          className="drop-shadow-xl absolute top-8 2xl:-top-24 right-10 animvoit1 w-[400px] 2xl:w-[600px]"
        />{" "}
        <img
          src="/Images/bmww.png"
          alt="evo2"
          className="drop-shadow-xl absolute bottom-0 right-0 animvoit2 w-[400px] 2xl:w-[600px]"
        />
      </div>

      <div className="w-[70%] mx-auto mt-12">
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
          <ListPage1 />
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
      <div className="w-[70%] mx-auto mt-12">
        <Separator />
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="text-2xl font-bold text-[#2a292f] mt-12">
          Découvrez... et vendez
        </h3>
      </div>

      <Suspense fallback={<>Loading...</>}>
        <FetchUsers />
      </Suspense>
      <div className="w-[70%] mx-auto mt-12">
        <Separator />
      </div>
      <div className="w-[80%] mx-auto">
        <h4 className="text-2xl font-bold text-[#2a292f] mt-12">
          Ou restez en warning (pas encore fonctionnel)
        </h4>
      </div>

      <div className="grid grid-cols-2 w-[80%] mx-auto mt-12">
        <div className="flex justify-center items-center">
          <div className="border border-red-500 rounded-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.764662455018!2d2.2849276764646818!3d48.86269787133262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ffb666721a5%3A0x8dbf34b77b272395!2sPl.%20du%20Trocad%C3%A9ro%20et%20du%2011%20Novembre%2C%20Paris!5e0!3m2!1sfr!2sfr!4v1716574884966!5m2!1sfr!2sfr"
              style={{ border: 0 }}
              loading="lazy"
              width={320}
              height={320}
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-full w-96 h-96 "
            ></iframe>
          </div>
        </div>
        <div className="">
          <h4 className="text-lg font-bold text-[#2a292f]">
            Allumez vos clignotants et repérez les rassos les plus proches de
            votre position !
          </h4>
          <p className="italic mt-6 text-sm">
            Le visiteur pourra avoir accès au différents points de
            rassemblements sur la map, et le focus se fera au niveau de sa
            position. APIs qui seront utilisés : - Leaflet (pour la map) ; -
            coordonnees-gps.fr (pour connaitre la longitude et latitude en
            fonction de la ville)
          </p>
          <div>
            <Input
              className="w-96 mt-4"
              placeholder="Entrez le nom de votre ville"
            ></Input>
            <p className="text-sm italic text-red-500 opacity-50">
              Pas encore fonctionnel
            </p>
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto mt-12">
        <Separator />
      </div>
      <div className="w-[80%] mx-auto">
        <h5 className="text-2xl font-bold text-[#2a292f] mt-12">
          Vos réponses
        </h5>
      </div>

      <div className="w-[80%] mx-auto mt-12">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">
              Quels services seront ajoutés à ce site à l&apos;avenir ?
            </AccordionTrigger>
            <AccordionContent>
              La proposition des Rassos en fonctions de votre localisation, le
              service de localisation de voiture de Rasso qui vous permettra
              d&apos;essayer la plus belle voiture de votre rasso préféré. (Si
              consentement propriétaire)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold">
              Quels sont les objectifs de RFT ?
            </AccordionTrigger>

            <AccordionContent>
              Nous souhaitons aggrandir notre communauté afin de pouvoir agir à
              l&apos;international, en proposant des rassos spéciaux par pays.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold">
              RFT sera t-il présent au festival MMI ?
            </AccordionTrigger>
            <AccordionContent>Oui.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
