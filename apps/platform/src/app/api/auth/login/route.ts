import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PASSWORD_PROTECTION_COOKIE_NAME } from "~/constants";
import { SignJWT } from "jose";
import { ENV } from "~/config/env";

export async function POST(request: NextRequest) {
  const { password } = await request.json();
  if (password === ENV.APP_ACCESS_PASSWORD) {
    const maxCookieLifetime = 365 * 24 * 60 * 60 * 100;

    const secret = new TextEncoder().encode(ENV.JWT_SECRET);
    const token = await new SignJWT({ authenticated: true })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime(`${maxCookieLifetime}s`)
      .sign(secret);
    (await cookies()).set(PASSWORD_PROTECTION_COOKIE_NAME, token, {
      path: "/",
      httpOnly: true,
      secure: true,
      maxAge: maxCookieLifetime,
      sameSite: "lax",
    });
    return NextResponse.json(null, { status: 200 });
  } else {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }
}
