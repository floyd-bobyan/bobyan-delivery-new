import { NextResponse } from "next/server";

const SHEET_LINK = process.env.GOOGLE_SCRIPT_HIRING || ""

if (!SHEET_LINK) {
  throw new Error("Link is not defined");
}

export async function POST(req: Request) {
  try {
    
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
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      {
        status: 500,
      },
    );
  }
}
