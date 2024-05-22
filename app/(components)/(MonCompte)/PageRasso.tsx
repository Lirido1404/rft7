import React from "react";
import { countCommentOfIdUser } from "@/app/api/Comments/[id]/countCommentOfIdUser";
import { countParticipationsOfIdUser } from "@/app/api/Participations/[id]/countRassoOfIdUser";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { validParticipationsOfIdUser } from "@/app/api/Participations/[id]/validRassoOfIdUser";
import { dataDesRassos } from "@/app/api/Participations/[id]/dataRassoDuUser";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ImgOfProfil from "../(Profil)/ImgOfProfil";

async function PageRasso({ idOfAccount }: { idOfAccount: string }) {
  const session = await getServerSession(options);
  const participationRassoOfIdUser = await countParticipationsOfIdUser(
    idOfAccount
  );
  const userImage = session?.user?.image;
  const validparticipations = await validParticipationsOfIdUser(idOfAccount);

  const ids = validparticipations.map(
    (participation) => participation.idOfRasso
  );

  const datas = await dataDesRassos(ids);
  const idOfUserRasso = datas[0].idOfUser;

  const returnTag1 = (tag1: string) => {
    switch (tag1) {
      case "Parking":
        return (
          <div className="flex gap-1 items-center p-1">
            {" "}
            <img src="/Images/parkingg.svg" alt="" className="h-6 w-6" />{" "}
            <p className=" font-bold"> {tag1} </p>{" "}
          </div>
        );
        break;
      case "Exploration":
        return (
          <div className="flex gap-1 items-center p-1">
            {" "}
            <img
              src="/Images/explorationn.svg"
              alt=""
              className="h-6 w-6"
            />{" "}
            <p className=" font-bold"> {tag1} </p>{" "}
          </div>
        );
        break;
      case "Course":
        return (
          <div className="flex gap-1 items-center p-1">
            {" "}
            <img src="/Images/racee.svg" alt="" className="h-6 w-6" />{" "}
            <p className=" font-bold"> {tag1} </p>{" "}
          </div>
        );
        break;
      case "Fête":
        return (
          <div className="flex gap-1 items-center p-1">
            {" "}
            <img src="/Images/partyy.svg" alt="" className="h-6 w-6" />{" "}
            <p className=" font-bold"> {tag1} </p>{" "}
          </div>
        );
        break;
    }
  };

  const returnTag2 = (tag2: string) => {
    return (
      <div className="flex gap-1 items-center p-1">
        {" "}
        <img src="/Images/peoplee.svg" alt="" className="h-6 w-6" />{" "}
        <p className=" font-bold"> {tag2} </p>
      </div>
    );
  };

  const returnTag3 = (tag3: string) => {
    switch (tag3) {
      case "BMW":
        return (
          <>
            <div className="flex gap-2 items-center p-1">
              {" "}
              <img
                src="/Images/bmwlogo.svg"
                alt="bmwlogo"
                className="h-6 w-6"
              />{" "}
              <p className=" font-bold"> {tag3} </p>
            </div>
          </>
        );
        break;
      case "Mercedes":
        return (
          <>
            <div className="flex gap-2 items-center p-1">
              {" "}
              <img
                src="/Images/mercedeslogo.svg"
                alt="bmwlogo"
                className="h-6 w-6"
              />{" "}
              <p className=" font-bold"> {tag3} </p>
            </div>
          </>
        );
        break;
      case "Audi":
        return (
          <>
            <div className="flex gap-2 items-center p-1">
              {" "}
              <img
                src="/Images/audilogo.svg"
                alt="bmwlogo"
                className="h-6 w-6"
              />{" "}
              <p className=" font-bold"> {tag3} </p>
            </div>
          </>
        );
        break;
    }
  };

  const formatTimestamp = (timestamp: any) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const date = new Date(timestamp);
    const formatedDate = date.toLocaleDateString("fr-FR", options);

    return formatedDate;
  };

  return (
    <div>
      <p>Beta ( non-fini | version avec bugs )</p>
      <div className="flex items-center gap-2 p-24">
        <div>
          {session?.user?.id == idOfAccount ? (
            <>
              <img
                src={userImage || "/Images/profilsvg1.svg"}
                alt=""
                className={`w-32 h-32 rounded-full`}
              />
            </>
          ) : (
            <>
              <ImgOfProfil text="pageRasso" idOfAccount={idOfAccount} />
            </>
          )}
        </div>
        <div>
          <p className="text-4xl font-bold"> {session?.user?.name}</p>
          <div className="flex gap-2">
            <span className="flex gap-1 items-center font-bold">
              <img src="/Images/carssport.svg" alt="" className="w-7 h-7" />
              {participationRassoOfIdUser}{""} {participationRassoOfIdUser > 1
                ? "participations prévues"
                : "participation prévue"}
            </span>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-3 gap-8">
        {datas.map((data) => (
          <Card
            key={data._id}
            className="hover:shadow-[#C91313] hover:shadow-md ease-in-out duration-150 overflow-hidden"
          >
            <Link className="" href={`/Rassemblements/${data._id}`}>
              <CardHeader>
                <CardTitle className="font-bold text-xl">
                  {data.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="py-2 pl-2 border-l-2  border-red-500">
                  {data.content}
                </p>
              </CardContent>

              <CardFooter className="flex justify-between items-center p-4">
                <Link
                  href={`/Rassemblements/${data._id}`}
                  className="px-4 py-1 rounded-md bg-[#1C74E9] hover:bg-[#4480c9] text-white"
                >
                  Voir Rasso
                </Link>

                <p className="italic text-sm opacity-40">
                  Crée le : {formatTimestamp(data.createdAt)}
                </p>
              </CardFooter>
              <Separator />

              <div className="flex justify-center gap-3 p-1">
                <Badge className="bg-white border border-red-500 text-black hover:text-white ease-in-out duration-150 hover:bg-red-500">
                  {returnTag1(data.tag1)}
                </Badge>
                <Badge className="bg-white border border-red-500 text-black hover:text-white ease-in-out duration-150 hover:bg-red-500">
                  {returnTag2(data.tag2)}
                </Badge>
                <Badge className="bg-white border border-red-500 text-black hover:text-white ease-in-out duration-150 hover:bg-red-500">
                  {returnTag3(data.tag3)}
                </Badge>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PageRasso;
