import { NextResponse } from "next/server";

const SHEET_LINK = process.env.GOOGLE_SCRIPT_LINK || ""

if (!SHEET_LINK) {
  throw new Error("link is not defined");
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const type = searchParams.get("type");
    const search = searchParams.get("search");

    if (!type || !search) {
      return NextResponse.json(
        {
          success: false,
          message: "type and search are required",
        },
        { status: 400 }
      );
    }

    const url =
      `${SHEET_LINK}?type=${encodeURIComponent(type)}` +
      `&search=${encodeURIComponent(search)}`;

    console.log("Calling Google Script:", url);

    const response = await fetch(url);

    console.log("Google response status:", response.status);

    const text = await response.text();

    console.log("Google response:", text);

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Google Script request failed",
          status: response.status,
          response: text,
        },
        { status: 500 }
      );
    }

    const data = JSON.parse(text);

    return NextResponse.json(data);

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error
          ? error.message
          : "Server error",
      },
      { status: 500 }
    );
  }
}
