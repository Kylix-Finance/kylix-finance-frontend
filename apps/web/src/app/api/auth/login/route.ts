import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";
import { SignJWT } from "jose";

export async function POST(request: NextRequest) {
  const { password } = await request.json();
  if (password === process.env!.NEXT_PUBLIC_PASSWORD) {
    const secret = new TextEncoder().encode(
      process.env!.NEXT_PUBLIC_JWT_SECRET
    );
    const token = await new SignJWT({ authenticated: true })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")
      .sign(secret);

    const response = NextResponse.json({
      message: "Authentication successful",
    });
    response.headers.set(
      "Set-Cookie",
      serialize("token", token, {
        path: "/",
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24 * 30, //
      })
    );

    return response;
  } else {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }
}
