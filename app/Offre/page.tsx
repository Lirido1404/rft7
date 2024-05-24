import React from "react";
import CarsForm from "../(components)/CarsForm";
import Link from "next/link";

import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

async function page() {
  const session = await getServerSession(options);
  const sessionName = session?.user?.name || session?.user?.nom;
  const sessionProfilPictureProprio = session?.user?.image;
  const mailProprio = session?.user?.email;
  const sessionId = session?.user?.id;

  return (
    <div>
      {session ? <>
        <CarsForm
        sessionName={sessionName}
        sessionProfilPictureProprio={sessionProfilPictureProprio}
        mailDuProprio={mailProprio}
        id={sessionId}
      />
      </> : <>
        <p>Vous devez être connecté pour déposer votre offre</p>
      </>}
      
    </div>
  );
}

export default page;
