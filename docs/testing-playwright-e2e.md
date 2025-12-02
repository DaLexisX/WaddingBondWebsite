## Playwright (End-to-End Testing)

This project uses **Playwright Test** for end-to-end (E2E) testing.

Think of E2E tests as **“robot browser tests”**: Playwright launches a real browser, opens your site, clicks around, and asserts that the user can accomplish key flows.

This guide covers:

- **What Playwright is and where it lives in this repo**
- **How the example homepage test works**
- **How to run E2E tests**
- **How to write your own E2E tests**

---

### What Playwright Is

Playwright:

- Launches **real browsers** (Chromium, Firefox, WebKit).
- Drives them via code:
  - `page.goto('/')`
  - `page.getByRole('link', { name: 'Projects' }).click()`
  - `expect(page).toHaveTitle(/Projects/i)`
- Gives you a test runner (`@playwright/test`) with:
  - Parallelization across browsers and tests.
  - HTML reports and traces.

The main config file in this repo is `playwright.config.ts`:

```14:40:playwright.config.ts
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

Key ideas:

- **`testDir: './tests'`** – all Playwright tests live under the `tests/` folder.
- **`use.baseURL`** – you can call `page.goto('/')` instead of hardcoding `http://localhost:3000/`.
- **`projects`** – same tests run in **Chromium**, **Firefox**, and **WebKit**.
- **`webServer`**:
  - Before tests run, Playwright will execute `pnpm dev`.
  - It waits for `http://localhost:3000` to respond.
  - Locally, it will **reuse** an existing dev server if you already have `pnpm dev` running.

---

### Example E2E Test: Homepage Navigation

Example file: `tests/homepage.spec.ts`

```1:20:tests/homepage.spec.ts
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
```

#### How this test works conceptually

- **`test('homepage shows hero and navigation', async ({ page }) => { ... })`**
  - `test` comes from `@playwright/test`.
  - The test function receives a `page` object which represents a single browser tab.
- **`await page.goto('http://localhost:3000/')`**
  - Navigates the browser to your local Next.js site.
  - Because we also set `baseURL` in the config, you *could* write `await page.goto('/')` instead.
- **`await expect(page).toHaveTitle(/wadding|bond/i)`**
  - Asserts that the browser tab’s title contains your name.
  - The `/.../i` regex makes the assertion case-insensitive and a bit flexible.
- **`const nav = page.getByRole('navigation');`**
  - Locates the `<nav>` element by its ARIA role, not CSS selector.
  - This keeps the test stable, even if classes or structure change.
- **Loop over expected links**
  - Your `Navbar` component defines nav items (`Home`, `Projects`, `Skills`, `Experience`, `Contact`).
  - For each expected label, we assert a link with that `name` is visible _inside_ the nav.
  - If you rename or remove a link, this test will fail and point you to broken main navigation.

This is a **good E2E test** because:

- It covers a **critical smoke path** (landing on the homepage and seeing navigation).
- It’s high-level and user-centric.
- It doesn’t depend on implementation details (no CSS selectors, only roles and names).

---

### How to Run Playwright Tests

You have two options:

#### Option 1: PowerShell Script (Recommended for Windows)

Use the `test.ps1` script for a unified test runner:

```powershell
# Run all tests (unit + E2E)
.\test.ps1

# Run only E2E tests
.\test.ps1 -E2E

# Run only unit tests
.\test.ps1 -Unit
```

#### Option 2: Direct pnpm Commands

Make sure you've installed dependencies (already done when scaffolding Playwright):

```bash
pnpm install
```

**Run the full E2E suite:**

```bash
pnpm exec playwright test
```

- This will:
  - Start your dev server via `pnpm dev` (unless one is already running).
  - Run all tests under `tests/` across all configured browsers (chromium, firefox, webkit).
  - Produce an HTML report.

**Run a single file** (e.g. the homepage test):

```bash
pnpm exec playwright test homepage
```

- Because the test file is named `homepage.spec.ts`, `homepage` is enough to match it.

**View the HTML report:**

After a run, Playwright will tell you how to open the report. Typically:

```bash
pnpm exec playwright show-report
```

This opens a local site with:

- Per-test pass/fail status.
- Per-browser results.
- Screenshots, traces, and logs when enabled.

---

### Writing Your Own E2E Test (Recipe)

1. **Decide on a user flow** you care about.
   - Examples:
     - “User can navigate from Home → Projects → a specific project.”
     - “User can submit the Contact form and see a thank-you page.”
2. **Create a new spec file** under `tests/`:
   - `tests/contact-form.spec.ts`
3. **Use `page` to navigate and interact**

Example sketch for a future Contact form test:

```ts
import { test, expect } from '@playwright/test';

test('user can go to contact page from navbar', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: /contact/i }).click();
  await expect(page).toHaveURL(/\/contact$/);

  await expect(page.getByRole('heading', { name: /contact/i })).toBeVisible();
});
```

4. **Run just that test while iterating**

```bash
pnpm exec playwright test contact-form
```

5. Once it’s green, run the full suite again.

---

### When to Use E2E vs Component Tests

- **Component / Unit tests (Vitest + RTL)**:
  - Small surface area (single component).
  - Run very fast.
  - Great for pure logic and local rendering (e.g. `DevOpsJourney` pipeline steps).
- **E2E tests (Playwright)**:
  - Large surface area (full app stack).
  - Slower and more resource-intensive.
  - Great for verifying that pages load and key flows work end-to-end.

Rule of thumb:

- Use **Vitest + RTL** for most of your UI and logic.
- Use **Playwright** for a smaller number of **high-value user journeys**.

---

### Summary (E2E Testing)

- **Playwright** drives real browsers to test your app like a user.
- Config: `playwright.config.ts` (test directory, baseURL, browsers, dev server).
- Example: `tests/homepage.spec.ts` checks title + navbar links across Chromium, Firefox, and WebKit.
- Run tests with `pnpm exec playwright test` and inspect results with `pnpm exec playwright show-report`.


