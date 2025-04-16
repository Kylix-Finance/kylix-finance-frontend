import { NextRequest, NextResponse } from "next/server";
import { isUserAuthenticated } from "~/utils/isUserAuthenticated";
import { Middleware } from "~/types";
import { ENV } from "~/config/env";
export const withPasswordProtection = (middleware: Middleware): Middleware => {
  return async (request: NextRequest) => {
    if (!ENV.IS_PRODUCTION) {
      return middleware(request);
    }

    const isAuthenticated = await isUserAuthenticated(request);

    const passwordPage = "/auth/login";

    if (!isAuthenticated && request.nextUrl.pathname !== passwordPage) {
      return NextResponse.redirect(new URL(passwordPage, request.url));
    }

    if (isAuthenticated && request.nextUrl.pathname === passwordPage) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return middleware(request);
  };
};
