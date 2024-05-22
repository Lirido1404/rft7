"use client";
import React, { useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useDateStore } from "../(store)/store";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import DeleteRasso from "./DeleteRasso";

function CardCalendar2({ newdate,userId }: any) {
  const router = useRouter();
  const { toast } = useToast();

  const date = useDateStore((state) => state.date);
  const setNewDate = useDateStore((state) => state.setNewDate);

  // Filtre des nouvelles dates
  const truedate = newdate.filter((dateObject: any) => {
    return dateObject.date.includes(date);
  });

  useEffect(() => {
    if (JSON.stringify(newdate) !== JSON.stringify(date)) {
      setNewDate(newdate);
    }
  }, [newdate, date, setNewDate]);

  const refreshPage = () => {
    router.refresh();
  };

  useEffect(() => {
    if (truedate.length === 0 && newdate) {
      toast({
        title: "Pas d'évènement ...",
        description: (
          <span className="flex gap-1 items-center">
            <img src="/Images/crosss.svg" alt="croix" className="w-6 h-6" />{" "}
            Aucun évènement n&apos;a été prévu pour ce
            <span className="font-bold">{date}</span>
          </span>
        ),
      });
    } else if (truedate.length !== 0 && newdate) {
      toast({
        title: "Ça bouge !",
        description: (
          <span className="flex gap-1 items-center">
            <img src="/Images/checkk.svg" alt="check" className="w-6 h-6" />
            {truedate.length} évènement{truedate.length == 1 ? "" : "s"} le
            <span className="font-bold">{date}</span>
          </span>
        ),
        action: (
          <ToastAction
            altText="Ajouter"
            className="border-[#1A73E8]"
            onClick={() =>
              toast({
                title: "La fonctionnalité arrive ...",
                description: (
                  <span className="flex gap-1 items-center">
                    <img
                      src="/Images/timee.svg"
                      alt="croix"
                      className="w-6 h-6"
                    />
                    Ce n&apos;est qu&apos;une question de temps...
                  </span>
                ),
              })
            }
          >
            Me prévenir
          </ToastAction>
        ),
      });
    }

    if (!newdate) {
      toast({
        variant: "destructive",
        title: "Evènements inaccessibles...",
        description:
          "Nous n'avons pas pu récupérer les données concernant les évènements.",
        action: (
          <ToastAction altText="Try again" onClick={refreshPage}>
            Réessayer
          </ToastAction>
        ),
      });
    }
  }, [date, newdate]);

  return (
    <div>
      <p className="text-white  rounded text-center">
        Emploi du temps pour le <span className="font-bold">{date}</span>{" "}
      </p>
      <Separator className="mt-2 w-[50%] mx-auto " />

      {truedate.length === 0 && (
        <motion.div
          className="mt-2"
          initial={{ opacity: 0, y: -20, scale: 1.2 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
        >
          <Card className="rounded overflow-hidden w-full">
            <CardHeader className="p-0"></CardHeader>
            <CardContent className="p-1">
              <span className="text-sm flex items-center">
                <img src="/Images/crosss.svg" alt="" className="w-6 h-6" />
                <p>Il n&apos;y a pas d&apos;évènement aujourd&apos;hui</p>
              </span>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {truedate.map((event: any, index: number) => (
        <motion.div
          className=" mt-2 w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
          key={event._id}
        >
          <Card className="rounded border-[#C91313] relative">
            <CardHeader className="p-2 font-bold  ">
              {event.title}
            </CardHeader>

            <CardContent className="p-1 flex flex-col gap-1">
              <span className="text-sm flex items-center gap-2">
                <Separator
                  className="h-6 w-[2px] rounded ml-2 bg-[#C91313]"
                  orientation="vertical"
                />
                <p className="ml-1 lg:w-[40ch]">Obj : {event.objectif}</p>
              </span>
              <Link href={`/Rassemblements/${event._id}`} className="p-2">
                <Button variant={'secondary'} className="border-2 bg-white border-[#1A73E8]">
                Voir informations
                </Button>
              </Link>
              {userId === event.idOfUser && (
                <div className="absolute -top-4 right-4 z-2"><DeleteRasso idOfRasso={event._id} /></div>
                
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default CardCalendar2;
