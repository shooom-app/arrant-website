import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  timeout: 30000,
  reporter: 'list',
  use: { baseURL: 'http://localhost:3000' },
  webServer: { 
    command: 'npm run dev', 
    url: 'http://localhost:3000', 
    reuseExistingServer: true, 
    timeout: 60000 
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
