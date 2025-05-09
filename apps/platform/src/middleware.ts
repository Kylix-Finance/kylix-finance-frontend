import { NextRequest, NextResponse } from "next/server";
import { withPasswordProtection } from "./middlewares/withPasswordProtection";
async function main(req: NextRequest) {
  return NextResponse.next();
}
export const middleware = withPasswordProtection(main);
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
