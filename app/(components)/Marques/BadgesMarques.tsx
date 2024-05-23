"use client";
import React, { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { useDateStore } from "@/app/(store)/store";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

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

      <div className="mt-4">
        {resRassoMarque.map((event:any) => (
          <div key={event._id}>
                <p>
                    {event.tag3}
                </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default BadgesMarques;
