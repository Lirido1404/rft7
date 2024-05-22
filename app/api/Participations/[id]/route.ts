import { NextResponse } from "next/server";
import Particip from "@/app/(models)/Participation";

export async function PUT(req: Request, { params }: { params: any }) {
  try {
    const id = params.id;
    const body = await req.json();
    const updateParticipationData = await Particip.findByIdAndUpdate(id, {
      participation: body.participation,
    });
    return NextResponse.json({ message: "Votre participation à été modifié" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}


export async function DELETE(req:Request, { params }:{params:any}) {
    try {
      const { id } = params;
      await Particip.findByIdAndDelete(id);
      return NextResponse.json({ message: "Vous avez été désinscrit." }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ message: "Erreur lors de la désinscription", err }, { status: 500 });
    }
  }