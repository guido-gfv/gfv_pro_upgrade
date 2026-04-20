#Requires -Version 5.1
$ErrorActionPreference = 'Stop'

function Test-WebRoot([string]$Path) {
  return $Path -and (Test-Path $Path) -and (Test-Path (Join-Path $Path 'index.html'))
}

function Resolve-PortableTarget([string]$InputPath) {
  if (-not $InputPath) { return $null }
  $p = $InputPath.Trim()
  if (-not $p) { return $null }
  if (Test-WebRoot $p) { return $p }

  $candidates = @(
    (Join-Path $p 'ComfyUI\web'),
    (Join-Path $p 'web'),
    (Join-Path $p 'web_custom_versions\desktop_app'),
    (Join-Path $p 'static'),
    (Join-Path $p 'python_embeded\Lib\site-packages\comfyui_frontend_package\static')
  )
  foreach ($c in $candidates) {
    if (Test-WebRoot $c) { return $c }
  }

  # Fallback: scan a few common subtrees under the provided root.
  if (Test-Path $p) {
    $patterns = @(
      '*\web_custom_versions\desktop_app\index.html',
      '*\comfyui_frontend_package\static\index.html',
      '*\ComfyUI\web\index.html',
      '*\web\index.html',
      '*\static\index.html'
    )
    foreach ($pat in $patterns) {
      $hit = Get-ChildItem -LiteralPath $p -Recurse -File -ErrorAction SilentlyContinue |
        Where-Object { $_.FullName -like $pat } |
        Select-Object -First 1
      if ($hit) { return (Split-Path -Parent $hit.FullName) }
    }
  }
  return $null
}

Write-Host 'GFV Pro - Portable installer helper' -ForegroundColor Cyan
Write-Host 'Paste paths separated by semicolon (;).' -ForegroundColor Yellow
Write-Host 'You can pass either the main portable folder OR the web folder.'
Write-Host 'Auto-detect tries known layouts + fallback recursive search.'
Write-Host 'Example (main folder): E:\comfyUi_portable\ComfyUI_windows_portable'
Write-Host 'Multi example: E:\Comfy1\ComfyUI_windows_portable;F:\Comfy2\ComfyUI_windows_portable'
Write-Host ''

$raw = Read-Host 'Portable targets'
if (-not $raw) {
  Write-Host 'No paths provided. Cancelled.' -ForegroundColor Red
  exit 1
}

$targets = [System.Collections.Generic.List[string]]::new()
foreach ($part in ($raw.Split(';') | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne '' })) {
  $resolved = Resolve-PortableTarget $part
  if ($resolved) {
    if (-not $targets.Contains($resolved)) { $targets.Add($resolved) }
    Write-Host "Resolved: $part -> $resolved" -ForegroundColor DarkGray
  } else {
    Write-Warning "Skipped (no valid web root/index.html): $part"
  }
}

if ($targets.Count -eq 0) {
  Write-Host 'No valid targets found. Cancelled.' -ForegroundColor Red
  exit 1
}

Write-Host ''
Write-Host "Installing on $($targets.Count) target(s)..." -ForegroundColor Green
& (Join-Path $PSScriptRoot 'install.ps1') -ExtraTargets $targets
