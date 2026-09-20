# Builds the quantised sources for the 20 September illustration sheet.
#
# Six columns by five rows. The bands come from SheetGrid.cs, which finds the
# thin grey frame each illustration is drawn inside; an earlier ink profile was
# used instead and it sat about sixteen pixels below the true top of four of
# the five rows, which quietly cut the top off every drawing in them.

param([int]$Scale = 5)

$sp = $PSScriptRoot
Add-Type -AssemblyName System.Drawing
Add-Type -TypeDefinition (Get-Content "$sp\PrepV2.cs" -Raw) -ReferencedAssemblies System.Drawing -ErrorAction Stop

$SRC = 'C:\Users\UCC\AppData\Local\Temp\claude\d--single-file-web-develop-corse-Start\65fe590a-f776-44fa-879a-7037ae4eb7da\images\1.png'
$OUT = Join-Path (Split-Path $PSScriptRoot -Parent) ".trace-src-v2"
New-Item -ItemType Directory -Force -Path $OUT | Out-Null
Get-ChildItem $OUT -Filter *.png -ErrorAction SilentlyContinue | Remove-Item -Force

# tile frames, from SheetGrid.cs
$rows = @(@(14, 205), @(220, 398), @(413, 592), @(607, 786), @(802, 991))
$cols = @(@(16, 260), @(273, 508), @(521, 760), @(774, 1013), @(1026, 1262), @(1275, 1518))

# Named for what each one shows, so a section can be matched to a person and a
# setting rather than to a number.
$names = @(
  'city-professional-thobe', 'abaya-tablet-review',   'thobe-shirt-discussion', 'abaya-checklist',        'suit-portrait',          'abaya-goal-flag',
  'team-laptops',            'thobe-presenting-chart', 'casual-focus-desk',      'abaya-armchair-reading', 'mixed-conversation',     'thobe-city-outlook',
  'abaya-flowchart',         'stepping-up-growth',     'thobe-window-work',      'women-shared-idea',      'suit-desk-clock',        'abaya-document',
  'thobe-desk-work',         'team-systems',           'casual-city-view',       'abaya-study',            'global-reach',           'thobe-mentoring',
  'abaya-notes',             'suit-confident',         'casual-armchair-work',   'group-agreement',        'abaya-career-path',      'thobe-vision'
)

$sheet = [System.Drawing.Bitmap]::FromFile($SRC)
# just inside the frame line, so the grey rule is not traced as a border
$INSET = 4
$n = 0
foreach ($r in $rows) {
  foreach ($c in $cols) {
    $n++
    $x = $c[0] + $INSET
    $y = $r[0] + $INSET
    $w = ($c[1] - $c[0] + 1) - $INSET * 2
    $h = ($r[1] - $r[0] + 1) - $INSET * 2
    $name = "new-{0:d2}-{1}.png" -f $n, $names[$n - 1]
    [StartSah.PrepV2]::Build($sheet, $x, $y, $w, $h, $Scale, (Join-Path $OUT $name))
    Write-Output ("  {0,-34} {1}x{2}" -f $name, ($w * $Scale), ($h * $Scale))
  }
}

$sheet.Dispose()
Write-Output ("`n{0} quantised sources at {1}x -> {2}" -f $n, $Scale, $OUT)
