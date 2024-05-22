

import { NextResponse } from "next/server";

import Date from "@/app/(models)/DatePost";
export async function DELETE(req:Request, { params }:{params:any}) {
    try {
      const { id } = params;
      await Date.findByIdAndDelete(id);
      return NextResponse.json({ message: "Evènement supprimé" }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ message: "Erreur lors de la supression", err }, { status: 500 });
    }
  }