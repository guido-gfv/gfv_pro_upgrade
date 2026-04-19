#Requires -Version 5.1
<#
.SYNOPSIS
  Copia .\web sobre la carpeta STATIC del frontend que ComfyUI sirve (Desktop: web_custom_versions\desktop_app, o pip static).

.PARAMETER TargetFrontendRoot
  Una carpeta con index.html. Vacío = autodetección.

.PARAMETER AllDesktopInstalls
  Instala en TODAS las rutas desktop_app válidas bajo %LOCALAPPDATA%\Programs\ComfyUI* (varias instalaciones Desktop).

.PARAMETER ExtraTargets
  Lista extra de carpetas destino (ej. portables). Cada una debe ser ...\desktop_app o ...\static con index.html.

.PARAMETER UsePipStatic
  Ignora Desktop; solo busca comfyui_frontend_package\static en el .venv.

.PARAMETER UseLegacyResourcesWeb
  Modo legacy: resources\ComfyUI\web.
#>
param(
  [string]$TargetFrontendRoot = '',
  [string]$PayloadWeb = '',
  [switch]$UseLegacyResourcesWeb,
  [switch]$UsePipStatic,
  [switch]$AllDesktopInstalls,
  [string[]]$ExtraTargets = @()
)

$ErrorActionPreference = 'Stop'

if (-not $PayloadWeb) {
  $installerRoot = if ((Split-Path -Leaf $PSScriptRoot) -eq 'scripts') {
    Split-Path -Parent $PSScriptRoot
  } else {
    $PSScriptRoot
  }
  $PayloadWeb = Join-Path $installerRoot 'web'
}

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
      if ((Test-ValidWebRoot $p) -and -not $roots.Contains($p)) { $roots.Add($p) }
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

function Get-LegacyWebPath {
  Join-Path $env:LOCALAPPDATA 'Programs\ComfyUI\resources\ComfyUI\web'
}

function Install-One {
  param([string]$DestRoot)
  Write-Host ''
  Write-Host ">>> Destino: $DestRoot" -ForegroundColor Cyan

  $parent = Split-Path -Parent $DestRoot
  if (-not (Test-Path $parent)) {
    Write-Error "No existe la carpeta padre: $parent"
  }

  $ts = Get-Date -Format 'yyyyMMdd-HHmmss'
  if (Test-Path $DestRoot) {
    $bak = Join-Path $parent "static.gfv.backup.$ts"
    Write-Host "Backup: $bak" -ForegroundColor Yellow
    Copy-Item -LiteralPath $DestRoot -Destination $bak -Recurse -Force
  }
  else {
    New-Item -ItemType Directory -Path $DestRoot -Force | Out-Null
  }

  Write-Host 'robocopy /MIR...' -ForegroundColor Green
  $rc = Start-Process -FilePath 'robocopy.exe' -ArgumentList @(
    $PayloadWeb, $DestRoot, '/MIR', '/R:2', '/W:2', '/NFL', '/NDL', '/NJH'
  ) -Wait -PassThru -NoNewWindow

  if ($null -eq $rc -or $rc.ExitCode -ge 8) {
    Write-Error "robocopy falló (código $($rc.ExitCode))."
  }
}

Write-Host 'GFV Pro — instalador de frontend' -ForegroundColor Cyan
Write-Host "Payload: $PayloadWeb"
if (-not (Test-Path $PayloadWeb)) { Write-Error "No existe la carpeta payload '$PayloadWeb'." }
if (-not (Test-Path (Join-Path $PayloadWeb 'index.html'))) { Write-Error 'El payload no contiene index.html.' }

$targets = [System.Collections.Generic.List[string]]::new()

if ($UseLegacyResourcesWeb) {
  if (-not $TargetFrontendRoot) { $TargetFrontendRoot = Get-LegacyWebPath }
  $targets.Add($TargetFrontendRoot)
  Write-Host 'Modo legacy: resources\ComfyUI\web' -ForegroundColor Yellow
}
elseif ($AllDesktopInstalls) {
  foreach ($r in Get-AllDesktopAppWebRoots) { $targets.Add($r) }
  foreach ($ex in $ExtraTargets) {
    if ($ex -and (Test-ValidWebRoot $ex) -and -not $targets.Contains($ex)) { $targets.Add($ex) }
  }
  if ($targets.Count -eq 0) {
    Write-Host 'No encontré ningún ComfyUI Desktop bajo Programs con desktop_app válido.' -ForegroundColor Red
    Write-Host 'Usa sin -AllDesktopInstalls, o -ExtraTargets "D:\...\web_custom_versions\desktop_app"' -ForegroundColor Yellow
    exit 1
  }
  Write-Host "Modo multi-Desktop: $($targets.Count) destino(s)." -ForegroundColor Yellow
}
elseif ($TargetFrontendRoot) {
  $targets.Add($TargetFrontendRoot)
}
else {
  $one = Get-DefaultFrontendRoot
  if (-not $one) {
    Write-Host 'No encontré destino. Prueba -AllDesktopInstalls, -UsePipStatic, o -TargetFrontendRoot.' -ForegroundColor Red
    exit 1
  }
  $targets.Add($one)
}

foreach ($ex in $ExtraTargets) {
  if ($AllDesktopInstalls) { continue }
  if ($ex -and (Test-ValidWebRoot $ex) -and -not $targets.Contains($ex)) {
    $targets.Add($ex)
    Write-Host "Añadido ExtraTargets: $ex" -ForegroundColor DarkGray
  }
}

foreach ($t in $targets) {
  $par = Split-Path -Parent $t
  if (-not (Test-Path $par)) {
    Write-Warning "Omitido (no existe carpeta padre): $t"
    continue
  }
  Install-One -DestRoot $t
}

Write-Host ''
Write-Host 'Listo. Reinicia las instancias de ComfyUI afectadas.' -ForegroundColor Green
foreach ($t in $targets) {
  Write-Host "  Instalado en: $t" -ForegroundColor Cyan
}
Write-Host 'Si no ves cambios en la UI: confirma que Comfy Desktop usa esa carpeta (solo una instalacion por defecto).' -ForegroundColor DarkGray
Write-Host 'Uninstall: .\Uninstall.cmd or .\scripts\uninstall.ps1 -AllDesktopInstalls' -ForegroundColor DarkGray
