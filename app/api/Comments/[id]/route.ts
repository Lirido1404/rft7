import Comments from "@/app/(models)/Comments";
import { NextResponse } from "next/server";


export async function DELETE(req:Request, { params }:{params:any}) {
  try {
    const { id } = params;
    await Comments.findByIdAndDelete(id);
    return NextResponse.json({ message: "Contact Deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}


export async function PUT(req:Request, { params }:{params:any}) {
  try {
    const id = params.id;
    const body = await req.json();
    const updateCommentData = await Comments.findByIdAndUpdate(id, {
      contentOfComment: body.contentOfComment,
      
    });
    return NextResponse.json({ message: "Contact updated" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
