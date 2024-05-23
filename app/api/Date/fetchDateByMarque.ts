import { NextResponse } from "next/server";

import Date from "@/app/(models)/DatePost";

export async function fetchDatesByMarque(tag:string) {
  try {
    const res = await Date.find({ tag1: tag }).limit(3);
    console.log("resDate",res)
    return res
  } catch (err) {
    return NextResponse.json(
      { message: "Error for Date", err },
      { status: 500 }
    );
  }
}
