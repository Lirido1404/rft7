import { NextResponse } from "next/server";

import Date from "@/app/(models)/DatePost";

export async function fetchOneEvent(id:any) {
  try {
    return await Date.findOne({ _id: id });
  } catch (err) {
    return NextResponse.json(
      { message: "Error for Date", err },
      { status: 500 }
    );
  }
}