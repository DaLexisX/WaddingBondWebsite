## Vitest + React Testing Library (Unit & Component Testing)

This project uses **Vitest** as the test runner and **React Testing Library (RTL)** for testing React components in a way that’s close to how a user interacts with the UI.

This guide focuses on:

- **What** Vitest + RTL are
- **How the example test works**
- **How to run and write your own tests**

---

### What Vitest Is

- **Vitest** is a fast test runner built on top of Vite.
- It’s conceptually similar to Jest (same style of `describe`, `it`, `expect`), but is optimized for modern ESM + TypeScript setups.
- In this project, Vitest:
  - Loads TypeScript with your existing `tsconfig.json`.
  - Uses a browser-like environment (`jsdom`) so DOM APIs (like `document`, `window`) are available.
  - Understands your `@/` path alias.

Key configuration file: `vitest.config.mts`:

```12:27:vitest.config.mts
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
});
```

- **`globals: true`** – lets you write `describe`, `it`, `expect` without importing them.
- **`environment: 'jsdom'`** – provides a fake browser DOM for component tests.
- **`setupFiles`** – runs once before all tests (we use this to install Jest-DOM matchers and stubs).
- **`include`** – any `*.test.tsx` or `*.spec.tsx` under `src/` will be picked up.

---

### What React Testing Library Is

React Testing Library:

- Renders your component into the JSDOM and lets you **query like a user would**:
  - `getByRole('button', { name: /submit/i })`
  - `getByText(/Deployment Pipeline/i)`
- Encourages **black-box testing**:
  - Avoids shallow-render implementation details.
  - Focuses on visible text, ARIA roles, and user flows.

RTL is set up via `vitest.setup.ts`:

```1:22:vitest.setup.ts
import '@testing-library/jest-dom';

// Framer Motion's viewport features rely on IntersectionObserver, which JSDOM doesn't provide.
// For unit tests we don't care about the actual intersection behaviour, so we add a minimal stub.
if (!('IntersectionObserver' in globalThis)) {
  (globalThis as any).IntersectionObserver = class IntersectionObserver {
    callback: IntersectionObserverCallback;
    constructor(callback: IntersectionObserverCallback) {
      this.callback = callback;
    }
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  };
}
```

- `@testing-library/jest-dom` adds readable matchers like `toBeInTheDocument`, `toBeVisible`.
- The `IntersectionObserver` stub is needed because **Framer Motion** uses it but `jsdom` doesn’t provide it. For tests we just need it not to throw.

---

### Example Component Test: `DevOpsJourney`

Example file: `src/components/DevOpsJourney.test.tsx`

```1:32:src/components/DevOpsJourney.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Architecture from './DevOpsJourney';

describe('DevOpsJourney Architecture page', () => {
  it('renders the main heading and hero copy', () => {
    render(<Architecture />);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /the deployment pipeline/i,
    });

    expect(heading).toBeInTheDocument();
    expect(
      screen.getByText(/multi-stage docker build pipeline on google cloud/i),
    ).toBeInTheDocument();
  });

  it('renders all 5 pipeline steps in order', () => {
    render(<Architecture />);

    const stepTitles = [
      /local trigger & context filter/i,
      /cloud build ingestion/i,
      /docker builder stage/i,
      /docker runner stage/i,
      /cloud run deployment/i,
    ];

    stepTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
```

#### How this test works (line-by-line intuition)

- **Imports**
  - `render` – mounts the React component into a fake DOM.
  - `screen` – a global query object (recommended instead of destructuring `const { getByText } = render(...)`).
- **`render(<Architecture />)`**
  - Renders your `DevOpsJourney` page component exactly like Next.js would on the client side, including Framer Motion animations, `Badge`, etc.
- **`screen.getByRole('heading', { level: 1, name: /the deployment pipeline/i })`**
  - `getByRole` queries by **ARIA role**, which is how assistive technologies see the page.
  - `heading` with `level: 1` means `<h1>`.
  - `name` is the accessible name (inner text for headings); using a regex makes the test a bit more flexible.
- **Matchers**
  - `toBeInTheDocument` comes from Jest-DOM; it asserts that the element exists inside the rendered DOM.
- **Pipeline steps test**
  - We render again (each test is independent).
  - `stepTitles` is a list of regexes matching the text you show for each pipeline step.
  - `screen.getByText(title)` finds an element where the text content matches the given regex.
  - If any step is missing or renamed, this test will fail.

This is a **good example test** because:

- It checks important user-facing content (title and steps).
- It’s resilient to refactors: you can rearrange markup as long as headings and text stay the same.
- It doesn’t care about implementation details (no snapshots, no CSS class names).

---

### How to Run Vitest Tests

You have two options:

#### Option 1: PowerShell Script (Recommended for Windows)

Use the `test.ps1` script for a unified test runner:

```powershell
# Run all tests (unit + E2E)
.\test.ps1

# Run only unit/component tests
.\test.ps1 -Unit

# Run in watch mode (auto-rerun on file changes)
.\test.ps1 -Unit -Watch

# Open interactive UI
.\test.ps1 -Unit -UI

# Generate coverage report
.\test.ps1 -Unit -Coverage
```

#### Option 2: Direct pnpm Commands

From the project root:

- **Run all tests once**

```bash
pnpm test:run
```

- **Run in watch mode** (re-runs on file change)

```bash
pnpm test:watch
```

- **Visual UI mode**

```bash
pnpm test:ui
```

- **Generate coverage report**

```bash
pnpm test:coverage
```

> Under the hood these scripts are defined in `package.json`:

```9:18:package.json
"scripts": {
  "test": "vitest",
  "test:watch": "vitest --watch",
  "test:ui": "vitest --ui",
  ...
}
```

---

### Writing Your Own Component Test (Step-by-Step)

Here’s a mental model and recipe for adding a new test:

1. **Pick a component** (for example `Navbar`).
2. **Identify a behavior** that matters to a user.
   - Example: “Navbar highlights the active route”.
3. **Create a `*.test.tsx` file next to the component**:
   - `src/components/Navbar.test.tsx`
4. **Render the component and assert on the DOM**:

Example sketch:

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('shows the Home link', () => {
    render(<Navbar />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeVisible();
  });
});
```

5. **Run the tests** with `pnpm test` or `pnpm test:watch`.

If you run into missing browser APIs (like `IntersectionObserver`, `ResizeObserver`), the place to stub them is `vitest.setup.ts`. This keeps tests focused on behavior, not on low-level browser support.

---

### Summary (Unit & Component Testing)

- **Vitest**: test runner executing tests in a `jsdom` environment with TypeScript + ESM.
- **React Testing Library**: renders components and lets you query/verify the DOM like a user.
- **Good practice**: assert on roles, text, and behaviors instead of implementation details.
- Start by:
  - Copying `DevOpsJourney.test.tsx` as a template.
  - Focusing on one meaningful behavior per test (`it(...)` block).


