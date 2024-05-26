import React from "react";
import CarsForm from "../(components)/CarsForm";
import Link from "next/link";

import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Button } from "@/components/ui/button";

async function page() {
  const session = await getServerSession(options);
  const sessionName = session?.user?.name || session?.user?.nom;
  const sessionProfilPictureProprio = session?.user?.image;
  const mailProprio = session?.user?.email;
  const sessionId = session?.user?.id;



  return (
    <div className="min-h-[80vh]">
      {session ? <>
        <CarsForm
        sessionName={sessionName}
        sessionProfilPictureProprio={sessionProfilPictureProprio}
        mailDuProprio={mailProprio}
        id={sessionId}
      />
      </> : <div className="flex items-center h-[80vh] justify-center flex-col">
        <p className="font-bold text-3xl">Vous devez être connecté pour déposer votre offre</p>
        <img src="/Images/logocar2.png" className="h-40 w-40" alt="" />
        <Link href={"/Account"}>
              <Button
                className="w-80 font-bold text-white"
                variant="destructive"
              >
                Me connecter
              </Button>
            </Link>
      </div>}
      
    </div>
  );
}

export default page;
