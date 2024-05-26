"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useDateStore } from "@/app/(store)/store"; // Assurez-vous de fournir le bon chemin vers le store

import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useSession } from "next-auth/react";
import Link from "next/link";



function Achat({ infocar }: any) {
  const addBuyingDetail = useDateStore((state) => state.setBuyingDetails);
  const buyingdetails = useDateStore((state) => state.buyingdetails);

  const handleAlert = () => {
    // Ajoute le prix de la voiture dans le tableau buyingdetails du store
    const updatedDetails = [...buyingdetails, infocar];
    addBuyingDetail(updatedDetails);

  };  
  
  const { data: session } = useSession();


  const { toast }:any = useToast();

  const handleToast=()=>{
    toast({
      title: "Vous n'êtes pas connecté.",

      action: (
        <ToastAction altText="Me connecter" className="border-[#FF7E14]">
          <Link href={"/Account"}>Me connecter</Link> 
        </ToastAction>
      ),
    });
  }

  return (
    <>
      {session ? (
        <>
        <SheetTrigger asChild>
        <Button
        variant="destructive"
        className="text-white"
        onClick={handleAlert}
      >
        Acheter !
      </Button>
      </SheetTrigger>
        </>
      ):<>
      <Button
        variant="destructive"
        className="text-white"
        onClick={handleToast}
      >
        Acheter !
      </Button>
      </>}
    
    </>
  );
}

export default Achat;
