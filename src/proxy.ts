// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// CHANGE "en" TO "en-US"
const SUPPORTED_LOCALES = ["en", "fr"];
const DEFAULT_LOCALE = "en";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = DEFAULT_LOCALE;
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|assets|.*\\..*).*)"],
};
