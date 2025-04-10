import { NextRequest, NextResponse } from "next/server";
import { withNextIntl } from "./middlewares/withNextIntl"
async function main(req: NextRequest) {
    return NextResponse.next()
}
export const middleware = withNextIntl(main);
export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};