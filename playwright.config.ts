import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // your test folder
  timeout: 30 * 1000, // 30 seconds per test
  retries: 0,

  use: {
    headless: true, // important for Codespaces / CI (no X11)
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
});
