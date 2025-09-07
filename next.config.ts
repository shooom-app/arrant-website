/**
 * Fallback security headers for any route or asset not processed by middleware.
 * Why: Ensure baseline protection (HSTS, XFO, Referrer-Policy, Permissions-Policy)
 * even if middleware is bypassed or for static assets.
 * Note: Existing CSP and other headers are preserved; CSP changes will be handled separately.
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Apply core security headers here as a fallback to ensure tests/dev also receive them consistently.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation()" },
        ],
      },
    ];
  },
};

export default nextConfig;
