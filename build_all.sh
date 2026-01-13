#!/bin/bash
echo "🚀 Starting Full Application Build..."

# 1. Build Frontend
echo "📦 Building Frontend..."
cd client
npm install
npm run build
cd ..

# 2. Prepare Backend Static Files
echo "📂 Moving Frontend Build to Backend..."
rm -rf server/public
mkdir -p server/public
cp -r client/dist/* server/public/

# 3. Build Executable
echo "🔨 Compiling into Single Executable..."
cd server
npm install
npm install -g pkg
pkg . --targets node18-win-x64 --output ../acs-dashboard.exe --compress GZip

echo "✅ Build Complete!"
echo "👉 Application is ready: acs-dashboard.exe"
echo "⚠️  Ensure you place a .env file next to the .exe with DB connection details."
