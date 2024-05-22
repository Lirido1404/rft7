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
function Achat() {
  const handleAlert = () => {
    alert("hey");
  };

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
