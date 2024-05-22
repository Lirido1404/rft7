"use client";
import React, { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ToastAction } from "@/components/ui/toast";

function AjoutNotifAuth() {
  const { data: session } = useSession();
  const { toast } = useToast();

  useEffect(() => {
    if (session) {
      toast({
        description: (
          <span className="flex gap-1 items-center">
            <img src="/Images/checkk.svg" alt="check" className="w-6 h-6" />
            <p className="text-[#343436] font-bold">Connexion réussie.</p>
          </span>
        ),
      });
    } else {
      toast({
        title: "Vous n'êtes pas connecté.",

        action: (
          <ToastAction altText="Me connecter" className="border-[#FF7E14]">
            <Link href={"/Account"}>Me connecter</Link>
          </ToastAction>
        ),
      });
    }
  }, [session, toast]);

  return <></>;
}

export default AjoutNotifAuth;
