# Project Detail Page Video Optimization Script
# Creates larger videos (1080p, 720p, 480p) for project detail pages
# Requires FFmpeg to be installed

$videos = @(
    @{
        Name = "est85_homepage.mp4"
        OutputDir = "public\videos\projects\est85"
    },
    @{
        Name = "cafe_connect_homepage.mp4"
        OutputDir = "public\videos\projects\cafe-connect"
    },
    @{
        Name = "karaoke_name_homepage.mp4"
        OutputDir = "public\videos\projects\karaoke-name"
    }
)

$inputDir = "public\videos"

# Check if FFmpeg is available
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    Write-Host "FFmpeg is not installed. Please install it first:" -ForegroundColor Red
    Write-Host "1. Download from: https://ffmpeg.org/download.html" -ForegroundColor Yellow
    Write-Host "2. Or use winget: winget install ffmpeg" -ForegroundColor Yellow
    Write-Host "3. Or use chocolatey: choco install ffmpeg" -ForegroundColor Yellow
    exit 1
}

foreach ($videoConfig in $videos) {
    $videoName = $videoConfig.Name
    $inputVideo = Join-Path $inputDir $videoName
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($videoName)
    $outputDir = $videoConfig.OutputDir
    
    # Check if input file exists
    if (-not (Test-Path $inputVideo)) {
        Write-Host "Input video not found: $inputVideo" -ForegroundColor Red
        continue
    }
    
    # Create output directory if it doesn't exist
    if (-not (Test-Path $outputDir)) {
        New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    }
    
    Write-Host "`nProcessing $videoName for project detail page..." -ForegroundColor Green
    
    # High quality (1080p) - for good connections
    Write-Host "Creating 1080p version (high quality)..." -ForegroundColor Cyan
    $output1080p = Join-Path $outputDir "${baseName}_1080p.mp4"
    ffmpeg -i $inputVideo `
        -c:v libx264 `
        -preset slow `
        -crf 23 `
        -maxrate 5M `
        -bufsize 10M `
        -c:a aac `
        -b:a 128k `
        -movflags +faststart `
        -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" `
        -y `
        $output1080p
    
    # Medium quality (720p) - for average connections
    Write-Host "Creating 720p version (medium quality)..." -ForegroundColor Cyan
    $output720p = Join-Path $outputDir "${baseName}_720p.mp4"
    ffmpeg -i $inputVideo `
        -c:v libx264 `
        -preset slow `
        -crf 23 `
        -maxrate 2.5M `
        -bufsize 5M `
        -c:a aac `
        -b:a 96k `
        -movflags +faststart `
        -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" `
        -y `
        $output720p
    
    # Low quality (480p) - for slow connections
    Write-Host "Creating 480p version (low quality)..." -ForegroundColor Cyan
    $output480p = Join-Path $outputDir "${baseName}_480p.mp4"
    ffmpeg -i $inputVideo `
        -c:v libx264 `
        -preset slow `
        -crf 23 `
        -maxrate 1M `
        -bufsize 2M `
        -c:a aac `
        -b:a 64k `
        -movflags +faststart `
        -vf "scale=854:480:force_original_aspect_ratio=decrease,pad=854:480:(ow-iw)/2:(oh-ih)/2" `
        -y `
        $output480p
    
    Write-Host "Completed $videoName" -ForegroundColor Green
}

Write-Host "`nProject detail page video optimization complete!" -ForegroundColor Green
Write-Host "All optimized videos saved to their respective project directories" -ForegroundColor Yellow

