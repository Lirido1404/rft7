"use client";
import React, { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { useDateStore } from "@/app/(store)/store";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
function BadgesMarques({ resRassoMarque }: any) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [tag, setTag] = useState("BMW");

  const handleSearch = (tag: string) => {
    const params = new URLSearchParams(searchParams);
    if (tag) {
      params.set("marquehome", tag);
    } else {
      params.delete("marquehome");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const tagBmw = () => {
    if (tag === "BMW") {
      setTag("");
    } else {
      setTag("BMW");
    }
  };

  const tagMercedes = () => {
    if (tag === "Mercedes") {
      setTag("");
    } else {
      setTag("Mercedes");
    }
  };

  const tagAudi = () => {
    if (tag === "Audi") {
      setTag("");
    } else {
      setTag("Audi");
    }
  };

  useEffect(() => {
    handleSearch(tag);
  }, [tag]);

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
    <>
      <div className="w-[80%] mx-auto">
        <h3 className="text-2xl font-bold text-[#2a292f] mt-12">
          Les rassos de vos marques préférées {tag}
        </h3>
        <div className="flex flex-wrap justify-around mt-8">
          <button
            className="shadow-lg border border-[#C91313] rounded px-12 py-1 flex flex-col gap-1 justify-center items-center"
            onClick={tagBmw}
          >
            <img src="/Images/bmwlogo.svg" className="h-14 w-14" alt="" />
            <p className="text-center text-[#2a292f] text-md ">BMW</p>
          </button>
          <button
            className="shadow-lg border rounded px-12 py-1 flex flex-col gap-1 justify-center items-center"
            onClick={tagMercedes}
          >
            <img src="/Images/mercedeslogo.svg" className="h-14 w-14" alt="" />
            <p className="text-center text-[#2a292f] text-md ">MERCEDES</p>
          </button>
          <button
            className="shadow-lg border rounded px-12 py-1 flex flex-col gap-1 justify-center items-center"
            onClick={tagAudi}
          >
            <img src="/Images/audilogo.svg" className="h-14 w-14" alt="" />
            <p className="text-center text-[#2a292f] text-md ">AUDI</p>
          </button>
        </div>
      </div>

      <Separator className="w-[30%] mx-auto mt-4" />

      <div className="mt-4 grid grid-cols-3 gap-6 px-12 ">
        {resRassoMarque.map((event: any) => (
          <Card
            key={event._id}
            className="border-[#C91313] border hover:shadow-md ease-in-out duration-150 overflow-hidden"
          >
            <Link className="" href={`/Rassemblements/${event._id}`}>
              <CardHeader>
                <CardTitle className="font-bold text-xl flex justify-between">
                  <div>{event.title}</div>
                  <Badge>
                    {event.date} | {event.horaire}h{" "}
                  </Badge>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="py-2 pl-2 border-l-2  border-red-500">
                  {event.content}
                </p>
              </CardContent>

              <CardFooter className="flex justify-between items-center p-4">
                <Link
                  href={`/Rassemblements/${event._id}`}
                  className="px-4 py-1 rounded-md bg-[#1C74E9] hover:bg-[#4480c9] text-white"
                >
                  Voir Rasso
                </Link>

                <p className="italic text-sm opacity-40">
                  Crée le : {formatTimestamp(event.createdAt)}
                </p>
              </CardFooter>
              <Separator />

              <div className="flex justify-center gap-3 p-2">
                <Badge className="bg-white border border-red-500 text-black hover:text-white ease-in-out duration-150 hover:bg-red-500">
                  {returnTag1(event.tag1)}
                </Badge>
                <Badge className="bg-white border border-red-500 text-black hover:text-white ease-in-out duration-150 hover:bg-red-500">
                  {returnTag2(event.tag2)}
                </Badge>
                <Badge className="bg-white border border-red-500 text-black hover:text-white ease-in-out duration-150 hover:bg-red-500">
                  {returnTag3(event.tag3)}
                </Badge>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}

export default BadgesMarques;
