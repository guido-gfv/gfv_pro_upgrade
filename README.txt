GFV Pro — instalador de frontend ComfyUI (Windows)

==================================================



DONDE ESTA EL UI (IMPORTANTE)

-----------------------------

**ComfyUI Desktop** (app en Program Files) suele servir el interfaz desde:



  %LOCALAPPDATA%\Programs\ComfyUI\resources\ComfyUI\web_custom_versions\desktop_app



Lo confirma el log (Prompt Server) web root: ...\web_custom_versions\desktop_app



Tu **Documents\ComfyUI\.venv** puede NO tener la carpeta **comfyui_frontend_package**

(es normal si Manager no instalo/actualizo ese paquete). El Desktop igual arranca

porque usa **desktop_app**, no esa ruta del pip.



Instalacion solo con **python main.py** / venv clásico: entonces el UI suele ir al

paquete pip, por ejemplo:



  Documents\ComfyUI\.venv\Lib\site-packages\comfyui_frontend_package\static



Si falta:  .\.venv\Scripts\python.exe -m pip install comfyui-frontend-package



Que hace scripts\install.ps1

--------------------

1) Autodetección: primero **desktop_app** (si existe index.html), si no **static** del pip.

2) Backup: static.gfv.backup.AAAAMMDD-HHMMSS (junto al directorio padre del destino).

3) Copia el contenido de la carpeta "web" del paquete GFV encima del destino.



Antes de instalar

-----------------

- Cierra ComfyUI Desktop por completo.



Instalar (lo habitual)

----------------------

  Install.cmd   (doble clic)

o, si prefieres consola:

  powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1



Forzar solo ruta pip (ignorar Desktop):

  .\scripts\install.ps1 -UsePipStatic



Ruta manual (Desktop o pip):

  .\scripts\install.ps1 -TargetFrontendRoot "C:\...\web_custom_versions\desktop_app"

  .\scripts\install.ps1 -TargetFrontendRoot "C:\...\comfyui_frontend_package\static"



Varias instalaciones Desktop a la vez (todas las que encuentre bajo %LOCALAPPDATA%\\Programs\\ComfyUI*):

  .\scripts\install.ps1 -AllDesktopInstalls



Portable (ruta manual además de la principal):

  .\scripts\install.ps1 -ExtraTargets "D:\ComfyPortable\...\web_custom_versions\desktop_app"



  .\scripts\install.ps1 -AllDesktopInstalls -ExtraTargets "D:\otro\...\desktop_app"



Desinstalar varios Desktop a la vez:

  .\scripts\uninstall.ps1 -AllDesktopInstalls

(antes restore.ps1; ahora se llama uninstall.ps1)



Para localizar el destino real: abre **%APPDATA%\ComfyUI\logs\comfyui.log** y busca la linea

**[Prompt Server] web root:** ...



Desinstalar / volver al UI anterior (backup GFV)

--------------------------------------------------

  Uninstall.cmd   (doble clic)

o:

  powershell -ExecutionPolicy Bypass -File .\scripts\uninstall.ps1

INSTALL.cmd y RESTORE.cmd siguen existiendo como alias: llaman a Install.cmd y Uninstall.cmd.



Opcion avanzada (no recomendado): instalar sobre resources\ComfyUI\web

  .\scripts\install.ps1 -UseLegacyResourcesWeb



Actualizaciones del Desktop

---------------------------

Una actualización del instalador oficial puede volver a poner el UI por defecto.

Vuelve a ejecutar este instalador si hace falta.



Licencia: deriva de ComfyUI_frontend (GPL-3.0).

