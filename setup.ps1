# setup.ps1 — One-time project setup script
# Run this from the airbnb-clone directory OR double-click it

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ScriptDir

Write-Host "=== Airbnb Clone Setup ===" -ForegroundColor Cyan

# 1. Install npm dependencies
Write-Host "`n[1/3] Installing npm dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) { Write-Host "npm install failed" -ForegroundColor Red; exit 1 }

# 2. Copy assets from ../Public to ./public
Write-Host "`n[2/3] Copying reference assets into public/..." -ForegroundColor Yellow

$publicSrc = Join-Path $ScriptDir "..\Public"
$publicDst = Join-Path $ScriptDir "public"

# Create destination directories
$dirs = @("images", "avatars", "ui", "chips", "similar")
foreach ($d in $dirs) {
    $path = Join-Path $publicDst $d
    if (-not (Test-Path $path)) {
        New-Item -ItemType Directory -Path $path -Force | Out-Null
        Write-Host "  Created: public/$d"
    }
}

# Copy property images (all 43 JPEGs from root of Public/)
$jpegFiles = Get-ChildItem -Path $publicSrc -Filter "*.jpeg" -File
foreach ($f in $jpegFiles) {
    Copy-Item -Path $f.FullName -Destination (Join-Path $publicDst "images\$($f.Name)") -Force
}
Write-Host "  Copied $($jpegFiles.Count) property images to public/images/"

# Copy avatars
$avatarSrc = Join-Path $publicSrc "avatars"
if (Test-Path $avatarSrc) {
    Get-ChildItem -Path $avatarSrc | Copy-Item -Destination (Join-Path $publicDst "avatars") -Force
    Write-Host "  Copied avatars to public/avatars/"
}

# Copy UI assets
$uiSrc = Join-Path $publicSrc "ui"
if (Test-Path $uiSrc) {
    Get-ChildItem -Path $uiSrc | Copy-Item -Destination (Join-Path $publicDst "ui") -Force
    Write-Host "  Copied UI assets to public/ui/"
}

# Copy Chips (lowercase target for Next.js)
$chipsSrc = Join-Path $publicSrc "Chips"
if (Test-Path $chipsSrc) {
    Get-ChildItem -Path $chipsSrc | Copy-Item -Destination (Join-Path $publicDst "chips") -Force
    Write-Host "  Copied chip images to public/chips/"
}

# Copy similar stays
$similarSrc = Join-Path $publicSrc "similar"
if (Test-Path $similarSrc) {
    Get-ChildItem -Path $similarSrc | Copy-Item -Destination (Join-Path $publicDst "similar") -Force
    Write-Host "  Copied similar stay images to public/similar/"
}

Write-Host "`n[3/3] Setup complete!" -ForegroundColor Green
Write-Host "`nTo start the development server, run:" -ForegroundColor Cyan
Write-Host "  npm run dev" -ForegroundColor White
Write-Host "`nThen open http://localhost:3000" -ForegroundColor Cyan
