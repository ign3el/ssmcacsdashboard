Write-Host "🟢 Starting SSMC Dashboard System..." -ForegroundColor Green

# Start Backend
Write-Host "Please wait... Starting Backend Server (Port 3000)..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd server; npm start"

# Start Frontend
Write-Host "Please wait... Starting Frontend Client..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd client; npm run dev"

Write-Host "✅ System Launched!" -ForegroundColor Cyan
Write-Host "Backend: http://localhost:3000/api/transit"
Write-Host "Frontend: Localhost URL will appear in the new window (usually http://localhost:5173)"
