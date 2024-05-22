import Image from "next/image";
import React from "react";

function loading() {
  return (
    <div className="h-screen w-screen  flex justify-center items-center">
      <Image
        src={"/Images/logocar2.png"}
        width={1000}
        height={1000}
        alt="logo"
        className="opacload"
      />
    </div>
  );
}

export default loading;
