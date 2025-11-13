import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.WAITLIST_KEY || "",
      },
      body: JSON.stringify({
        email,
        listIds: [2],
        updateEnabled: false,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to create contact" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error) {
    console.log("contacts:POST", error);

    return NextResponse.json(
      { error: "Failed to create contact" },
      { status: 500 }
    );
  }
}
