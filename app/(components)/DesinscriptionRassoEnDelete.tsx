"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

function DesinscriptionRassoEnDelete({
  idParticipation,
}: {
  idParticipation: string;
}) {
  const router = useRouter();
  const { data: session } = useSession();
  const { toast } = useToast();

  const handleClick = async (e: any) => {
    if (session) {
      e.preventDefault();
      const res = await fetch(`/api/Participations/${idParticipation}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        toast({
          description: <div className="flex gap-1 items-center"> <img src="/Images/checkk.svg" alt="checkk" className="h-6 w-6" /> {data.message} </div>,
          
        });
        router.refresh();
      } else {
        toast({
          description: <div className="flex gap-1 items-center"> <img src="/Images/crosss.svg" alt="cross" className="h-6 w-6" /> {data.message} </div>,
          
        });
      }
    } else {
      e.preventDefault();
      toast({
        description: (
          <span className="text-sm flex items-center">
            <img src="/Images/crosss.svg" alt="" className="w-6 h-6" />
            <p>Connectez-vous pour accéder à ce service.</p>
          </span>
        ),
        action: (
          <ToastAction altText="Me connecter" className="border-[#C91313]">
            <Link href={"/Account"}>Me connecter</Link>
          </ToastAction>
        ),
      });
    }
  };

  return (
    <button
      className="p-2 bg-[#1A73E8] text-white rounded-lg cursor-pointer"
      onClick={handleClick}
    >
      Me désinscrire
    </button>
  );
}

export default DesinscriptionRassoEnDelete;
