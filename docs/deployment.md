# Deployment Guide

This project uses **Firebase Hosting** for deployment. The deployment process runs tests, builds the static site, and deploys to Firebase.

## Quick Deployment

The simplest way to deploy:

```powershell
.\deploy.ps1
```

This will:
1. ✅ Run unit/component tests (Vitest + RTL)
2. ⏭️ Skip E2E tests (by default, they're slower)
3. ✅ Run linter
4. ✅ Build Next.js static export (`pnpm build` → `out/` directory)
5. ✅ Deploy to Firebase Hosting (`firebase deploy`)

## Manual Deployment Steps

If you prefer to run steps manually:

```powershell
# 1. Run tests (optional but recommended)
pnpm test:run

# 2. Run linter (optional but recommended)
pnpm lint

# 3. Build the static site
pnpm build

# 4. Deploy to Firebase
pnpm firebase:deploy
```

## Deployment Script Options

The `deploy.ps1` script supports several flags:

### Skip Tests
```powershell
.\deploy.ps1 -SkipTests
```
Skips unit/component tests (faster, but less safe).

### Include E2E Tests
```powershell
.\deploy.ps1 -SkipE2E:$false
```
Runs Playwright E2E tests before deployment (slower but more thorough).

### Skip Build
```powershell
.\deploy.ps1 -SkipBuild
```
Assumes you've already run `pnpm build` and the `out/` directory exists.

### Dry Run
```powershell
.\deploy.ps1 -DryRun
```
Runs all checks (tests, lint, build) but doesn't actually deploy. Useful for verifying everything works before deploying.

### Combined Flags
```powershell
.\deploy.ps1 -SkipTests -SkipBuild
```
Skip tests and build, just deploy existing build.

## When to Run Tests

### Before Every Deployment (Recommended)
- **Unit/Component tests**: Fast, catch component bugs early
- **Linter**: Catches code quality issues

### Before Production Deployments
- **E2E tests**: Slower but verify critical user flows work end-to-end
- Run manually: `pnpm exec playwright test`

### In CI/CD (Future)
If you set up GitHub Actions or similar:
- Run all tests automatically on every push
- Only deploy if tests pass
- Example: `.github/workflows/deploy.yml`

## Firebase Configuration

- **Site**: `wadding-bond` (configured in `firebase.json`)
- **Output Directory**: `out/` (Next.js static export)
- **Project**: `wadding-bond-site` (configured in `.firebaserc`)

## Troubleshooting

### Tests Fail
- Fix failing tests before deploying
- Use `pnpm test:watch` to debug interactively
- Check `docs/testing-vitest-rtl.md` for testing guidance

### Build Fails
- Check for TypeScript errors (though they're ignored during build)
- Verify all dependencies are installed: `pnpm install`
- Check `next.config.ts` for configuration issues

### Firebase Deploy Fails
- Ensure you're logged in: `pnpm firebase:login`
- Verify Firebase project is configured: `pnpm firebase:init`
- Check that `out/` directory exists and contains built files

### E2E Tests Fail
- Ensure dev server is running or Playwright will start it automatically
- Check `playwright.config.ts` for correct `baseURL`
- See `docs/testing-playwright-e2e.md` for E2E testing guidance

