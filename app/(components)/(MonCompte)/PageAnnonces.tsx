import React from "react";
import {fetchAnnoncesFromUser} from "@/app/api/Annonces/AnnonceUser";

import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import NomProprioCom from "../(Profil)/NomProprioCom";
import NomProprioCom2 from "../(Profil)/NomProprioCom2";
import ImgOfcomment from "../(Profil)/ImgOfcomment";
import ImgOfProfil from "../(Profil)/ImgOfProfil";
import { Badge } from "@/components/ui/badge";
import {fetchAnnoncesFromUserNoCount} from "@/app/api/Annonces/FetchAnnoncesOfUser"

async function PageAnnonces({ idOfAccount }: { idOfAccount: string }) {


  const session = await getServerSession(options);
  const fetchAnnoncesCount = await fetchAnnoncesFromUser(idOfAccount);
  const fetchAnnonces = await fetchAnnoncesFromUserNoCount(idOfAccount)


  const userImage = session?.user?.image;


  const returnTag = (tag: string) => {
    switch (tag) {
      case "bmw":
        return (
          <>
            <div className="flex gap-2 items-center p-1">
              {" "}
              <img
                src="/Images/bmwlogo.svg"
                alt="bmwlogo"
                className="h-6 w-6"
              />
            </div>
          </>
        );
        break;
      case "mercedes":
        return (
          <>
            <div className="flex gap-2 items-center p-1">
              {" "}
              <img
                src="/Images/mercedeslogo.svg"
                alt="merceslogo"
                className="h-6 w-6"
              />{" "}
            </div>
          </>
        );
        break;
      case "audi":
        return (
          <>
            <div className="flex gap-2 items-center p-1">
              {" "}
              <img
                src="/Images/audilogo.svg"
                alt="audilogo"
                className="h-6 w-6"
              />{" "}
            </div>
          </>
        );
        break;
    }
  };
  return (
    <div>
      <div className="flex items-center gap-2 p-24">
        <div>
          {session?.user?.id == idOfAccount ? (
            <>
              <img
                src={userImage || "/Images/profilsvg1.svg"}
                alt=""
                className={`w-32 h-32 rounded-full bg-white border`}
              />
            </>
          ) : (
            <>
              {/* <ImgOfProfil text="pageComms" idOfAccount={idOfAccount} /> */}
              <img
        src={fetchAnnonces[0]?.photoProfilProprio || "/Images/profilsvg1.svg"}
        alt=""
        className={`w-40 h-40 rounded-full border bg-white border`}
      />
            </>
          )}
        </div>
        <div>
          <NomProprioCom2  />
          <div className="flex gap-2">
            <span className="flex gap-1 items-center">
              <img src="/Images/cardannounce.svg" alt="" className="w-8 h-8" />
              <span className="font-bold">
                {" "}
                {fetchAnnoncesCount}{" "}
                {fetchAnnoncesCount <= 1 ? "annonce" : "annonces"}
              </span>{" "}
              sur toute la plateforme.
            </span>
          </div>
        </div>
      </div>
      <div className="grid w-[80%] mx-auto grid-cols-3 gap-8">
      {fetchAnnonces?.map((car: any, index: number) => (
            
              <Link href={`/EspaceDeVente/${car._id}`} key={car._id}> 
                <Card className="hover:shadow-lg ease-in-out duration-150 relative border-2 border-[#C91313] w-full h-60 ">
                  <div className="absolute flex flex-col gap-1 -left-6 top-4">
                    <Badge className="inline-flex items-center bg-[#f4f4f7] border-2 border-white rounded-full px-2 text-black hover:bg-white shadow">
                      <span className="flex gap-1 items-center">
                        {returnTag(car.tag)}
                        <p className="font-bold"> {car.name} </p>
                      </span>
                    </Badge>

                    <Link
                      href={`/MonCompte/Messages/${car.userId}`}
                      className="mt-2"
                    >
                      <Badge className="flex gap-1 items-center bg-[#f4f4f7] border-2 border-[#C91313] rounded-full px-2 text-black hover:bg-[#C91313] hover:text-white shadow">
                        <img
                          src={car.photoProfilProprio  || "/Images/profilsvg1.svg"}
                          className="h-6 w-6 rounded-full"
                          alt=""
                        />
                        {car.nomProprio}
                      </Badge>
                    </Link>

                    <Badge className="inline-flex items-center bg-[#f4f4f7] border-2 border-[#C91313] rounded-full px-2 text-black hover:bg-white shadow">
                      <span className="flex gap-1 items-center">
                        <img
                          src="/Images/coinn.svg"
                          alt=""
                          className="h-6 w-6"
                        />
                        <p className="font-bold">{car.price} €</p>
                      </span>
                    </Badge>

                    <Badge className="inline-flex items-center bg-[#f4f4f7] border-2 border-[#C91313] rounded-full px-2 text-black hover:bg-white shadow">
                      <span className="flex gap-1 items-center">
                        <img
                          src="/Images/roadd.svg"
                          alt=""
                          className="h-6 w-6"
                        />
                        <p className="font-bold">{car.performance} Km</p>
                      </span>
                    </Badge>
                  </div>
                  <img
                    src={car.image}
                    alt=""
                    className="h-full w-full rounded-lg hover:brightness-50 ease-in-out duration-150 object-cover"
                  />
                </Card>
              </Link>
            
          ))}
      </div>
    </div>
  );
}

export default PageAnnonces;
