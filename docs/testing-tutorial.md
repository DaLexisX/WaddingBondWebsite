# Testing Tutorial: Where Tests Live & How to Create New Ones

This tutorial walks you through the testing setup, shows where tests live, and demonstrates creating new tests for both Vitest (unit/component) and Playwright (E2E).

---

## 📁 Where Test Files Live

### Unit & Component Tests (Vitest + RTL)

**Location**: Next to the component files they test

```
src/
  components/
    DevOpsJourney.tsx          ← Component
    DevOpsJourney.test.tsx     ← Test file (same name + .test.tsx)
    Navbar.tsx
    Navbar.test.tsx            ← We'll create this!
```

**Naming convention**: `ComponentName.test.tsx` or `ComponentName.spec.tsx`

**Why next to components?**
- Easy to find
- Clear relationship
- Easy to refactor together

### End-to-End Tests (Playwright)

**Location**: `tests/` folder at project root

```
tests/
  homepage.spec.ts             ← Tests the homepage
  skills.spec.ts                ← We'll create this!
  example.spec.ts               ← Playwright's example (can delete)
```

**Naming convention**: `*.spec.ts` (Playwright convention)

**Why separate folder?**
- E2E tests test entire pages/flows, not individual components
- Keeps them organized separately from unit tests
- Matches Playwright's standard structure

---

## 🔍 How Existing Tests Work

### Example 1: Vitest Component Test

**File**: `src/components/DevOpsJourney.test.tsx`

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import Architecture from './DevOpsJourney';

describe('DevOpsJourney Architecture page', () => {
  it('renders the main heading and hero copy', () => {
    // 1. Render the component (like React would)
    render(<Architecture />);

    // 2. Query for elements (by role, text, etc.)
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /the deployment pipeline/i,
    });

    // 3. Assert what should be true
    expect(heading).toBeInTheDocument();
  });
});
```

**What's happening:**
1. **`render(<Architecture />)`** - Mounts component in fake DOM (jsdom)
2. **`screen.getByRole(...)`** - Finds element by accessibility role (user-friendly!)
3. **`expect(...).toBeInTheDocument()`** - Asserts element exists

**Why test this?**
- Ensures the page title renders (critical content)
- Catches regressions if someone breaks the heading
- Verifies accessibility (using `getByRole`)

### Example 2: Playwright E2E Test

**File**: `tests/homepage.spec.ts`

```typescript
import { test, expect } from '@playwright/test';

test('homepage shows hero and navigation', async ({ page }) => {
  // 1. Navigate to the page (real browser!)
  await page.goto('http://localhost:3000/');

  // 2. Check page title
  // /wadding|bond/i means: match "wadding" OR "bond" (case-insensitive)
  // The | is "OR" in regex, /i makes it case-insensitive
  await expect(page).toHaveTitle(/wadding|bond/i);

  // 3. Find navigation and verify links
  const nav = page.getByRole('navigation');
  await expect(nav).toBeVisible();

  // /home/i means: match "home" (case-insensitive - matches "Home", "HOME", "home")
  const expectedLinks = [/home/i, /projects/i, /skills/i];
  for (const link of expectedLinks) {
    await expect(nav.getByRole('link', { name: link })).toBeVisible();
  }
});
```

**What's happening:**
1. **`page.goto(...)`** - Opens real browser, navigates to URL
2. **`page.getByRole('navigation')`** - Finds nav element by accessibility role (see "Roles" explanation below)
3. **`expect(...).toBeVisible()`** - Asserts element is **actually visible** (not just in DOM)

**Key difference from Vitest:**
- **Vitest**: `.toBeInTheDocument()` - checks if element exists in fake DOM
- **Playwright**: `.toBeVisible()` - checks if element is **actually visible** in real browser (not hidden by CSS, etc.)

**Why test this?**
- Verifies critical user flow (landing on homepage)
- Ensures navigation works (users can navigate)
- Tests across browsers (Chromium, Firefox, WebKit)
- Tests real browser rendering (CSS, visibility, etc.)

> **See `docs/testing-concepts-explained.md` for detailed explanations of:**
> - What are "roles" in `getByRole()`?
> - What does `/i` mean in regex?
> - What does `|` (pipe) mean in regex?
> - When to use Vitest vs Playwright?

---

## ✨ Creating a New Vitest Test: Navbar Component

Let's create a test for the `Navbar` component to verify it renders navigation links correctly.

### Step 1: Create the Test File

Create `src/components/Navbar.test.tsx` next to `Navbar.tsx`.

### Step 2: Write the Test

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

// Mock Next.js router hooks (Navbar uses usePathname)
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />);

    // Check that all expected nav items are present
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('renders the site name/brand', () => {
    render(<Navbar />);
    
    expect(screen.getByText(/douglas wadding-bond/i)).toBeInTheDocument();
  });
});
```

**Why test this?**
- Navigation is critical - if links break, users can't navigate
- Catches regressions if someone removes/renames a link
- Verifies brand name appears (important for branding)

### Step 3: Run the Test

```powershell
.\test.ps1 -Unit
# or
pnpm test:run
```

---

## 🌐 Creating a New Playwright Test: Skills Page

Let's create an E2E test that verifies the Skills page loads and displays content correctly.

### Step 1: Create the Test File

Create `tests/skills.spec.ts` in the `tests/` folder.

### Step 2: Write the Test

```typescript
import { test, expect } from '@playwright/test';

test('skills page displays all skill sections', async ({ page }) => {
  // Navigate to skills page
  await page.goto('/skills');

  // Check page title
  await expect(page).toHaveTitle(/skills/i);

  // Verify main heading
  await expect(page.getByRole('heading', { name: /my skills/i })).toBeVisible();

  // Check that major skill categories are present
  await expect(page.getByRole('heading', { name: /programming languages/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /web & front-end/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /mobile development/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /back-end & apis/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /cloud & devops/i })).toBeVisible();
});

test('skills page navigation works', async ({ page }) => {
  await page.goto('/skills');

  // Click on a skill badge (if clickable)
  // Or verify links to other pages work
  const contactLink = page.getByRole('link', { name: /get in touch/i });
  await expect(contactLink).toBeVisible();
  
  // Click and verify navigation
  await contactLink.click();
  await expect(page).toHaveURL(/\/contact/);
});
```

**Why test this?**
- Skills page is important (shows your expertise)
- Verifies content loads correctly
- Tests user can navigate from skills to contact
- Runs across browsers (catches browser-specific issues)

### Step 3: Run the Test

```powershell
.\test.ps1 -E2E
# or
pnpm exec playwright test skills
```

---

## 🎯 When to Use Which Test Type?

### Use Vitest (Unit/Component) When:
- ✅ Testing individual components in isolation
- ✅ Testing logic/calculations
- ✅ Testing component rendering
- ✅ Fast feedback during development
- ✅ Testing edge cases
- ✅ Testing component behavior (clicks, state changes)

**Example**: Testing that a button component renders correctly, or that a form validates input.

**Key difference:** Uses `.toBeInTheDocument()` - checks if element exists in fake DOM

### Use Playwright (E2E) When:
- ✅ Testing complete user flows
- ✅ Testing page navigation
- ✅ Testing across browsers
- ✅ Testing real user interactions
- ✅ Testing production-like scenarios
- ✅ Testing CSS/styling (visibility, layout)
- ✅ Testing full app integration

**Example**: Testing that a user can navigate from homepage → projects → contact and submit a form.

**Key difference:** Uses `.toBeVisible()` - checks if element is **actually visible** in real browser

### Critical Difference: `.toBeInTheDocument()` vs `.toBeVisible()`

**Vitest:**
```typescript
expect(screen.getByRole('link')).toBeInTheDocument();
// ✅ Passes if element exists in DOM (even if hidden by CSS)
```

**Playwright:**
```typescript
await expect(page.getByRole('link')).toBeVisible();
// ✅ Passes only if element is actually visible (not hidden, not covered)
```

> **See `docs/testing-concepts-explained.md` for a detailed comparison and examples.**

---

## 🚀 Quick Reference

### Run Tests

```powershell
# All tests
.\test.ps1

# Unit tests only
.\test.ps1 -Unit

# E2E tests only
.\test.ps1 -E2E

# Watch mode (unit tests)
.\test.ps1 -Unit -Watch
```

### Test File Locations

- **Vitest**: `src/**/*.test.tsx` (next to components)
- **Playwright**: `tests/*.spec.ts` (separate folder)

### Key Testing Principles

1. **Test user behavior, not implementation**
   - ✅ `getByRole('button', { name: 'Submit' })`
   - ❌ `getByTestId('submit-btn')`

2. **Test what matters**
   - ✅ Critical user flows
   - ✅ Important content
   - ❌ Implementation details

3. **Keep tests simple**
   - One test = one behavior
   - Clear test names
   - Easy to understand

---

## 📚 Next Steps

1. **Create the Navbar test** (see example above)
2. **Create the Skills page E2E test** (see example above)
3. **Run them**: `.\test.ps1`
4. **Add more tests** as you build features

Remember: Tests are documentation! They show how your code should work.

