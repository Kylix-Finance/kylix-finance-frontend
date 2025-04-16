import { NextRequest, NextResponse } from "next/server";
import { withNextIntl } from "./middlewares/withNextIntl"
import { withPasswordProtection } from "./middlewares/withPasswordProtection"
async function main(req: NextRequest) {
    return NextResponse.next()
}
export const middleware = withPasswordProtection(withNextIntl(main));
export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};