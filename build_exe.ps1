# Build EXE Script for SSMC ACS Dashboard

Write-Host "🚀 Starting EXE Build..." -ForegroundColor Cyan

# 1. Build Frontend
Write-Host "📦 Building Frontend (Client)..." -ForegroundColor Yellow
Set-Location "./client"
npm install --silent
npm run build
if ($LASTEXITCODE -ne 0) { Write-Error "Build Failed!"; exit 1 }
Set-Location ".."

# 2. Prepare Backend Public Folder
Write-Host "🧹 Cleaning Server Public Folder..." -ForegroundColor Yellow
$publicPath = "./server/public"
if (Test-Path $publicPath) {
    Remove-Item -Path "$publicPath\*" -Recurse -Force
}
else {
    New-Item -ItemType Directory -Path $publicPath | Out-Null
}

# 3. Deploy Frontend to Backend
Write-Host "🚚 Copying Build Files to Server..." -ForegroundColor Yellow
Copy-Item -Path "./client/dist/*" -Destination $publicPath -Recurse

# 4. Build EXE using pkg
Write-Host "🔨 Packaging into EXE..." -ForegroundColor Yellow
Set-Location "./server"
npm install --silent
npx pkg . --targets node18-win-x64 --output acs-dashboard.exe --compress GZip
if ($LASTEXITCODE -ne 0) { Write-Error "PKG Failed!"; exit 1 }

# 5. Organize Distribution Folder
Write-Host "✨ Creating Distribution Folder..." -ForegroundColor Yellow
$distPath = "../dist_exe"
if (Test-Path $distPath) { Remove-Item -Path $distPath -Recurse -Force }
New-Item -ItemType Directory -Path $distPath | Out-Null

# Copy EXE
Copy-Item -Path "acs-dashboard.exe" -Destination $distPath
# Copy Config (if exists)
if (Test-Path "config.json") { Copy-Item -Path "config.json" -Destination $distPath }

# Copy Readme (if exists)
if (Test-Path "../README_DEPLOY.txt") { Copy-Item -Path "../README_DEPLOY.txt" -Destination $distPath }

Write-Host "ℹ️  EXE is self-contained. Setup will run on first launch." -ForegroundColor Cyan

Write-Host "✅ EXE BUILD COMPLETE!" -ForegroundColor Green
Write-Host "Output located in 'dist_exe' folder."
Write-Host "Run 'acs-dashboard.exe' to test."
Set-Location ".."
