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


function Achat({ infocar }: any) {
  const addBuyingDetail = useDateStore((state) => state.setBuyingDetails);
  const buyingdetails = useDateStore((state) => state.buyingdetails);

  const handleAlert = () => {
    // Ajoute le prix de la voiture dans le tableau buyingdetails du store
    const updatedDetails = [...buyingdetails, infocar];
    addBuyingDetail(updatedDetails);

  };

  const { toast }:any = useToast();

  return (
    <SheetTrigger asChild>
      <Button
        variant="destructive"
        className="text-white"
        onClick={handleAlert}
      >
        Buy car
      </Button>
    </SheetTrigger>
  );
}

export default Achat;
