
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const SHEET_LINK = process.env.GOOGLE_SCRIPT_HIRING;

    if (!SHEET_LINK) {
      return NextResponse.json(
        {
          success: false,
          message: "GOOGLE_SCRIPT_HIRING is missing",
        },
        { status: 500 }
      );
    }

    const body = await req.json();

    const response = await fetch(SHEET_LINK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Apply API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}
