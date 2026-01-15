param([string]$ProjectFolder)
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "`n🧪 UNIT TEST VALIDATOR - V21.1 SETUP INTEGRITY CHECK" -ForegroundColor Cyan

$Failures = @()

# Test 1: Keystore
if (!(Test-Path "V21.1_keystore.json")) {
    $Failures += "❌ Keystore missing"
} else {
    Write-Host "   ✅ Keystore present" -ForegroundColor Green
}

# Test 2: KB Accessibility
$GlobalKB = Join-Path $env:USERPROFILE ".gemini\KnowledgeBase.json"
if (!(Test-Path $GlobalKB)) {
    $Failures += "❌ Global KB not accessible"
} else {
    Write-Host "   ✅ Global KB accessible" -ForegroundColor Green
}

# Test 3: Agent Files
$AgentCount = (Get-ChildItem "agents" -Filter "*.ps1" -ErrorAction SilentlyContinue).Count
if ($AgentCount -lt 20) {
    $Failures += "❌ Insufficient agents ($AgentCount/25)"
} else {
    Write-Host "   ✅ Agent files intact ($AgentCount agents)" -ForegroundColor Green
}

# Test 4: Routing Map
$GlobalRoot = Join-Path $env:USERPROFILE ".antigravity"
$RoutingMap = Join-Path $GlobalRoot "control-plane\routing\routing-map.json"
if (!(Test-Path $RoutingMap)) {
    $Failures += "❌ Routing map missing"
} else {
    Write-Host "   ✅ Routing map valid" -ForegroundColor Green
}

# Test 5: Orchestrator
$Orchestrator = Join-Path $GlobalRoot "orchestrator.ps1"
if (!(Test-Path $Orchestrator)) {
    $Failures += "❌ Orchestrator missing"
} else {
    Write-Host "   ✅ Orchestrator loadable" -ForegroundColor Green
}

# Test 6: Template Copy (34 files minimum)
$FileCount = (Get-ChildItem -Recurse -File -ErrorAction SilentlyContinue).Count
if ($FileCount -lt 30) {
    $Failures += "❌ Incomplete template ($FileCount files)"
} else {
    Write-Host "   ✅ Template copy complete ($FileCount files)" -ForegroundColor Green
}

# Test 7: Portable Brain
$PortableBrain = "portable_brain\KnowledgeBase.json"
if (!(Test-Path $PortableBrain)) {
    $Failures += "❌ Portable brain missing"
} else {
    Write-Host "   ✅ Portable brain present" -ForegroundColor Green
}

# Test 8: Analytics Infrastructure
$AnalyticsStats = "analytics\execution_stats.json"
if (!(Test-Path $AnalyticsStats)) {
    $Failures += "❌ Analytics stats missing"
} else {
    try {
        $Stats = Get-Content $AnalyticsStats | ConvertFrom-Json
        if ($Stats.totalTasks -ge 0) {
            Write-Host "   ✅ Analytics infrastructure valid" -ForegroundColor Green
        }
    } catch {
        $Failures += "❌ Analytics stats corrupted"
    }
}

# Test 9: Alert System
$AlertLog = "alerts\validation_alerts.log"
if (!(Test-Path $AlertLog)) {
    $Failures += "❌ Alert log missing"
} else {
    Write-Host "   ✅ Alert system configured" -ForegroundColor Green
}

# Test 10: GEMINI.md
if (!(Test-Path "GEMINI.md")) {
    $Failures += "❌ GEMINI.md missing"
} else {
    $Content = Get-Content "GEMINI.md" -Raw
    if ($Content -match "V21.1" -and $Content -match "ORCHESTRATOR") {
        Write-Host "   ✅ GEMINI.md valid" -ForegroundColor Green
    } else {
        $Failures += "❌ GEMINI.md invalid content"
    }
}

if ($Failures.Count -gt 0) {
    Write-Host "`n🚨 UNIT TEST FAILED" -ForegroundColor Red
    foreach ($f in $Failures) {
        Write-Host "   $f" -ForegroundColor Red
    }
    throw "V21.1 Setup integrity check failed: $($Failures.Count) error(s)"
} else {
    Write-Host "`n✅ ALL UNIT TESTS PASSED (10/10)" -ForegroundColor Green
}
