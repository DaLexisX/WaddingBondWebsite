# Video Optimization Script
# Creates multiple bitrate versions for adaptive streaming
# Requires FFmpeg to be installed

$inputVideo = "public\videos\projects\cafe-connect\stamp_mechanism.mp4"
$outputDir = "public\videos\projects\cafe-connect"

# Check if FFmpeg is available
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    Write-Host "FFmpeg is not installed. Please install it first:" -ForegroundColor Red
    Write-Host "1. Download from: https://ffmpeg.org/download.html" -ForegroundColor Yellow
    Write-Host "2. Or use winget: winget install ffmpeg" -ForegroundColor Yellow
    Write-Host "3. Or use chocolatey: choco install ffmpeg" -ForegroundColor Yellow
    exit 1
}

# Check if input file exists
if (-not (Test-Path $inputVideo)) {
    Write-Host "Input video not found: $inputVideo" -ForegroundColor Red
    exit 1
}

Write-Host "Creating optimized video versions..." -ForegroundColor Green

# Create output directory if it doesn't exist
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

# High quality (1080p) - for good connections
Write-Host "Creating 1080p version (high quality)..." -ForegroundColor Cyan
ffmpeg -i $inputVideo `
    -c:v libx264 `
    -preset slow `
    -crf 23 `
    -maxrate 5M `
    -bufsize 10M `
    -c:a aac `
    -b:a 128k `
    -movflags +faststart `
    -vf "scale=1920:1080" `
    "$outputDir\stamp_mechanism_1080p.mp4"

# Medium quality (720p) - for average connections
Write-Host "Creating 720p version (medium quality)..." -ForegroundColor Cyan
ffmpeg -i $inputVideo `
    -c:v libx264 `
    -preset slow `
    -crf 23 `
    -maxrate 2.5M `
    -bufsize 5M `
    -c:a aac `
    -b:a 96k `
    -movflags +faststart `
    -vf "scale=1280:720" `
    "$outputDir\stamp_mechanism_720p.mp4"

# Low quality (480p) - for slow connections
Write-Host "Creating 480p version (low quality)..." -ForegroundColor Cyan
ffmpeg -i $inputVideo `
    -c:v libx264 `
    -preset slow `
    -crf 23 `
    -maxrate 1M `
    -bufsize 2M `
    -c:a aac `
    -b:a 64k `
    -movflags +faststart `
    -vf "scale=854:480" `
    "$outputDir\stamp_mechanism_480p.mp4"

Write-Host "`nVideo optimization complete!" -ForegroundColor Green
Write-Host "Files created:" -ForegroundColor Yellow
Write-Host "  - stamp_mechanism_1080p.mp4 (high quality)" -ForegroundColor White
Write-Host "  - stamp_mechanism_720p.mp4 (medium quality)" -ForegroundColor White
Write-Host "  - stamp_mechanism_480p.mp4 (low quality)" -ForegroundColor White

