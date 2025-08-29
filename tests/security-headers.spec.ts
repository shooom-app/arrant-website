import { test, expect } from '@playwright/test';

test('site sends core security headers', async ({ request, baseURL }) => {
  const res = await request.get(`${baseURL}/`);
  expect(res.status()).toBeLessThan(500);
  
  const h = res.headers();
  expect(h['strict-transport-security']).toBe('max-age=63072000; includeSubDomains; preload');
  expect(h['x-frame-options']).toBe('DENY');
  expect(h['referrer-policy']).toBe('strict-origin-when-cross-origin');
  expect(h['permissions-policy']).toBe('camera=(), microphone=(), geolocation()');
  expect(h['x-content-type-options']).toBe('nosniff');
});


