import { NextResponse } from "next/server";
import FeedBack from "@/app/(models)/FeedBack";
export async function fetchAllFeedBack() {
    try {
      return await FeedBack.find();
    } catch (err) {
      return NextResponse.json(
        { message: "Failed to get infos about feedback", err },
        { status: 500 }
      );
    }
  }