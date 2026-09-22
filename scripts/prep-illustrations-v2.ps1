# Builds the quantised sources for the 20, 21 and 23 September illustration sheets.
#
# Sheet A (20 September) is six columns by five rows, each drawing inside a thin
# grey frame. The bands come from SheetGrid.cs, which finds those frames; an
# earlier ink profile sat about sixteen pixels below the true top of four of the
# five rows and quietly cut the top off every drawing in them.
#
# Sheet B ("For Saudi Ambition", 21 September) is four columns by two rows with
# no frames: the columns are split by thin vertical rules and each drawing has a
# caption underneath. SheetProfile.cs reads both — the rules at x 308/595/888,
# and the blank rows between each drawing and its caption.
#
#   powershell -File scripts/prep-illustrations-v2.ps1
#   powershell -File scripts/prep-illustrations-v2.ps1 -Out .trace-trial -Only "new-0[78]|new-3[14]"

param(
  [int]$Scale = 5,
  [string]$Out = '',
  [string]$Only = ''
)

$sp = $PSScriptRoot
Add-Type -AssemblyName System.Drawing
Add-Type -TypeDefinition (Get-Content "$sp\PrepV2.cs" -Raw) -ReferencedAssemblies System.Drawing -ErrorAction Stop

$IMAGES = 'C:\Users\UCC\AppData\Local\Temp\claude\d--single-file-web-develop-corse-Start\65fe590a-f776-44fa-879a-7037ae4eb7da\images'
if (-not $Out) { $Out = Join-Path (Split-Path $PSScriptRoot -Parent) ".trace-src-v2" }
New-Item -ItemType Directory -Force -Path $Out | Out-Null
if (-not $Only) { Get-ChildItem $Out -Filter *.png -ErrorAction SilentlyContinue | Remove-Item -Force }

function Cut($sheet, $rows, $cols, $inset, $names, $start) {
  $n = $start
  $i = 0
  foreach ($r in $rows) {
    foreach ($c in $cols) {
      $name = "new-{0:d2}-{1}.png" -f $n, $names[$i]
      $n++; $i++
      if ($Only -and ($name -notmatch $Only)) { continue }
      $x = $c[0] + $inset
      $y = $r[0] + $inset
      $w = ($c[1] - $c[0] + 1) - $inset * 2
      $h = ($r[1] - $r[0] + 1) - $inset * 2
      [StartSah.PrepV2]::Build($sheet, $x, $y, $w, $h, $Scale, (Join-Path $Out $name))
      Write-Output ("  {0,-40} {1,4}x{2,-4}  {3}" -f $name, ($w * $Scale), ($h * $Scale), [StartSah.PrepV2]::LastDisc)
    }
  }
}

# ---- sheet A: 20 September, thirty drawings in grey frames -------------------
# Named for what each one shows, so a section can be matched to a person and a
# setting rather than to a number.
$namesA = @(
  'city-professional-thobe', 'abaya-tablet-review',   'thobe-shirt-discussion', 'abaya-checklist',        'suit-portrait',          'abaya-goal-flag',
  'team-laptops',            'thobe-presenting-chart', 'casual-focus-desk',      'abaya-armchair-reading', 'mixed-conversation',     'thobe-city-outlook',
  'abaya-flowchart',         'stepping-up-growth',     'thobe-window-work',      'women-shared-idea',      'suit-desk-clock',        'abaya-document',
  'thobe-desk-work',         'team-systems',           'casual-city-view',       'abaya-study',            'global-reach',           'thobe-mentoring',
  'abaya-notes',             'suit-confident',         'casual-armchair-work',   'group-agreement',        'abaya-career-path',      'thobe-vision'
)
$sheetA = [System.Drawing.Bitmap]::FromFile("$IMAGES\1.png")
# tile frames, from SheetGrid.cs; the inset steps just inside the frame line so
# the grey rule is not traced as a border
Cut $sheetA `
  @(@(14, 205), @(220, 398), @(413, 592), @(607, 786), @(802, 991)) `
  @(@(16, 260), @(273, 508), @(521, 760), @(774, 1013), @(1026, 1262), @(1275, 1518)) `
  4 $namesA 1
$sheetA.Dispose()

# ---- sheet B: 21 September, "For Saudi Ambition" ----------------------------
# The young-audience set the 20 September note asked for: the open abaya over
# professional clothing, the student in a hoodie, a thobe and an abaya solving
# a problem together.
$namesB = @(
  'thobe-learning-laptop', 'abaya-tablet-confidence', 'thobe-casual-colleague', 'open-abaya-presenting',
  'casual-hoodie-career',  'abaya-thobe-solving',     'abaya-laptop-balance',   'thobe-goal-mountain'
)
$sheetB = [System.Drawing.Bitmap]::FromFile("$IMAGES\8.png")
# drawing bands stop above each caption; column bands stop short of the rules
Cut $sheetB `
  @(@(300, 590), @(720, 1002)) `
  @(@(28, 305), @(311, 592), @(598, 885), @(891, 1175)) `
  0 $namesB 31
$sheetB.Dispose()

# ---- sheet C: 23 September, the "Startsah Colour Palette" sheet -------------
# Its lower half is two rows of drawings: seven young Saudi professionals, one
# figure each (the young women in professional and student wear the client
# asked for among them), then four wide scenes "on the website". Columns are
# split by thin rules, captions sit underneath. The rules SheetProfile also
# reports at x 142 and 492 are a lamp cord and a board edge inside the scenes.
$namesC = @(
  'young-man-thobe-tablet', 'young-man-casual-hoodie', 'young-man-suit-bag', 'young-woman-abaya-tablet',
  'young-woman-open-abaya', 'young-woman-professional', 'young-woman-student'
)
$namesD = @('scene-learning-together', 'scene-coaching-support', 'scene-career-growth', 'scene-collaborate')
$sheetC = [System.Drawing.Bitmap]::FromFile("$IMAGES\9.png")
# its discs and the sage blazer are a paler, greyer green than the other sheets
[StartSah.PrepV2]::GreenBiasR = 10
[StartSah.PrepV2]::GreenBiasB = 4
# and its pale clothes and screens sit between paper and grey
[StartSah.PrepV2]::SettleLights = $true
# rows end at the blank band above each caption (y 549-560 and 868-877)
Cut $sheetC `
  @(, @(338, 552)) `
  @(@(10, 230), @(236, 443), @(449, 655), @(662, 869), @(875, 1084), @(1091, 1304), @(1310, 1525)) `
  0 $namesC 39
Cut $sheetC `
  @(, @(698, 870)) `
  @(@(4, 410), @(416, 769), @(775, 1158), @(1164, 1522)) `
  0 $namesD 46
[StartSah.PrepV2]::GreenBiasR = 18
[StartSah.PrepV2]::GreenBiasB = 8
[StartSah.PrepV2]::SettleLights = $false
$sheetC.Dispose()

$files = Get-ChildItem $Out -Filter *.png
Write-Output ("`n{0} quantised sources at {1}x -> {2}" -f $files.Count, $Scale, $Out)
