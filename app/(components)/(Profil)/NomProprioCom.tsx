'use client'
import React, { useEffect } from "react";
import { useDateStore } from "@/app/(store)/store";

function NomProprioCom({ nom }: { nom: string }) {
  const setNomProprio = useDateStore((state) => state.setNomProprio);
  const nomProprio = useDateStore((state) => state.nomProprio);

  useEffect(() => {
    setNomProprio(nom);
  }, [nom, setNomProprio]);

  return <p className="text-base text-gray-700">{nomProprio}</p>;
}

export default NomProprioCom;
