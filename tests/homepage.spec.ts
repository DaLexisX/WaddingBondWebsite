import { test, expect } from '@playwright/test';

test('homepage shows hero and navigation', async ({ page }) => {
  // If you run `pnpm exec playwright test` with webServer configured in playwright.config,
  // Playwright will use the baseURL below and you can just pass '/'.
  await page.goto('http://localhost:3000/');

  // Check the site title is rendered in the browser tab.
  await expect(page).toHaveTitle(/wadding|bond/i);

  // Check that the top navigation is visible and contains key links.
  const nav = page.getByRole('navigation');
  await expect(nav).toBeVisible();

  // These labels match your current Navbar component.
  const expectedLinks = [/home/i, /projects/i, /skills/i, /experience/i, /contact/i];
  for (const link of expectedLinks) {
    await expect(nav.getByRole('link', { name: link })).toBeVisible();
  }
});


