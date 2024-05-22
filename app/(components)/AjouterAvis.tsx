"use client";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { ToastAction } from "@/components/ui/toast";

function AjouterAvis() {
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
    <>
      <button onClick={handleSession}>
        <h4 className="bg-[#1A73E8] rounded-lg shadow py-2 px-4 text-white cursor-pointer">
          Ajouter un avis
        </h4>
      </button>
    </>
  );
}

export default AjouterAvis;
