import { NextRequest, NextResponse } from "next/server";

export type Middleware = (req: NextRequest) => Promise<NextResponse | void>;
export type Locale = "en" | "se" | "ar"