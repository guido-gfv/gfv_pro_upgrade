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
Install_Portables.cmd helps when you have multiple portable installs.

Portable quick guide (important):

When Install_Portables.cmd asks for "Portable targets", you can paste:
- the main portable folder (recommended), for example:
  E:\comfyUi_portable\ComfyUI_windows_portable
- or the exact web folder (must contain index.html).

Auto-detect checks these inside the path:
ComfyUI\web, web, web_custom_versions\desktop_app, static, python_embeded\Lib\site-packages\comfyui_frontend_package\static
If none matches, it also does a fallback recursive search for index.html in common Comfy layouts.

Multiple portables:
E:\Comfy1\ComfyUI_windows_portable;F:\Comfy2\ComfyUI_windows_portable



scripts\install.ps1 and scripts\uninstall.ps1 are the scripts those buttons run.
scripts\install-portables.ps1 is the helper used by Install_Portables.cmd.



web holds the built interface files.

