# Testing Concepts Explained

This guide explains key testing concepts used in Vitest and Playwright tests.

---

## 1. What Are "Roles" in `getByRole()`?

### What is a Role?

A **role** is an **accessibility concept** that describes what an element *does*, not what it *looks like*.

Roles come from **ARIA (Accessible Rich Internet Applications)** standards. They tell screen readers and assistive technologies what each element's purpose is.

### Common Roles

| HTML Element | ARIA Role | What It Means |
|--------------|-----------|---------------|
| `<button>` | `button` | Clickable button |
| `<a href="...">` | `link` | Navigation link |
| `<nav>` | `navigation` | Navigation menu |
| `<h1>`, `<h2>`, etc. | `heading` | Page heading |
| `<input type="text">` | `textbox` | Text input field |
| `<img alt="...">` | `img` | Image |
| `<main>` | `main` | Main content area |

### Why Use Roles Instead of CSS Selectors?

**Bad (CSS selector):**
```typescript
screen.getByTestId('nav-link-home')  // ❌ Implementation detail
screen.querySelector('.nav-link')     // ❌ Breaks if CSS changes
```

**Good (Role):**
```typescript
screen.getByRole('link', { name: /home/i })  // ✅ User-friendly
```

**Benefits:**
- Tests what users actually interact with
- Works even if you change CSS classes
- Tests accessibility (if role is wrong, accessibility is broken)
- More resilient to refactoring

### Example from Your Code

```typescript
// Navbar.test.tsx
screen.getByRole('link', { name: /home/i })
```

**What this does:**
1. Finds an element with role `'link'` (an `<a>` tag)
2. That has accessible name matching `/home/i` (text content "Home")
3. Returns that element

**Why this is better:**
- If you change `<a>` to `<button>` with `role="link"`, test still works
- If you rename CSS class, test still works
- Tests what screen readers see (accessibility)

---

## 2. The Pipe `|` in Regex (`/wadding|bond/i`)

### What is `|`?

The pipe `|` means **"OR"** in regular expressions (regex).

### Example: `/wadding|bond/i`

This regex means: **"match 'wadding' OR 'bond'"**

```typescript
/wadding|bond/i
```

**Matches:**
- ✅ "wadding" 
- ✅ "bond"
- ✅ "Wadding" (case-insensitive due to `/i`)
- ✅ "Bond"
- ✅ "wadding-bond"
- ✅ "Douglas Wadding-Bond"

**Doesn't match:**
- ❌ "wadd" (incomplete)
- ❌ "bon" (incomplete)

### Why Use It?

In your test:
```typescript
await expect(page).toHaveTitle(/wadding|bond/i);
```

**This checks:** Does the page title contain "wadding" **OR** "bond"?

**Why flexible?**
- Title might be "Douglas Wadding-Bond | Portfolio"
- Or "Wadding-Bond - Developer"
- Or just "Bond"
- Test passes for any of these variations

### More Regex Examples

```typescript
// Match "home" OR "Home" OR "HOME"
/home|Home|HOME/i

// Match "contact" OR "get in touch"
/contact|get in touch/i

// Match any number
/\d+/  // \d = digit, + = one or more
```

---

## 3. What Does `/i` Mean in Regex?

### Case-Insensitive Flag

The `/i` at the end of a regex makes it **case-insensitive**.

### Without `/i`:
```typescript
/home/   // Matches: "home"
          // Doesn't match: "Home", "HOME", "HoMe"
```

### With `/i`:
```typescript
/home/i  // Matches: "home", "Home", "HOME", "HoMe", "hOmE"
```

### Examples from Your Code

```typescript
const expectedLinks = [/home/i, /projects/i, /skills/i];
```

**What this means:**
- `/home/i` - matches "home", "Home", "HOME"
- `/projects/i` - matches "projects", "Projects", "PROJECTS"
- `/skills/i` - matches "skills", "Skills", "SKILLS"

**Why use it?**
- HTML text might be "Home" (capitalized)
- Or "HOME" (all caps)
- Or "home" (lowercase)
- Test works regardless of capitalization

### Other Regex Flags

```typescript
/home/i    // i = case-insensitive
/home/g    // g = global (find all matches)
/home/m    // m = multiline
```

---

## 4. Vitest vs Playwright: When to Use Which?

This is a **critical question**! Let me clarify with examples.

### The Key Difference

**Vitest:** Tests component **output** in **isolation** (fake DOM)  
**Playwright:** Tests **full page** output in **real browsers**

### Example: Testing Navigation Links

#### Vitest Test (Component Isolation)
```typescript
// Navbar.test.tsx
it('renders all navigation links', () => {
  render(<Navbar />);  // ← Just the Navbar component
  
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
});
```

**What this tests:**
- ✅ Does the Navbar component render links?
- ✅ Are the links in the DOM?
- ❌ Does navigation actually work? (can't test - no routing)
- ❌ Do links work in real browser? (can't test - fake DOM)

#### Playwright Test (Full Page)
```typescript
// homepage.spec.ts
test('homepage shows hero and navigation', async ({ page }) => {
  await page.goto('http://localhost:3000/');  // ← Full app
  
  const nav = page.getByRole('navigation');
  await expect(nav).toBeVisible();
  
  await expect(nav.getByRole('link', { name: /home/i })).toBeVisible();
});
```

**What this tests:**
- ✅ Does the full page render navigation?
- ✅ Are links visible in real browser?
- ✅ Does navigation work? (can click and navigate)
- ✅ Works across browsers (Chromium, Firefox, WebKit)

### The Critical Difference: `.toBeInTheDocument()` vs `.toBeVisible()`

#### Vitest: `.toBeInTheDocument()`
```typescript
expect(screen.getByRole('link')).toBeInTheDocument();
```

**Checks:** Does the element exist in the DOM?

**Doesn't check:**
- ❌ Is it actually visible? (might be `display: none`)
- ❌ Is it hidden by CSS? (might be `opacity: 0`)
- ❌ Is it behind another element?
- ❌ Does it work in real browsers?

#### Playwright: `.toBeVisible()`
```typescript
await expect(page.getByRole('link')).toBeVisible();
```

**Checks:** Is the element **actually visible** to users?

**Checks:**
- ✅ Does it exist in DOM?
- ✅ Is it visible? (not `display: none`)
- ✅ Is it not hidden? (not `opacity: 0`, not `visibility: hidden`)
- ✅ Is it not covered by another element?
- ✅ Does it work in real browsers?

### Real-World Example

Imagine your Navbar has this CSS:

```css
.nav-link {
  display: none;  /* Hidden on mobile */
}

@media (min-width: 768px) {
  .nav-link {
    display: block;  /* Visible on desktop */
  }
}
```

**Vitest test:**
```typescript
expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
// ✅ PASSES - element exists in DOM
```

**Playwright test:**
```typescript
await expect(page.getByRole('link', { name: /home/i })).toBeVisible();
// ❌ FAILS on mobile viewport - element not visible
// ✅ PASSES on desktop viewport - element visible
```

### When to Use Which?

#### Use Vitest When:

✅ **Testing component logic**
```typescript
// Does the component render correctly?
render(<Component />);
expect(screen.getByText('Hello')).toBeInTheDocument();
```

✅ **Testing component behavior**
```typescript
// Does the button click handler work?
const button = screen.getByRole('button');
fireEvent.click(button);
expect(screen.getByText('Clicked!')).toBeInTheDocument();
```

✅ **Fast feedback during development**
- Runs in milliseconds
- No browser needed
- Great for TDD (Test-Driven Development)

✅ **Testing edge cases**
```typescript
// What if prop is null?
render(<Component data={null} />);
expect(screen.getByText('No data')).toBeInTheDocument();
```

#### Use Playwright When:

✅ **Testing user flows**
```typescript
// Can user navigate from homepage → projects → contact?
await page.goto('/');
await page.getByRole('link', { name: /projects/i }).click();
await expect(page).toHaveURL('/projects');
```

✅ **Testing real browser behavior**
```typescript
// Does the form submit work?
await page.fill('input[name="email"]', 'test@example.com');
await page.click('button[type="submit"]');
await expect(page).toHaveURL('/thank-you');
```

✅ **Testing cross-browser compatibility**
- Same test runs in Chromium, Firefox, WebKit
- Catches browser-specific bugs

✅ **Testing CSS/styling**
```typescript
// Is the mobile menu actually visible on mobile?
await page.setViewportSize({ width: 375, height: 667 });
await expect(page.getByRole('button', { name: /menu/i })).toBeVisible();
```

✅ **Testing production-like scenarios**
- Full app running
- Real network requests
- Real browser rendering

---

## Side-by-Side Comparison

| Aspect | Vitest + RTL | Playwright |
|--------|--------------|------------|
| **Environment** | Fake DOM (jsdom) | Real browsers |
| **Speed** | Fast (ms) | Slower (seconds) |
| **Scope** | Single component | Full page/app |
| **CSS Rendering** | ❌ No | ✅ Yes |
| **Browser Differences** | ❌ No | ✅ Yes |
| **Navigation** | ❌ No (isolated) | ✅ Yes |
| **User Interactions** | Limited (simulated) | Full (real clicks, typing) |
| **Best For** | Component logic | User flows |

---

## Your Specific Example

### Vitest Test (Navbar.test.tsx)
```typescript
expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
```

**Tests:** Does the Navbar component render a link with text "home"?

**Doesn't test:**
- Can you actually click it?
- Does navigation work?
- Is it visible in real browser?
- Does it work on mobile?

### Playwright Test (homepage.spec.ts)
```typescript
await expect(nav.getByRole('link', { name: /home/i })).toBeVisible();
```

**Tests:** Is the navigation link visible on the actual homepage?

**Also tests:**
- Full app integration
- Real browser rendering
- Cross-browser compatibility

---

## Decision Tree

```
Need to test component logic?
├─ Yes → Use Vitest
│   └─ Fast, isolated, great for development
│
└─ No → Need to test user flow?
    ├─ Yes → Use Playwright
    │   └─ Real browser, full integration
    │
    └─ No → Need to test both?
        └─ Use BOTH!
            └─ Vitest for components, Playwright for flows
```

---

## Summary

### Roles (`getByRole`)
- Accessibility concept (what element does)
- Better than CSS selectors
- Tests what users/screen readers see

### Pipe `|` in Regex
- Means "OR"
- `/wadding|bond/i` = "wadding" OR "bond"

### `/i` Flag
- Case-insensitive
- `/home/i` matches "home", "Home", "HOME"

### Vitest vs Playwright
- **Vitest:** Component output in isolation (fast, fake DOM)
- **Playwright:** Full page in real browsers (slower, realistic)
- **Use both:** Vitest for components, Playwright for user flows

---

## Real Example: Testing a Contact Form

### Vitest (Component Logic)
```typescript
// Test form validation logic
render(<ContactForm />);
const emailInput = screen.getByRole('textbox', { name: /email/i });
fireEvent.change(emailInput, { target: { value: 'invalid' } });
expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
```

### Playwright (User Flow)
```typescript
// Test full form submission flow
await page.goto('/contact');
await page.fill('input[name="email"]', 'test@example.com');
await page.fill('textarea[name="message"]', 'Hello!');
await page.click('button[type="submit"]');
await expect(page).toHaveURL('/contact/thank-you');
```

**Both are valuable!** Vitest tests the component works, Playwright tests users can actually use it.

