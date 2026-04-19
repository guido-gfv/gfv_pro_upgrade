#Requires -Version 5.1
# Deprecated: use uninstall.ps1 or Uninstall.cmd (same behavior).
param(
  [string]$TargetFrontendRoot = '',
  [switch]$UseLegacyResourcesWeb,
  [switch]$UsePipStatic,
  [switch]$AllDesktopInstalls,
  [string[]]$ExtraTargets = @()
)
& (Join-Path $PSScriptRoot 'scripts\uninstall.ps1') -TargetFrontendRoot $TargetFrontendRoot -UseLegacyResourcesWeb:$UseLegacyResourcesWeb -UsePipStatic:$UsePipStatic -AllDesktopInstalls:$AllDesktopInstalls -ExtraTargets $ExtraTargets
