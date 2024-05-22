"use client";

import React from 'react'
import { DrawerTrigger } from "@/components/ui/drawer";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from 'next/link';


function DrawerTriggercomp() {
  const { toast }:any = useToast();

  const handleSession = () => {
    toast({
      title: "Connecter pour commenter",
      description: "Seul les utilisateurs authentifiés peuvent commenter.",
      action: (
        <ToastAction altText="Me connecter"  className="border-[#C91313]">
          <Link href={"/Account"}>Me connecter</Link>
        </ToastAction>
      ),
    });
  };
  return (
    <button className="w-60 rounded text-white bg-[#1A73E8] px-4 py-2 shadow" onClick={handleSession}>
          Je crée mon rasso !
          </button>
  )
}

export default DrawerTriggercomp