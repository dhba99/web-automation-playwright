import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    baseURL: 'https://www.saucedemo.com',
    viewport: { width: 1280, height: 720 }
  },
});