import { NextRequest, NextResponse } from "next/server";
import { ReactNode } from "react";

export type Middleware = (req: NextRequest) => Promise<NextResponse | void>;
export type Locale = "en" | "se" | "ar";
export type Theme = "light" | "dark" | "system";

export interface DataAttributes {
    [key: `data-${string}`]: string | number | boolean;
}

export type NotificationType =
    | "information"
    | "warning"
    | "error"
    | "success"
    | "message";

export type NotificationParams = {
    mode: NotificationType;
    message: string;
    title: string;
};

export interface ButtonGroupTab<T> {
    content: ReactNode;
    value: T;
}
