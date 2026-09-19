# Builds the quantised, high-resolution PNGs the tracer works from.
#
# Snapping to the brand palette before tracing does two things: the tracer sees
# a handful of flat regions instead of thousands of anti-aliased shades, and the
# artwork lands on the exact brand colours. The sheets were drawn with a softer
# green (#00A050) and a near-black ink (#101010); these become #00C853 and
# #2E2E2E.

param([int]$Scale = 4)

$sp = $PSScriptRoot
Add-Type -AssemblyName System.Drawing
Add-Type -TypeDefinition (Get-Content "$sp\Prep.cs" -Raw) -ReferencedAssemblies System.Drawing -ErrorAction Stop

$OUT = Join-Path (Split-Path $PSScriptRoot -Parent) ".trace-src"
New-Item -ItemType Directory -Force -Path $OUT | Out-Null
Get-ChildItem $OUT -Filter *.png -ErrorAction SilentlyContinue | Remove-Item -Force

function Build($src, $x, $y, $w, $h, $name) {
  [StartSah.Prep]::Build($src, $x, $y, $w, $h, $Scale, (Join-Path $OUT $name))
}

# ---------------------------- sheet 1: the unnamed twenty -------------------
$src1 = [System.Drawing.Bitmap]::FromFile('C:\Users\UCC\Downloads\image - 2026-09-17T142637.124.png')
$rows1 = @(@(52, 282), @(310, 523), @(552, 756), @(783, 985))
$cols1 = @(@(25, 297), @(332, 597), @(633, 902), @(940, 1213), @(1246, 1517))
$names1 = @(
  'growth-momentum', 'career-pathways', 'communication', 'training-delivery', 'new-ideas',
  'teamwork', 'coaching-mentoring', 'learning', 'problem-solving', 'career-progression',
  'time-focus', 'goals-outcomes', 'network-community', 'idea-leadership', 'balance-wellbeing',
  'partnership', 'insights-analysis', 'next-step', 'global-english', 'vision-direction'
)
$INSET = 4
$n = 0
foreach ($r in $rows1) {
  foreach ($c in $cols1) {
    $n++
    Build $src1 ($c[0] + $INSET) ($r[0] + $INSET) `
          (($c[1] - $c[0] + 1) - $INSET * 2) (($r[1] - $r[0] + 1) - $INSET * 2) `
          ("{0:d2}-{1}.png" -f $n, $names1[$n - 1])
  }
}
$src1.Dispose()

# ---------------------------- sheet 2: the ten topics -----------------------
$raw = [System.Drawing.Bitmap]::FromFile('C:\Users\UCC\Downloads\Images .png')
$work = New-Object System.Drawing.Bitmap $raw.Width, $raw.Height, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gw = [System.Drawing.Graphics]::FromImage($work)
$gw.DrawImage($raw, 0, 0, $raw.Width, $raw.Height)
$white = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
# the title and subtitle sit over the artwork, so they are painted out first
$textBlocks = @(
  @(52, 46, 275, 152), @(429, 46, 660, 95), @(429, 95, 605, 120),
  @(801, 46, 1030, 140), @(1192, 46, 1420, 113), @(1192, 113, 1365, 140),
  @(52, 425, 222, 527), @(429, 425, 790, 474), @(429, 474, 580, 498),
  @(801, 425, 1100, 490), @(1192, 425, 1477, 482),
  @(52, 741, 380, 832), @(429, 741, 620, 832)
)
foreach ($t in $textBlocks) { $gw.FillRectangle($white, $t[0], $t[1], ($t[2] - $t[0] + 1), ($t[3] - $t[1] + 1)) }
$gw.Dispose(); $white.Dispose(); $raw.Dispose()

$cells2 = @(
  @(52, 363, 46, 365, 'human-development'),
  @(429, 790, 46, 365, 'career-employability'),
  @(801, 1141, 46, 365, 'communication-english'),
  @(1192, 1477, 46, 365, 'personal-development'),
  @(52, 363, 425, 703, 'leadership-workplace'),
  @(429, 790, 425, 703, 'training-development'),
  @(801, 1141, 425, 703, 'coaching-mentoring-topic'),
  @(1192, 1477, 425, 703, 'organisational-development'),
  @(52, 363, 741, 998, 'teamwork-culture'),
  @(429, 790, 741, 998, 'train-the-trainer')
)
foreach ($c in $cells2) {
  Build $work ($c[0] + 3) ($c[2] + 3) (($c[1] - $c[0] + 1) - 6) (($c[3] - $c[2] + 1) - 6) ("topic-{0}.png" -f $c[4])
}
$work.Dispose()

$files = Get-ChildItem $OUT -Filter *.png
Write-Output ("{0} quantised sources at {1}x -> {2}" -f $files.Count, $Scale, $OUT)
