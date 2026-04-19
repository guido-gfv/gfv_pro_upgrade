#Requires -Version 5.1
param(
  [string]$TargetFrontendRoot = '',
  [switch]$UseLegacyResourcesWeb,
  [switch]$UsePipStatic,
  [switch]$AllDesktopInstalls,
  [string[]]$ExtraTargets = @()
)

$ErrorActionPreference = 'Stop'

function Get-DesktopAppWebRoot {
  Join-Path $env:LOCALAPPDATA 'Programs\ComfyUI\resources\ComfyUI\web_custom_versions\desktop_app'
}

function Get-AllDesktopAppWebRoots {
  $roots = [System.Collections.Generic.List[string]]::new()
  $programs = Join-Path $env:LOCALAPPDATA 'Programs'
  if (-not (Test-Path $programs)) { return $roots }
  Get-ChildItem -LiteralPath $programs -Directory -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -like 'ComfyUI*' } |
    ForEach-Object {
      $p = Join-Path $_.FullName 'resources\ComfyUI\web_custom_versions\desktop_app'
      if ((Test-Path $p) -and -not $roots.Contains($p)) { $roots.Add($p) }
    }
  return $roots
}

function Get-PipStaticCandidates {
  @(
    (Join-Path $env:USERPROFILE 'Documents\ComfyUI\.venv\Lib\site-packages\comfyui_frontend_package\static'),
    (Join-Path $env:USERPROFILE 'ComfyUI\.venv\Lib\site-packages\comfyui_frontend_package\static')
  )
}

function Test-ValidWebRoot([string]$Path) {
  return $Path -and (Test-Path $Path) -and (Test-Path (Join-Path $Path 'index.html'))
}

function Resolve-StaticViaVenvPython {
  $pythons = @(
    (Join-Path $env:USERPROFILE 'Documents\ComfyUI\.venv\Scripts\python.exe'),
    (Join-Path $env:USERPROFILE 'ComfyUI\.venv\Scripts\python.exe')
  )
  foreach ($py in $pythons) {
    if (-not (Test-Path $py)) { continue }
    $out = & $py -c "import importlib.resources as r, comfyui_frontend_package; print(str(r.files(comfyui_frontend_package) / 'static'))" 2>$null
    if ($LASTEXITCODE -ne 0) { continue }
    $p = ($out | Out-String).Trim()
    if (Test-ValidWebRoot $p) { return $p }
  }
  return $null
}

function Get-DefaultFrontendRoot {
  if (-not $UsePipStatic) {
    $desk = Get-DesktopAppWebRoot
    if (Test-ValidWebRoot $desk) { return $desk }
  }
  foreach ($c in Get-PipStaticCandidates) {
    if (Test-ValidWebRoot $c) { return $c }
  }
  $viaPy = Resolve-StaticViaVenvPython
  if ($viaPy) { return $viaPy }
  return $null
}

function Uninstall-One {
  param([string]$TargetFrontendRoot)
  $parent = Split-Path -Parent $TargetFrontendRoot
  $backups = @(Get-ChildItem -LiteralPath $parent -Directory -ErrorAction SilentlyContinue |
      Where-Object { $_.Name -match '^static\.gfv\.backup\.' } |
      Sort-Object Name -Descending)
  if ($backups.Count -eq 0) {
    Write-Warning "No GFV backup (static.gfv.backup.*) in: $parent"
    return
  }
  $src = $backups[0].FullName
  Write-Host "Uninstall / restore from: $($backups[0].Name) -> $(Split-Path -Leaf $TargetFrontendRoot)  ($TargetFrontendRoot)" -ForegroundColor Cyan
  if (Test-Path $TargetFrontendRoot) {
    $ts = Get-Date -Format 'yyyyMMdd-HHmmss'
    $trash = Join-Path $parent "static.gfv.trash.$ts"
    Move-Item -LiteralPath $TargetFrontendRoot -Destination $trash -Force
  }
  Copy-Item -LiteralPath $src -Destination $TargetFrontendRoot -Recurse -Force
}

$targets = [System.Collections.Generic.List[string]]::new()

if ($UseLegacyResourcesWeb) {
  if (-not $TargetFrontendRoot) {
    $TargetFrontendRoot = Join-Path $env:LOCALAPPDATA 'Programs\ComfyUI\resources\ComfyUI\web'
  }
  $targets.Add($TargetFrontendRoot)
}
elseif ($AllDesktopInstalls) {
  foreach ($r in Get-AllDesktopAppWebRoots) { $targets.Add($r) }
  foreach ($ex in $ExtraTargets) {
    if ($ex -and (Test-Path $ex) -and -not $targets.Contains($ex)) { $targets.Add($ex) }
  }
  if ($targets.Count -eq 0) {
    Write-Error 'No hay carpetas desktop_app bajo Programs. Usa -TargetFrontendRoot.'
  }
}
elseif ($TargetFrontendRoot) {
  $targets.Add($TargetFrontendRoot)
}
else {
  $one = Get-DefaultFrontendRoot
  if (-not $one) { Write-Error 'No se encontró destino. Pasa -TargetFrontendRoot o -AllDesktopInstalls.' }
  $targets.Add($one)
}

if (-not $AllDesktopInstalls) {
  foreach ($ex in $ExtraTargets) {
    if ($ex -and (Test-Path $ex) -and -not $targets.Contains($ex)) { $targets.Add($ex) }
  }
}

foreach ($t in $targets) {
  Uninstall-One -TargetFrontendRoot $t
}

Write-Host 'Done. Restart Comfy UI.' -ForegroundColor Green
