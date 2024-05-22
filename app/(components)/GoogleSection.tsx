"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

function GoogleSection() {
  return (
    <button
      aria-label="se connecter avec Google"
      onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
      className="w-full border-2 border-white rounded-lg p-4 duration-300 ease-in-out hover:bg-[#2F2F31] bg-black"
    >
      <div className="flex items-center justify-center gap-4">
        <p className="text-xl text-white">Google</p>
        <span>
          <Image
            src={"/Images/Google.png"}
            width={30}
            height={30}
            alt="Google Image"
          />
        </span>
      </div>
    </button>
  );
}

export default GoogleSection;
