import React from "react";
import { countCommentOfIdUser } from "@/app/api/Comments/[id]/countCommentOfIdUser";
import { countParticipationsOfIdUser } from "@/app/api/Participations/[id]/countRassoOfIdUser";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";
async function page() {
  const session = await getServerSession(options);
  const commentOfIdUser = await countCommentOfIdUser(session?.user?.id);
  const participationRassoOfIdUser = await countParticipationsOfIdUser(
    session?.user?.id
  );
  const userImage = session?.user?.image;
  return (
    <div>
      <h1 className="ml-8 mt-8 font-bold text-4xl">
        Mon profil
      </h1>
      <div className="flex items-center gap-2 pl-24 pt-12">
        
        <div>
          {session ? (
            <>
              <img
                src={userImage || "/Images/profilsvg1.svg"}
                alt=""
                className={`w-32 h-32 rounded-full`}
              />
            </>
          ) : (
            <>
              <img
                src={"/Images/profilsvg2.svg"}
                alt=""
                className={`w-40 h-40 rounded-full`}
              />
            </>
          )}
        </div>
        <div>
          <p className="text-4xl"> {session?.user?.name}</p>
          <div className="flex gap-2">
          <span className="flex gap-1 items-center">
            
            <img src="/Images/commentss.svg" alt="" className="w-8 h-8" />
            {commentOfIdUser} messages
          </span>
          <span className="flex gap-1 items-center">
            
          <img src="/Images/carssport.svg" alt="" className="w-7 h-7" />
            {participationRassoOfIdUser} participations
          </span>
          </div>
        </div>
        
      </div>
      <div className="flex justify-center gap-8 items-center">
      <Link href={`/MonCompte/Messages/${session?.user?.id}`} className="px-8 py-2 hover:shadow-lg bg-[#1C74E9] text-white rounded-md">
      Voir mes messages
      </Link>

      <Link href={`/MonCompte/Rassemblements/${session?.user?.id}`} className="px-8 py-2 hover:shadow-lg bg-[#1C74E9] text-white rounded-md">
      Voir mes participations
      </Link>
      </div>
    </div>
  );
}

export default page;
