import React, { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchOneEvent } from "@/app/api/Date/fetchoneevent";
import { Separator } from "@radix-ui/react-separator";
import { Badge } from "@/components/ui/badge";
import FetchCommentRasso from "./FetchCommentRasso";
import Image from "next/image";
import { countAllComments } from "@/app/api/Comments/countComment";
import ParticipRasso from "./ParticipRasso";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { countParticipationsOfRasso } from "@/app/api/Participations/countParticipations";
import { verifParticipation } from "@/app/api/Participations/verifParticipationUser";
import DesinscriptionRassoEnDelete from "./DesinscriptionRassoEnDelete";
import StatsRasso from "./StatsRasso";
async function FetchOneEvent({ id }: any) {
  const session = await getServerSession(options);
  const sessionid = session?.user?.id;

  const res0 = await countAllComments(id);
  const res = await fetchOneEvent(id);
  const resParticipations = await countParticipationsOfRasso(id);
  const verificationPart = await verifParticipation(id, sessionid);

  const returnTag1 = () => {
    const tag1 = res.tag1;

    switch (tag1) {
      case "Parking":
        return (
          <div className="flex gap-1 items-center p-1">
            {" "}
            <img src="/Images/parkingg.svg" alt="" className="h-6 w-6" />{" "}
            <p className="text-black font-bold"> {tag1} </p>{" "}
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
            <p className="text-black font-bold"> {tag1} </p>{" "}
          </div>
        );
        break;
      case "Course":
        return (
          <div className="flex gap-1 items-center p-1">
            {" "}
            <img src="/Images/racee.svg" alt="" className="h-6 w-6" />{" "}
            <p className="text-black font-bold"> {tag1} </p>{" "}
          </div>
        );
        break;
      case "Fête":
        return (
          <div className="flex gap-1 items-center p-1">
            {" "}
            <img src="/Images/partyy.svg" alt="" className="h-6 w-6" />{" "}
            <p className="text-black font-bold"> {tag1} </p>{" "}
          </div>
        );
        break;
    }
  };

  const returnTag2 = () => {
    const tag2 = res.tag2;

    return (
      <div className="flex gap-1 items-center p-1">
        {" "}
        <img src="/Images/peoplee.svg" alt="" className="h-6 w-6" />{" "}
        <p className="text-black font-bold"> {tag2} </p>
      </div>
    );
  };

  const returnTag3 = () => {
    const tag3 = res.tag3;

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
              <p className="text-black font-bold"> {tag3} </p>
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
              <p className="text-black font-bold"> {tag3} </p>
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
              <p className="text-black font-bold"> {tag3} </p>
            </div>
          </>
        );
        break;
    }
  };

  return (
    <div>
      <div className="p-16 flex justify-between ">
        <div>
          <h3 className=" font-bold text-4xl text-black inline-block p-4 border-l-2 border-[#A40E0E] ">
            {res.title}
          </h3>
          <StatsRasso
            verificationPart={verificationPart}
            resParticipations={resParticipations}
            res0={res0}
          />
        </div>
        <div className="border-2 border-red-500 rounded-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.278184166167!2d2.3290264767566216!3d48.871973199750165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e30d4668339%3A0xa9abf21c286d0767!2sPalais%20Garnier!5e0!3m2!1sfr!2sfr!4v1716710969560!5m2!1sfr!2sfr"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-80 rounded-full "
          ></iframe>
        </div>{" "}
      </div>
      <div className="flex gap-20 pl-20">
        <div className="w-[40%] ">
          <Card className=" sticky top-8 ">
            <CardHeader>
              <CardTitle> {res.title} </CardTitle>
              <CardDescription className="flex gap-4">
                <span className="flex items-center gap-2">
                  <img
                    src="/Images/calendaricon.svg"
                    alt=""
                    className="h-6 w-6"
                  />
                  <p>
                    {res.date} | {res.horaire}h{" "}
                  </p>
                </span>
                <span className="flex items-center gap-2">
                  <img src="/Images/mapicon.svg" alt="" className="h-6 w-6" />
                  <p>{res.lieu}</p>
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="italic"> Objectif : {res.objectif} </p>
              <p className="text-justify mt-4"> {res.content} </p>
            </CardContent>
            <CardFooter className=" justify-between">
              {/* {verificationPart ? <DesinscriptionRasso idParticipation={verificationPart._id} /> : <ParticipRasso idsession={sessionid} idRasso={id} />}*/}
              {verificationPart ? (
                <DesinscriptionRassoEnDelete
                  idParticipation={verificationPart._id}
                />
              ) : (
                <ParticipRasso idsession={sessionid} idRasso={id} />
              )}
              <div className="flex gap-1">
                <Badge className="bg-white border border-[#C91313] hover:bg-[#C91313]">
                  {returnTag1()}
                </Badge>
                <Badge className="bg-white border border-[#C91313] hover:bg-[#C91313]">
                  {returnTag2()}
                </Badge>
                <Badge className="bg-white border border-[#C91313] hover:bg-[#C91313]">
                  {returnTag3()}
                </Badge>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className=" w-[60%]">
          <p className="text-3xl  text-black font-bold inline-block p-3 border-l-2 border-[#C91313]">
            Commentaires - {res.title}{" "}
          </p>

          <Suspense
            fallback={
              <div className="flex justify-center">
                {" "}
                <Image
                  src={"/Images/logocar2.png"}
                  width={100}
                  height={100}
                  className="opacload"
                  alt="logo"
                />{" "}
              </div>
            }
          >
            <FetchCommentRasso id={res._id} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default FetchOneEvent;
