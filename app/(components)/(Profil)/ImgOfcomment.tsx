"use client";
import React, { useEffect } from "react";
import { useDateStore } from "@/app/(store)/store";

function ImgOfcomment({ img }: { img: string }) {
    const setSrcImage = useDateStore((state) => state.setSrcImage);
  const srcImage = useDateStore((state) => state.srcImage);

  useEffect(() => {
    setSrcImage(img);
  }, [img]);


  return (
    <>
      <img
        src={srcImage || "/Images/profilsvg1.svg"}
        alt=""
        className={`w-12 h-12 rounded-full border`}
      />
      
    </>
  );
}

export default ImgOfcomment;
