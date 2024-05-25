import React from 'react'
import Nav from './Nav'
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import {countCommentOfIdUser} from "@/app/api/Comments/[id]/countCommentOfIdUser";
import {countParticipationsOfIdUser} from "@/app/api/Participations/[id]/countRassoOfIdUser"
import {fetchAnnoncesFromUser} from "@/app/api/Annonces/AnnonceUser";
async function ServNav() {
    const session = await getServerSession(options)
    const commentOfIdUser = await countCommentOfIdUser(session?.user?.id);
    const participationOfIdUser = await countParticipationsOfIdUser(session?.user?.id);
    const fetchAnnoncesCount = await fetchAnnoncesFromUser(session?.user?.id);

  return (
    <>
    <Nav session={session} commentOfIdUser={commentOfIdUser} participationOfIdUser={participationOfIdUser} fetchAnnoncesCount={fetchAnnoncesCount} />
    </>
  )
}

export default ServNav