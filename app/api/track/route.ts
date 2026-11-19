
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const SHEET_LINK = process.env.GOOGLE_SCRIPT_LINK;

    if (!SHEET_LINK) {
      return NextResponse.json(
        {
          success: false,
          message: "GOOGLE_SCRIPT_LINK is not configured",
        },
        { status: 500 }
      );
    }

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

    const response = await fetch(url, {
      cache: "no-store",
      redirect: "follow",
    });

    const text = await response.text();

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
    console.error("GET API error:", error);

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
