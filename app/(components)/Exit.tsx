"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

function Exit() {
  const handleSignOut = async () => {
    // Appel de la fonction signOut pour déconnecter l'utilisateur
    const data = await signOut({ redirect: false, callbackUrl: "/" });
  };
  return (
    <div className="flex flex-col gap-4">
      <Button
        aria-label="se deconnecter"
        onClick={() => signOut({ callbackUrl: "/" })}
        className="text-black"
        variant={"destructive"}
      >
        <p className="text-white">Deconnexion</p>
      </Button>
    </div>
  );
}

export default Exit;
