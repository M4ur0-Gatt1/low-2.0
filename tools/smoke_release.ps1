param(
  [Parameter(Mandatory = $false)]
  [string]$Executable = "dist\LOW.exe",
  [int]$Seconds = 12
)

$resolved = Resolve-Path -LiteralPath $Executable -ErrorAction Stop
$process = $null
try {
  $process = Start-Process -FilePath $resolved.Path -WorkingDirectory (Split-Path $resolved.Path) -WindowStyle Hidden -PassThru
  Start-Sleep -Seconds $Seconds
  if ($process.HasExited) {
    throw "LOW terminó durante el arranque (exit $($process.ExitCode))."
  }
  $size = (Get-Item -LiteralPath $resolved.Path).Length
  Write-Output "SMOKE EXE OK: PID $($process.Id), vivo tras ${Seconds}s, $size bytes"
}
finally {
  if ($process -and -not $process.HasExited) {
    Stop-Process -Id $process.Id -Force
    $process.WaitForExit()
  }
}
