/**
 * Attaches core security headers to every HTML response.
 * Note: Static assets are excluded via matcher for performance.
 * Adjust or remove headers here if a specific page needs different behavior.
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { applySecurityHeaders } from "./src/lib/security/headers";

export function middleware(_req: NextRequest) {
  const res = NextResponse.next();
  // Disallow indexing of API routes
  if (_req.nextUrl.pathname.startsWith("/api/")) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return applySecurityHeaders(res);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};


