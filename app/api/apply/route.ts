import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_HIRING || ""

if (!GOOGLE_SCRIPT_URL) {
  throw new Error("GOOGLE_SCRIPT_URL is not defined");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(GOOGLE_SCRIPT_URL, {
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
