import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";


function ProfilStats({userId,commentOfIdUser,participationOfIdUser}:{userId:string,commentOfIdUser:number,participationOfIdUser:number}) {
  return (
    <div>
      <Separator className="w-[70%] mx-auto mt-1 bg-[#C91313] " />

      <span className=" hover:text-blue-500 ease-out duration-200 cursor-pointer text-center p-1 flex items-center whitespace-nowrap ">
        <img src="/Images/commentss.svg" alt="" className="w-8 h-8" />
        <Link href={`/MonCompte/Messages/${userId}`} className=" ">
          Mes messages <span className="text-red-500 font-bold"> ({commentOfIdUser})</span>
        </Link>
      </span>
      <span className=" gap-1 text-black hover:text-blue-500 ease-out duration-200 cursor-pointer text-center p-1 flex items-center whitespace-nowrap ">
        <img src="/Images/carssport.svg" alt="" className="w-7 h-7" />
        <Link href={`/MonCompte/Rassemblements/${userId}`} className=" ">
          Mes rassos <span className="text-red-500 font-bold"> ({participationOfIdUser})</span>
        </Link>
      </span>
    </div>
  );
}

export default ProfilStats;
