/**
 * Fallback security headers for any route or asset not processed by middleware.
 * Why: Ensure baseline protection (HSTS, XFO, Referrer-Policy, Permissions-Policy)
 * even if middleware is bypassed or for static assets.
 * Note: Existing CSP and other headers are preserved; CSP changes will be handled separately.
 */
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "img-src 'self' data: blob:",
      // Allow inline during development and Next dev client websocket/eval
      `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""}`.trim(),
      "style-src 'self' 'unsafe-inline'",
      `connect-src 'self' ${isDev ? "ws:" : ""}`.trim(),
      "form-action 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "upgrade-insecure-requests"
    ].join("; ")
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() { return [{ source: "/:path*", headers: securityHeaders }]; }
};

export default nextConfig;
