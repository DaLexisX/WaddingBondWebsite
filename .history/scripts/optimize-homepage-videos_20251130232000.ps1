# Homepage Video Optimization Script
# Creates multiple bitrate versions optimized for 640px width display
# Requires FFmpeg to be installed

$videos = @(
    "est85_homepage.mp4",
    "cafe_connect_homepage.mp4",
    "karaoke_name_homepage.mp4"
)

$inputDir = "public\videos"
$outputDir = "public\videos\homepage"

# Check if FFmpeg is available
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    Write-Host "FFmpeg is not installed. Please install it first:" -ForegroundColor Red
    Write-Host "1. Download from: https://ffmpeg.org/download.html" -ForegroundColor Yellow
    Write-Host "2. Or use winget: winget install ffmpeg" -ForegroundColor Yellow
    Write-Host "3. Or use chocolatey: choco install ffmpeg" -ForegroundColor Yellow
    exit 1
}

# Create output directory if it doesn't exist
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

foreach ($videoName in $videos) {
    $inputVideo = Join-Path $inputDir $videoName
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($videoName)
    
    # Check if input file exists
    if (-not (Test-Path $inputVideo)) {
        Write-Host "Input video not found: $inputVideo" -ForegroundColor Red
        continue
    }
    
    Write-Host "`nProcessing $videoName..." -ForegroundColor Green
    
    # High quality (640px) - for good connections
    Write-Host "Creating high quality version (640px)..." -ForegroundColor Cyan
    $outputHigh = Join-Path $outputDir "${baseName}_high.mp4"
    ffmpeg -i $inputVideo `
        -c:v libx264 `
        -preset slow `
        -crf 23 `
        -maxrate 2.5M `
        -bufsize 5M `
        -c:a aac `
        -b:a 96k `
        -movflags +faststart `
        -vf "scale=640:-2" `
        -y `
        $outputHigh
    
    # Medium quality (640px, lower bitrate) - for average connections
    Write-Host "Creating medium quality version (640px)..." -ForegroundColor Cyan
    $outputMed = Join-Path $outputDir "${baseName}_medium.mp4"
    ffmpeg -i $inputVideo `
        -c:v libx264 `
        -preset slow `
        -crf 25 `
        -maxrate 1.2M `
        -bufsize 2.4M `
        -c:a aac `
        -b:a 64k `
        -movflags +faststart `
        -vf "scale=640:-2" `
        -y `
        $outputMed
    
    # Low quality (640px, lowest bitrate) - for slow connections
    Write-Host "Creating low quality version (640px)..." -ForegroundColor Cyan
    $outputLow = Join-Path $outputDir "${baseName}_low.mp4"
    ffmpeg -i $inputVideo `
        -c:v libx264 `
        -preset slow `
        -crf 27 `
        -maxrate 600k `
        -bufsize 1.2M `
        -c:a aac `
        -b:a 48k `
        -movflags +faststart `
        -vf "scale=640:-2" `
        -y `
        $outputLow
    
    Write-Host "Completed $videoName" -ForegroundColor Green
}

Write-Host "`nVideo optimization complete!" -ForegroundColor Green
Write-Host "All optimized videos saved to: $outputDir" -ForegroundColor Yellow

