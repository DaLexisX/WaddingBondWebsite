# Deployment Script for Wadding Bond Site
# This script runs tests, builds, and deploys to Firebase Hosting
# Deployment workflow: pnpm build -> firebase deploy

param(
    [switch]$SkipTests = $false,
    [switch]$SkipE2E = $true,  # E2E tests are slower, skip by default for faster deploys
    [switch]$SkipBuild = $false,  # Skip build step (useful if you already built)
    [switch]$DryRun = $false  # Run all checks but don't actually deploy
)

$ErrorActionPreference = "Stop"  # Fail fast on any error

Write-Host "Starting Firebase deployment pipeline..." -ForegroundColor Cyan
Write-Host ""

# Step 1: Run Unit & Component Tests (Vitest + RTL)
if (-not $SkipTests) {
    Write-Host "Step 1: Running unit and component tests..." -ForegroundColor Yellow
    Write-Host "   Command: pnpm test:run" -ForegroundColor Gray
    
    pnpm test:run
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Unit/Component tests failed!" -ForegroundColor Red
        exit 1
    }
    Write-Host "SUCCESS: Unit/Component tests passed" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "Skipping unit/component tests (--SkipTests flag)" -ForegroundColor Yellow
    Write-Host ""
}

# Step 2: Run E2E Tests (Playwright) - Optional, slower
if (-not $SkipE2E) {
    Write-Host "Step 2: Running end-to-end tests..." -ForegroundColor Yellow
    Write-Host "   Command: pnpm exec playwright test" -ForegroundColor Gray
    
    # Note: This requires the dev server to be running or Playwright will start it
    pnpm exec playwright test
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: E2E tests failed!" -ForegroundColor Red
        exit 1
    }
    Write-Host "SUCCESS: E2E tests passed" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "Skipping E2E tests (--SkipE2E flag, default)" -ForegroundColor Yellow
    Write-Host "   Tip: Run 'pnpm exec playwright test' manually before deploying to production" -ForegroundColor Gray
    Write-Host ""
}

# Step 3: Lint Check
Write-Host "Step 3: Running linter..." -ForegroundColor Yellow
pnpm lint
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Linting failed!" -ForegroundColor Red
    exit 1
}
Write-Host "SUCCESS: Linting passed" -ForegroundColor Green
Write-Host ""

# Step 4: Build Next.js static export
if (-not $SkipBuild) {
    Write-Host "Step 4: Building Next.js static export..." -ForegroundColor Yellow
    Write-Host "   Command: pnpm build" -ForegroundColor Gray
    Write-Host "   Output directory: out/ (configured in next.config.ts)" -ForegroundColor Gray
    
    pnpm build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Build failed!" -ForegroundColor Red
        exit 1
    }
    
    # Verify output directory exists
    if (-not (Test-Path "out")) {
        Write-Host "ERROR: Build output directory 'out' not found!" -ForegroundColor Red
        exit 1
    }
    
    Write-Host "SUCCESS: Build completed successfully" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "Skipping build (--SkipBuild flag)" -ForegroundColor Yellow
    Write-Host "   Assuming 'out' directory already exists from previous build" -ForegroundColor Gray
    
    if (-not (Test-Path "out")) {
        Write-Host "ERROR: Build output directory 'out' not found!" -ForegroundColor Red
        Write-Host "   Run 'pnpm build' first or remove --SkipBuild flag" -ForegroundColor Yellow
        exit 1
    }
    Write-Host ""
}

# Step 5: Deploy to Firebase Hosting
if (-not $DryRun) {
    Write-Host "Step 5: Deploying to Firebase Hosting..." -ForegroundColor Yellow
    Write-Host "   Command: pnpm firebase:deploy" -ForegroundColor Gray
    Write-Host "   Site: wadding-bond (configured in firebase.json)" -ForegroundColor Gray
    Write-Host ""
    
    pnpm firebase:deploy
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Firebase deployment failed!" -ForegroundColor Red
        exit 1
    }
    
    Write-Host ""
    Write-Host "SUCCESS: Deployment completed successfully!" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "Step 5: Dry run mode - skipping actual deployment" -ForegroundColor Yellow
    Write-Host "   All checks passed. Remove --DryRun flag to deploy." -ForegroundColor Gray
    Write-Host ""
}

Write-Host "Deployment pipeline complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Usage examples:" -ForegroundColor Cyan
Write-Host "   .\deploy.ps1                    # Full deployment with tests" -ForegroundColor White
Write-Host "   .\deploy.ps1 -SkipTests          # Skip unit/component tests" -ForegroundColor White
Write-Host "   .\deploy.ps1 -SkipE2E:`$false      # Include E2E tests" -ForegroundColor White
Write-Host "   .\deploy.ps1 -SkipBuild           # Skip build (use existing out/)" -ForegroundColor White
Write-Host "   .\deploy.ps1 -DryRun              # Run checks but don't deploy" -ForegroundColor White
