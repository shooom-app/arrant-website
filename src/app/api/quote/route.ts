/**
 * Quote API hardening
 * - Payload cap: reject content-length > 100KB to prevent resource abuse
 * - Rate limiting: basic per-IP limiter (10 req/min) from lib
 * - Redacted logging: use logInfo so emails/phones never appear in logs
 */
import { NextResponse } from "next/server";
import { rateLimit, ipFromHeaders } from "@/lib/rateLimit";
import { quoteSchema } from "@/lib/quoteSchema";
import { logInfo } from "@/lib/security/logger";

export async function POST(req: Request) {
  const ip = ipFromHeaders(req.headers);
  if (!rateLimit(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  // Payload cap – avoid large-body abuse before attempting to parse JSON
  const len = Number(req.headers.get("content-length") || "0");
  if (Number.isFinite(len) && len > 100_000) {
    return NextResponse.json({ ok: false, error: "Payload too large" }, { status: 413 });
  }

  let body: unknown = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  // Honeypot: if bots fill this, silently accept & drop
  if (
    typeof body === "object" && body !== null &&
    "website" in body && typeof (body as Record<string, unknown>).website === "string" &&
    ((body as Record<string, string>).website).length > 0
  ) {
    return NextResponse.json({ ok: true });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 400 });
  }

  // Minimal, redacted logging (emails/phones scrubbed; long payloads truncated)
  logInfo("QUOTE REQUEST", {
    ip,
    pickup: parsed.data.pickupAddress,
    dropoff: parsed.data.dropoffAddress,
    weight: parsed.data.weight,
  });

  // TODO: email/CRM integration (keep keys in .env.local)
  return NextResponse.json({ ok: true });
}


