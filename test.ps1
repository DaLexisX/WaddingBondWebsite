# Test Runner Script for Wadding Bond Site
# Runs unit/component tests (Vitest + RTL) and/or E2E tests (Playwright)

param(
    [switch]$Unit = $false,      # Run only unit/component tests
    [switch]$E2E = $false,       # Run only E2E tests
    [switch]$All = $true,         # Run all tests (default)
    [switch]$Watch = $false,      # Run in watch mode (unit tests only)
    [switch]$UI = $false,        # Open Vitest UI (unit tests only)
    [switch]$Coverage = $false   # Generate coverage report (unit tests only)
)

$ErrorActionPreference = "Stop"

Write-Host "Test Runner" -ForegroundColor Cyan
Write-Host ""

# Determine what to run
$runUnit = $Unit -or $All
$runE2E = $E2E -or $All

# If specific flags are set, override $All
if ($Unit -or $E2E) {
    $runUnit = $Unit
    $runE2E = $E2E
}

# Initialize exit codes
$unitExitCode = 0
$e2eExitCode = 0

# Unit & Component Tests (Vitest + RTL)
if ($runUnit) {
    Write-Host "Running Unit & Component Tests (Vitest + React Testing Library)..." -ForegroundColor Yellow
    Write-Host ""
    
    if ($Watch) {
        Write-Host "   Mode: Watch (auto-rerun on file changes)" -ForegroundColor Gray
        Write-Host "   Command: pnpm test:watch" -ForegroundColor Gray
        Write-Host ""
        pnpm test:watch
        $unitExitCode = $LASTEXITCODE
    } elseif ($UI) {
        Write-Host "   Mode: UI (interactive test interface)" -ForegroundColor Gray
        Write-Host "   Command: pnpm test:ui" -ForegroundColor Gray
        Write-Host ""
        pnpm test:ui
        $unitExitCode = $LASTEXITCODE
    } elseif ($Coverage) {
        Write-Host "   Mode: Coverage report" -ForegroundColor Gray
        Write-Host "   Command: pnpm test:coverage" -ForegroundColor Gray
        Write-Host ""
        pnpm test:coverage
        $unitExitCode = $LASTEXITCODE
    } else {
        Write-Host "   Mode: Run once (CI mode)" -ForegroundColor Gray
        Write-Host "   Command: pnpm test:run" -ForegroundColor Gray
        Write-Host ""
        pnpm test:run
        $unitExitCode = $LASTEXITCODE
    }
    
    if ($unitExitCode -ne 0) {
        Write-Host ""
        Write-Host "ERROR: Unit/Component tests failed!" -ForegroundColor Red
        if (-not $runE2E) {
            exit $unitExitCode
        }
    } else {
        Write-Host ""
        Write-Host "SUCCESS: Unit/Component tests passed" -ForegroundColor Green
    }
    
    Write-Host ""
}

# E2E Tests (Playwright)
if ($runE2E) {
    Write-Host "Running End-to-End Tests (Playwright)..." -ForegroundColor Yellow
    Write-Host "   Command: pnpm exec playwright test" -ForegroundColor Gray
    Write-Host "   Note: This will start the dev server if not already running" -ForegroundColor Gray
    Write-Host ""
    
    pnpm exec playwright test
    $e2eExitCode = $LASTEXITCODE
    
    if ($e2eExitCode -ne 0) {
        Write-Host ""
        Write-Host "ERROR: E2E tests failed!" -ForegroundColor Red
        exit $e2eExitCode
    } else {
        Write-Host ""
        Write-Host "SUCCESS: E2E tests passed" -ForegroundColor Green
    }
    
    Write-Host ""
}

# Summary
if ($runUnit -and $runE2E) {
    if ($unitExitCode -eq 0 -and $e2eExitCode -eq 0) {
        Write-Host "All tests passed!" -ForegroundColor Green
    } elseif ($unitExitCode -ne 0) {
        Write-Host "WARNING: Unit tests failed, but E2E tests passed" -ForegroundColor Yellow
        exit $unitExitCode
    } elseif ($e2eExitCode -ne 0) {
        Write-Host "WARNING: E2E tests failed, but unit tests passed" -ForegroundColor Yellow
        exit $e2eExitCode
    }
} elseif ($runUnit -and $unitExitCode -eq 0) {
    Write-Host "Unit/Component tests passed!" -ForegroundColor Green
} elseif ($runE2E -and $e2eExitCode -eq 0) {
    Write-Host "E2E tests passed!" -ForegroundColor Green
}

Write-Host ""
Write-Host "Usage examples:" -ForegroundColor Cyan
Write-Host "   .\test.ps1                    # Run all tests (unit + E2E)" -ForegroundColor White
Write-Host "   .\test.ps1 -Unit              # Run only unit/component tests" -ForegroundColor White
Write-Host "   .\test.ps1 -E2E               # Run only E2E tests" -ForegroundColor White
Write-Host "   .\test.ps1 -Unit -Watch       # Run unit tests in watch mode" -ForegroundColor White
Write-Host "   .\test.ps1 -Unit -UI          # Open Vitest UI for unit tests" -ForegroundColor White
Write-Host "   .\test.ps1 -Unit -Coverage    # Generate coverage report" -ForegroundColor White
