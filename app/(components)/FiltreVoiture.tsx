'use client'
import React, { useState, useEffect } from 'react';
import { Separator } from "@/components/ui/separator";
import { useDateStore } from "@/app/(store)/store";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

function FiltreVoiture() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const rechercheTag = useDateStore((state) => state.rechercheTag); 
  const setRechercheTag = useDateStore((state) => state.setRechercheTag); 


  useEffect(() => {
    handleSearch(rechercheTag);
  }, [rechercheTag]);

  const handleSearch = (tag:string) => {
    const params = new URLSearchParams(searchParams);
    if (tag) {
      params.set("marque", tag);
    } else {
      params.delete("marque");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const tagBmw = () => {
    if(rechercheTag=="bmw"){
      setRechercheTag("")
    }else{
      setRechercheTag("bmw");
    }
  };

  const tagMercedes = () => {
    if(rechercheTag=="mercedes"){
      setRechercheTag("")
    }else{
      setRechercheTag("mercedes");
    }
  };

  const tagAudi = () => {
    if(rechercheTag=="audi"){
      setRechercheTag("")
    }else{
      setRechercheTag("audi");
    }
    
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold mt-4">
        Filtre
      </h1>
      <div className="w-full mt-4 flex flex-col gap-1  " onClick={tagBmw}>
        <Separator className="w-[70%] bg-[#C91313] mx-auto" />
        <span className={`flex items-center justify-between hover:bg-[#C9131395] rounded-r-xl hover:text-white hover:gap-3 ease-in-out duration-150 cursor-pointer ${rechercheTag === "bmw" ? "bg-[#C91313] text-white" : ""}`}>
          <p className="text-xl ml-16">BMW</p>
          <img src="/Images/bmwlogo.svg" className="w-16 h-16 mr-16" alt="" />
        </span>
        <Separator className="w-[70%] bg-[#C91313] mx-auto" />
      </div>
      <div className="w-full mt-4 flex flex-col gap-1 " onClick={tagMercedes}>
        <Separator className="w-[70%] bg-[#C91313] mx-auto" />
        <span className={`flex items-center justify-between hover:bg-[#C9131395] rounded-r-xl hover:text-white hover:gap-3 ease-in-out duration-150 cursor-pointer ${rechercheTag === "mercedes" ? "bg-[#C91313] text-white" : ""}`}>
          <p className="text-xl ml-16">Mercedes</p>
          <img
            src="/Images/mercedeslogo.svg"
            className="w-16 h-16 mr-16"
            alt=""
          />
        </span>
        <Separator className="w-[70%] bg-[#C91313] mx-auto" />
      </div>
      <div className="w-full mt-4 flex flex-col gap-1 " onClick={tagAudi}>
        <Separator className="w-[70%] bg-[#C91313] mx-auto" />
        <span className={`flex items-center justify-between hover:bg-[#C9131395] rounded-r-xl hover:text-white hover:gap-3 ease-in-out duration-150 cursor-pointer ${rechercheTag === "audi" ? "bg-[#C91313] text-white" : ""}`}>
          <p className="text-xl ml-16">Audi</p>
          <img src="/Images/audilogo.svg" className="w-16 h-16 mr-16" alt="" />
        </span>
        <Separator className="w-[70%] bg-[#C91313] mx-auto" />
      </div>
    </>
  );
}

export default FiltreVoiture;
