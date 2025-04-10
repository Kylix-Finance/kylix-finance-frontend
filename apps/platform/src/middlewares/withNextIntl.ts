import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { Middleware } from '~/types';
import { locales } from "~/constants/locales"
const intlMiddleware = createMiddleware({
    locales,
    defaultLocale: 'en',
    localePrefix: "as-needed"
});

export function withNextIntl(middleware: Middleware): Middleware {
    return async (request: NextRequest) => {
        const response = intlMiddleware(request);
        if (response) return response;
        return middleware(request);
    };
}