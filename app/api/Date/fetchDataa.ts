import { NextResponse } from "next/server";

import Date from "@/app/(models)/DatePost";

export async function fetchDates() {
  try {
    return await Date.find();
  } catch (err) {
    return NextResponse.json(
      { message: "Error for Date", err },
      { status: 500 }
    );
  }
}
