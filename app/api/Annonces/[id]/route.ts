import Annonce from "@/app/(models)/Carsdetail";
import { NextResponse } from "next/server";


export async function DELETE(req:Request, { params }:{params:any}) {
  try {
    const { id } = params;
    await Annonce.findByIdAndDelete(id);
    return NextResponse.json({ message: "Annonce Deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
