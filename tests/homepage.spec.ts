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

test('homepage navigation links work correctly', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const nav = page.getByRole('navigation');

  // Test Projects link - click and verify navigation
  const projectsLink = nav.getByRole('link', { name: /projects/i });
  await projectsLink.click();
  await expect(page).toHaveURL(/\/projects/);
  await expect(page.getByRole('heading', { name: /projects/i })).toBeVisible();

  // Navigate back to homepage
  await page.goto('/');
  
  // Test Skills link - click and verify navigation
  const skillsLink = nav.getByRole('link', { name: /skills/i });
  await skillsLink.click();
  await expect(page).toHaveURL(/\/skills/);
  await expect(page.getByRole('heading', { name: /my skills/i })).toBeVisible();

  // Navigate back to homepage
  await page.goto('/');
  
  // Test Contact link - click and verify navigation
  const contactLink = nav.getByRole('link', { name: /contact/i });
  await contactLink.click();
  await expect(page).toHaveURL(/\/contact/);
  // Contact page should load (we're just verifying navigation works)
});


