/**
 * Security headers used sitewide.
 * Why:
 * - HSTS: force HTTPS (2 years), include subdomains, allow preload list.
 * - X-Frame-Options: block clickjacking via iframes.
 * - Referrer-Policy: limit outgoing referrer data.
 * - Permissions-Policy: disable unused device features by default.
 */
import { NextResponse } from "next/server";

export const SECURITY_HEADERS: Record<string, string> = {
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

export function applySecurityHeaders(res: NextResponse) {
  for (const [k, v] of Object.entries(SECURITY_HEADERS)) res.headers.set(k, v);
  return res;
}


