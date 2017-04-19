$ScriptPath = "C:\\Users\\$env:UserName\\FixServerDatFile.ps1"
$StartLink = "$env:appdata\\Microsoft\\Windows\\Start Menu\\Programs\\Fix MC Server.dat.lnk"
$ScriptDl = "https://raw.githubusercontent.com/HexagonMinecraft/hexagonminecraft.github.io/master/FixServerDatFile.ps1"

wget $ScriptDl -o $ScriptPath

$TargetFile = $ScriptPath
$ShortcutFile = "$StartLink"
$WScriptShell = New-Object -ComObject WScript.Shell
$Shortcut = $WScriptShell.CreateShortcut($ShortcutFile)
$Shortcut.TargetPath = $TargetFile
$Shortcut.Save()
