const WINDOW_MS = 60_000; // 1 minute
const MAX_REQ = 10;       // per IP per minute
const store = new Map<string, { count: number; reset: number }>();

export function rateLimit(ip = "anon"): boolean {
  const now = Date.now();
  const rec = store.get(ip);
  if (!rec || now > rec.reset) { store.set(ip, { count: 1, reset: now + WINDOW_MS }); return true; }
  rec.count++;
  if (rec.count > MAX_REQ) return false;
  store.set(ip, rec);
  return true;
}

export function ipFromHeaders(headers: Headers) {
  const xfwd = headers.get("x-forwarded-for") || "";
  return xfwd.split(",")[0].trim() || "anon";
}


