"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

function ParticipRasso({
  idsession,
  idRasso,
}: {
  idsession: string;
  idRasso: string;
}) {
  const router = useRouter();
  const { data: session } = useSession();
  const { toast } = useToast();

  const [data, setData] = useState({
    idOfUser: idsession,
    participation: true,
    idOfRasso: idRasso,
  });

  const handleClick = async (e: any) => {
    if (session) {
      e.preventDefault();
      const res = await fetch("/api/Participations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await res.json();
      if (res.ok) {
        // Si la création de la participation est réussie, afficher un toast avec le message retourné
        toast({
          description: <div className="flex gap-1 items-center"> <img src="/Images/checkk.svg" alt="checkk" className="h-6 w-6" /> Vous êtes inscrit. </div>          
        });
        router.refresh();
      } else {
        // Si la création de la participation échoue, afficher un toast avec le message d'erreur retourné
        toast({
          description: <div className="flex gap-1 items-center"> <img src="/Images/checkk.svg" alt="checkk" className="h-6 w-6" /> Erreur pendant votre inscription.</div>          
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
          <ToastAction altText="Me connecter" className="border-[#FF7E14]">
            <Link href={"/Account"}>Me connecter</Link>
          </ToastAction>
        ),
      });
    }
  };

  return (
    <>
      <button
        className="p-2 bg-[#1A73E8] text-white hover:bg-[#4480c9] ease-in-out duration-100 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        Je participe
      </button>
    </>
  );
}

export default ParticipRasso;