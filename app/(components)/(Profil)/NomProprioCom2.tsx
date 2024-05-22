'use client'
import React from 'react'
import { useDateStore } from "@/app/(store)/store";


function NomProprioCom2() {
    const setNomProprio = useDateStore((state) => state.setNomProprio);
  const nomProprio = useDateStore((state) => state.nomProprio);
  return (
    <p className='text-4xl'> {nomProprio} </p>
  )
}

export default NomProprioCom2