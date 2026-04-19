GFV Pro Upgrade for Comfy UI (Windows)

What you do

Double click Install.cmd to put this web bundle into your Comfy UI Desktop (or pip static if that is what you use).

Double click Uninstall.cmd to bring back the previous interface from the automatic backup.

Read version.txt for supported Windows and Comfy layouts.

Read LICENSE.txt for legal terms including upstream Comfy UI frontend licensing.

Advanced

If you need special paths, open scripts\install.ps1 or scripts\uninstall.ps1 in a text editor and read the parameter block, then run PowerShell with the right switches. Most people never need this.

Contents of this folder

Install.cmd and Uninstall.cmd are the two buttons you care about.

scripts\install.ps1 and scripts\uninstall.ps1 are the scripts those buttons run.

web holds the built interface files.
