/**
 * Safe logging utility that redacts PII and truncates long payloads.
 * Why: Prevent accidental logging of emails, phones, and large request bodies.
 * Usage: Replace console.log/error with logInfo/logWarn/logError in server code.
 */
const redact = (v: unknown): string => {
  const s = typeof v === 'string' ? v : JSON.stringify(v ?? '', (_k, val) => (typeof val === 'bigint' ? val.toString() : val));
  const short = s && s.length > 500 ? '[redacted-long]' : (s || '');
  return short
    .replace(/([A-Z0-9._%+-]+)@([A-Z0-9.-]+\.[A-Z]{2,})/gi, '[redacted-email]')
    .replace(/\b\+?\d[\d\s().-]{7,}\b/g, '[redacted-phone]');
};

export const logInfo = (...args: unknown[]) => { 
  if (process.env.NODE_ENV !== 'production') console.info('[info]', ...args.map(redact)); 
};

export const logWarn = (...args: unknown[]) => console.warn('[warn]', ...args.map(redact));

export const logError = (...args: unknown[]) => console.error('[error]', ...args.map(redact));
