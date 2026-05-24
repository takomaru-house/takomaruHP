$ErrorActionPreference = "Stop"
$dir = $PSScriptRoot

$fileMap = @{
  "artboard-archive.jsx" = "1c04d962-04af-404f-8b34-e99736bc8bda"
  "app.jsx"              = "acb9d8ae-deb7-462c-be3c-e12a7a34a86d"
  "shared.jsx"           = "0c21a614-edbc-4d95-aaae-13e8838edd12"
  "tweaks-panel.jsx"     = "670b7659-3726-4d28-90a0-2615c0bfa643"
}

function Compress-Gzip {
  param([byte[]]$bytes)
  $ms = New-Object System.IO.MemoryStream
  $gz = New-Object System.IO.Compression.GZipStream($ms, [System.IO.Compression.CompressionLevel]::Optimal)
  $gz.Write($bytes, 0, $bytes.Length)
  $gz.Close()
  return $ms.ToArray()
}

Write-Host "Reading index.html..." -ForegroundColor Cyan
$htmlPath = Join-Path $dir "index.html"
$html = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

$tag    = '<script type="__bundler/manifest">'
$endTag = '</script>'
$start  = $html.IndexOf($tag) + $tag.Length
$end    = $html.IndexOf($endTag, $start)
$json   = $html.Substring($start, $end - $start)
$manifest = $json | ConvertFrom-Json

foreach ($file in $fileMap.Keys) {
  $uuid    = $fileMap[$file]
  $srcPath = Join-Path $dir $file
  if (-not (Test-Path $srcPath)) {
    Write-Warning "Not found: $file"
    continue
  }
  Write-Host "  Updating: $file" -ForegroundColor Yellow
  $srcBytes   = [System.IO.File]::ReadAllBytes($srcPath)
  $compressed = Compress-Gzip $srcBytes
  $base64     = [System.Convert]::ToBase64String($compressed)
  $manifest.$uuid.data       = $base64
  $manifest.$uuid.compressed = $true
}

Write-Host "Writing index.html..." -ForegroundColor Cyan
$newJson = $manifest | ConvertTo-Json -Compress -Depth 5
$newHtml = $html.Substring(0, $start) + $newJson + $html.Substring($end)
[System.IO.File]::WriteAllText($htmlPath, $newHtml, [System.Text.Encoding]::UTF8)
Write-Host "Done! index.html updated." -ForegroundColor Green
