using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

namespace StartSah
{
    /// <summary>
    /// Prepares the 20 September illustration sheet for tracing.
    ///
    /// Same idea as Prep: crop, scale up, snap to the palette, key the paper to
    /// transparent. This sheet adds two things the first one did not have — a
    /// soft mint disc behind many of the figures, and a Riyadh skyline drawn in
    /// muted teal — so the palette carries two tints of the logo green, which is
    /// what the note allows: "perhaps one lighter/darker tint derived from it
    /// for backgrounds".
    ///
    ///   #00C853  the logo green, for accents
    ///   #007A31  dark tint, for the forest-green shapes (hillsides, a sweater)
    ///   #A9DCC5  mid tint, for skylines and secondary shapes
    ///   #E6F6EE  light tint, for the discs behind figures
    ///   #2E2E2E  charcoal line work
    ///   #E6E6E6  light grey fills
    ///
    /// The sheets draw green in two tones: their primary green, lum 90-120, and
    /// a forest green around lum 70. Both used to land on #00C853, which turned
    /// every hillside and dark sweater into a slab of the brightest green on the
    /// page — part of why the 21 September note found the green "heavy". The
    /// forest tone now goes to a darker tint of the same green, which the note
    /// allows.
    /// </summary>
    public static class PrepV2
    {
        public static double InkCeiling = 165;
        public static double GreyFloor = 172;
        public static double PaperFloor = 247;
        /// <summary>Green lighter than this is a background wash, not an accent.</summary>
        public static double MintFloor = 200;
        /// <summary>Green with more red than this is a muted skyline tone.</summary>
        public static int AccentMaxRed = 50;
        /// <summary>
        /// Saturated green darker than this is the forest tone. The sheets'
        /// primary green sits around lum 90 (the chart bars, and the swatch on
        /// the 21 September spec sheet); the forest tone around 70-76. 82 falls
        /// cleanly between them — at 90 the bars split pixel by pixel.
        /// </summary>
        public static double ForestCeiling = 82;

        /// <summary>
        /// How much greener than red (and than blue) a pixel must be to count as
        /// green at all. 18/8 suits the first two sheets. The 23 September sheet
        /// paints its discs and a sage blazer in a paler, greyer green that sits
        /// right on that line, so half their pixels fell to grey and they came
        /// out blotched; that sheet is cut with a lower bias.
        /// </summary>
        public static int GreenBiasR = 18;
        public static int GreenBiasB = 8;

        /// <summary>
        /// Settle paper, light grey and mint by majority, for the 23 September
        /// sheet: its pale clothes and tablet screens sit on the line between
        /// paper and grey (or paper and mint) and came out mottled.
        /// </summary>
        public static bool SettleLights = false;

        /// <summary>What FitDisc did to the last illustration, for the build log.</summary>
        public static string LastDisc = "";

        public static void Build(Bitmap source, int x, int y, int w, int h, int scale, string outPath)
        {
            using (var crop = source.Clone(new Rectangle(x, y, w, h), PixelFormat.Format32bppArgb))
            {
                Median(crop, 1);

                int ow = w * scale, oh = h * scale;
                using (var big = new Bitmap(ow, oh, PixelFormat.Format32bppArgb))
                {
                    using (var g = Graphics.FromImage(big))
                    {
                        g.InterpolationMode = InterpolationMode.HighQualityBicubic;
                        g.PixelOffsetMode = PixelOffsetMode.HighQuality;
                        g.SmoothingMode = SmoothingMode.HighQuality;
                        g.DrawImage(crop, 0, 0, ow, oh);
                    }

                    // keep the true lightness; the tone of a whole green shape
                    // is judged on it after quantising has thrown it away
                    var lum = Lightness(big);
                    Quantise(big);
                    OpenColour(big, 0xE6, 0xE6, 0xE6, 4);
                    CloseColour(big, 0xE6, 0xE6, 0xE6, 5);
                    FillHoles(big, 0xE6, 0xE6, 0xE6);
                    FillHoles(big, 0xE6, 0xF6, 0xEE);
                    // Anti-aliasing between two colours lands on a third: a
                    // mid-mint rim and a pale mint ring where green fades into
                    // paper, a forest rim where it meets ink. Slivers that thin
                    // are not shapes. The mint goes first so that what it hands
                    // back is settled by the green vote after it.
                    OpenReassign(big, 0xA9, 0xDC, 0xC5, 2);
                    OpenReassign(big, 0xE6, 0xF6, 0xEE, 3);
                    ToneByShape(big, lum);
                    GreenMode(big, 6, 2);
                    AbsorbForestRim(big, 3);
                    AbsorbMintFringe(big, 6);
                    if (SettleLights) LightMode(big, 5, 2);
                    OpenReassign(big, 0x00, 0x7A, 0x31, 3);
                    Despeckle(big, 900);
                    FitDisc(big);
                    big.Save(outPath, ImageFormat.Png);
                }
            }
        }

        static void Median(Bitmap bmp, int radius)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var src = new byte[len];
            Marshal.Copy(bd.Scan0, src, 0, len);
            var dst = (byte[])src.Clone();
            int side = radius * 2 + 1;
            var window = new byte[side * side];

            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int p = y * stride + x * 4;
                    double lum = 0.299 * src[p + 2] + 0.587 * src[p + 1] + 0.114 * src[p];
                    if (lum < 225) continue;

                    bool nearInk = false;
                    for (int dy = -radius; dy <= radius && !nearInk; dy++)
                        for (int dx = -radius; dx <= radius; dx++)
                        {
                            int nx = x + dx, ny = y + dy;
                            if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
                            int q = ny * stride + nx * 4;
                            if (0.299 * src[q + 2] + 0.587 * src[q + 1] + 0.114 * src[q] < 200) { nearInk = true; break; }
                        }
                    if (nearInk) continue;

                    for (int c = 0; c < 3; c++)
                    {
                        int n = 0;
                        for (int dy = -radius; dy <= radius; dy++)
                            for (int dx = -radius; dx <= radius; dx++)
                            {
                                int nx = x + dx, ny = y + dy;
                                if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
                                window[n++] = src[ny * stride + nx * 4 + c];
                            }
                        Array.Sort(window, 0, n);
                        dst[p + c] = window[n / 2];
                    }
                }

            Marshal.Copy(dst, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        static void Quantise(Bitmap bmp)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int len = bd.Stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);

            for (int i = 0; i < len; i += 4)
            {
                int b = buf[i], g = buf[i + 1], r = buf[i + 2];
                double lum = 0.299 * r + 0.587 * g + 0.114 * b;
                bool greenish = g > r + GreenBiasR && g > b + GreenBiasB && g > 60;

                int nr, ng, nb;
                if (greenish && lum >= MintFloor) { nr = 0xE6; ng = 0xF6; nb = 0xEE; }
                else if (greenish && r > AccentMaxRed) { nr = 0xA9; ng = 0xDC; nb = 0xC5; }
                else if (greenish && lum < ForestCeiling) { nr = 0x00; ng = 0x7A; nb = 0x31; }
                else if (greenish) { nr = 0x00; ng = 0xC8; nb = 0x53; }
                else if (lum < InkCeiling) { nr = 0x2E; ng = 0x2E; nb = 0x2E; }
                else if (lum >= GreyFloor && lum < PaperFloor) { nr = 0xE6; ng = 0xE6; nb = 0xE6; }
                else { nr = 0xFF; ng = 0xFF; nb = 0xFF; }

                if (nr == 255 && ng == 255 && nb == 255)
                {
                    buf[i] = 255; buf[i + 1] = 255; buf[i + 2] = 255; buf[i + 3] = 0;
                }
                else
                {
                    buf[i] = (byte)nb; buf[i + 1] = (byte)ng; buf[i + 2] = (byte)nr; buf[i + 3] = 255;
                }
            }

            Marshal.Copy(buf, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        static bool Is(byte[] buf, int i, int r, int g, int b)
        {
            return buf[i + 3] != 0 && buf[i] == b && buf[i + 1] == g && buf[i + 2] == r;
        }

        static void OpenColour(Bitmap bmp, int r, int g, int b, int radius)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);

            var mask = new bool[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                    mask[y * w + x] = Is(buf, y * stride + x * 4, r, g, b);

            var eroded = new bool[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    if (!mask[y * w + x]) continue;
                    bool all = true;
                    for (int dy = -radius; dy <= radius && all; dy++)
                        for (int dx = -radius; dx <= radius; dx++)
                        {
                            int nx = x + dx, ny = y + dy;
                            if (nx < 0 || ny < 0 || nx >= w || ny >= h) { all = false; break; }
                            if (!mask[ny * w + nx]) { all = false; break; }
                        }
                    eroded[y * w + x] = all;
                }

            var dil = new bool[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    if (!eroded[y * w + x]) continue;
                    for (int dy = -radius; dy <= radius; dy++)
                        for (int dx = -radius; dx <= radius; dx++)
                        {
                            int nx = x + dx, ny = y + dy;
                            if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
                            dil[ny * w + nx] = true;
                        }
                }

            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int id = y * w + x;
                    if (!mask[id] || dil[id]) continue;
                    int i = y * stride + x * 4;
                    buf[i] = 255; buf[i + 1] = 255; buf[i + 2] = 255; buf[i + 3] = 0;
                }

            Marshal.Copy(buf, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        static void CloseColour(Bitmap bmp, int r, int g, int b, int radius)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);

            var target = new bool[w * h];
            var ink = new bool[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int i = y * stride + x * 4;
                    target[y * w + x] = Is(buf, i, r, g, b);
                    ink[y * w + x] = Is(buf, i, 0x2E, 0x2E, 0x2E);
                }

            var dil = new bool[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    if (!target[y * w + x]) continue;
                    for (int dy = -radius; dy <= radius; dy++)
                        for (int dx = -radius; dx <= radius; dx++)
                        {
                            int nx = x + dx, ny = y + dy;
                            if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
                            dil[ny * w + nx] = true;
                        }
                }

            var closed = new bool[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    if (!dil[y * w + x]) continue;
                    bool all = true;
                    for (int dy = -radius; dy <= radius && all; dy++)
                        for (int dx = -radius; dx <= radius; dx++)
                        {
                            int nx = x + dx, ny = y + dy;
                            if (nx < 0 || ny < 0 || nx >= w || ny >= h) { all = false; break; }
                            if (!dil[ny * w + nx]) { all = false; break; }
                        }
                    closed[y * w + x] = all;
                }

            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int id = y * w + x;
                    if (!closed[id] || target[id] || ink[id]) continue;
                    int i = y * stride + x * 4;
                    buf[i] = (byte)b; buf[i + 1] = (byte)g; buf[i + 2] = (byte)r; buf[i + 3] = 255;
                }

            Marshal.Copy(buf, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        static void FillHoles(Bitmap bmp, int r, int g, int b)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);

            Func<int, int, bool> isTarget = (x, y) => Is(buf, y * stride + x * 4, r, g, b);
            Func<int, int, bool> isPaper = (x, y) => buf[y * stride + x * 4 + 3] == 0;

            var outside = new bool[w * h];
            var stack = new Stack<int>();
            for (int x = 0; x < w; x++)
            {
                if (!isTarget(x, 0)) { outside[x] = true; stack.Push(x); }
                int bi = (h - 1) * w + x;
                if (!isTarget(x, h - 1)) { outside[bi] = true; stack.Push(bi); }
            }
            for (int y = 0; y < h; y++)
            {
                int l = y * w;
                if (!isTarget(0, y)) { outside[l] = true; stack.Push(l); }
                int ri = y * w + w - 1;
                if (!isTarget(w - 1, y)) { outside[ri] = true; stack.Push(ri); }
            }

            while (stack.Count > 0)
            {
                int cur = stack.Pop();
                int cx = cur % w, cy = cur / w;
                for (int d = 0; d < 4; d++)
                {
                    int nx = cx + (d == 0 ? 1 : d == 1 ? -1 : 0);
                    int ny = cy + (d == 2 ? 1 : d == 3 ? -1 : 0);
                    if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
                    int nid = ny * w + nx;
                    if (outside[nid] || isTarget(nx, ny)) continue;
                    outside[nid] = true;
                    stack.Push(nid);
                }
            }

            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int id = y * w + x;
                    if (outside[id] || isTarget(x, y) || !isPaper(x, y)) continue;
                    int i = y * stride + x * 4;
                    buf[i] = (byte)b; buf[i + 1] = (byte)g; buf[i + 2] = (byte)r; buf[i + 3] = 255;
                }

            Marshal.Copy(buf, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        static void Despeckle(Bitmap bmp, int minArea)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);

            Func<int, int, bool> isGrey = (x, y) => Is(buf, y * stride + x * 4, 0xE6, 0xE6, 0xE6);

            var seen = new bool[w * h];
            var stack = new Stack<int>();
            var region = new List<int>();

            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int id = y * w + x;
                    if (seen[id] || !isGrey(x, y)) continue;
                    region.Clear();
                    stack.Push(id);
                    seen[id] = true;
                    while (stack.Count > 0)
                    {
                        int cur = stack.Pop();
                        region.Add(cur);
                        int cx = cur % w, cy = cur / w;
                        for (int d = 0; d < 4; d++)
                        {
                            int nx = cx + (d == 0 ? 1 : d == 1 ? -1 : 0);
                            int ny = cy + (d == 2 ? 1 : d == 3 ? -1 : 0);
                            if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
                            int nid = ny * w + nx;
                            if (seen[nid] || !isGrey(nx, ny)) continue;
                            seen[nid] = true;
                            stack.Push(nid);
                        }
                    }
                    if (region.Count < minArea)
                        foreach (int p in region)
                        {
                            int i = (p / w) * stride + (p % w) * 4;
                            buf[i] = 255; buf[i + 1] = 255; buf[i + 2] = 255; buf[i + 3] = 0;
                        }
                }

            Marshal.Copy(buf, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        static float[] Lightness(Bitmap bmp)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
            int stride = bd.Stride;
            var buf = new byte[stride * h];
            Marshal.Copy(bd.Scan0, buf, 0, buf.Length);
            bmp.UnlockBits(bd);
            var lum = new float[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int i = y * stride + x * 4;
                    lum[y * w + x] = (float)(0.299 * buf[i + 2] + 0.587 * buf[i + 1] + 0.114 * buf[i]);
                }
            return lum;
        }

        /// <summary>
        /// Decides the green tones shape by shape instead of pixel by pixel.
        ///
        /// The sheets' greens are a continuum, so no single cut-off works for
        /// every drawing: a flat chart bar with a little texture straddles it and
        /// speckles, while a hillside with a light face and a dark face needs
        /// splitting somewhere else entirely. So each green shape is judged on
        /// its own interior. If its lightness has two clear clusters (Otsu's
        /// split explains most of the variance and the clusters sit well apart)
        /// it is two-tone and is cut at its own split. Otherwise it is one flat
        /// green with texture, and its mean decides a single tone for all of it.
        /// </summary>
        static void ToneByShape(Bitmap bmp, float[] lum)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);

            var green = new bool[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int i = y * stride + x * 4;
                    green[y * w + x] = Is(buf, i, 0x00, 0xC8, 0x53) || Is(buf, i, 0x00, 0x7A, 0x31);
                }

            var seen = new bool[w * h];
            var stack = new Stack<int>();
            for (int s = 0; s < w * h; s++)
            {
                if (!green[s] || seen[s]) continue;
                var region = new List<int>();
                stack.Push(s); seen[s] = true;
                while (stack.Count > 0)
                {
                    int cur = stack.Pop();
                    region.Add(cur);
                    int cx = cur % w, cy = cur / w;
                    for (int d = 0; d < 4; d++)
                    {
                        int nx = cx + (d == 0 ? 1 : d == 1 ? -1 : 0);
                        int ny = cy + (d == 2 ? 1 : d == 3 ? -1 : 0);
                        if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
                        int nid = ny * w + nx;
                        if (seen[nid] || !green[nid]) continue;
                        seen[nid] = true; stack.Push(nid);
                    }
                }

                // interior only: the edge pixels are blends with the paper
                var hist = new int[256];
                double sum = 0, sq = 0; int n = 0;
                foreach (int id in region)
                {
                    int x = id % w, y = id / w;
                    if (x < 3 || y < 3 || x > w - 4 || y > h - 4) continue;
                    if (!green[id - 3] || !green[id + 3] || !green[id - 3 * w] || !green[id + 3 * w]) continue;
                    double l = lum[id]; sum += l; sq += l * l; n++;
                    hist[Math.Min(255, Math.Max(0, (int)l))]++;
                }
                if (n < 200) continue;
                double mean = sum / n;
                double variance = Math.Max(1e-6, sq / n - mean * mean);

                // Otsu: the cut that best separates two clusters
                double bestSb = 0; int cut = 0; double m0 = mean, m1 = mean;
                double wB = 0, sumB = 0;
                for (int t = 0; t < 256; t++)
                {
                    wB += hist[t]; sumB += t * (double)hist[t];
                    double wF = n - wB;
                    if (wB == 0 || wF == 0) continue;
                    double mB = sumB / wB, mF = (sum - sumB) / wF;
                    double sb = wB * wF * (mB - mF) * (mB - mF) / ((double)n * n);
                    if (sb > bestSb) { bestSb = sb; cut = t; m0 = mB; m1 = mF; }
                }
                bool twoTone = bestSb / variance >= 0.75 && m1 - m0 >= 18 && m0 < ForestCeiling + 15;

                foreach (int id in region)
                {
                    bool forest = twoTone ? lum[id] <= cut : mean < ForestCeiling;
                    int i = (id / w) * stride + (id % w) * 4;
                    if (forest) { buf[i] = 0x31; buf[i + 1] = 0x7A; buf[i + 2] = 0x00; }
                    else { buf[i] = 0x53; buf[i + 1] = 0xC8; buf[i + 2] = 0x00; }
                }
            }

            Marshal.Copy(buf, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        /// <summary>
        /// Settles each green shape on one tone.
        ///
        /// A shape drawn close to the line between the bright and forest tones —
        /// the hero's chart bars sit right on it — splits pixel by pixel and
        /// comes out speckled, which is its own kind of "pixelated". A majority
        /// vote over a 13px window, among green pixels only, folds the specks
        /// into whichever tone surrounds them; a genuinely two-tone plant keeps
        /// both tones because each leaf is a solid run of one.
        /// </summary>
        static void GreenMode(Bitmap bmp, int radius, int passes)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);

            for (int pass = 0; pass < passes; pass++)
            {
                // summed-area tables of each tone, so every window costs O(1)
                var sb = new int[(w + 1) * (h + 1)];
                var sf = new int[(w + 1) * (h + 1)];
                for (int y = 0; y < h; y++)
                {
                    int rb = 0, rf = 0;
                    for (int x = 0; x < w; x++)
                    {
                        int i = y * stride + x * 4;
                        if (Is(buf, i, 0x00, 0xC8, 0x53)) rb++;
                        else if (Is(buf, i, 0x00, 0x7A, 0x31)) rf++;
                        sb[(y + 1) * (w + 1) + x + 1] = sb[y * (w + 1) + x + 1] + rb;
                        sf[(y + 1) * (w + 1) + x + 1] = sf[y * (w + 1) + x + 1] + rf;
                    }
                }

                var src = (byte[])buf.Clone();
                for (int y = 0; y < h; y++)
                    for (int x = 0; x < w; x++)
                    {
                        int i = y * stride + x * 4;
                        bool bright = Is(src, i, 0x00, 0xC8, 0x53);
                        bool forest = !bright && Is(src, i, 0x00, 0x7A, 0x31);
                        if (!bright && !forest) continue;

                        int x0 = Math.Max(0, x - radius), x1 = Math.Min(w, x + radius + 1);
                        int y0 = Math.Max(0, y - radius), y1 = Math.Min(h, y + radius + 1);
                        int nb = sb[y1 * (w + 1) + x1] - sb[y0 * (w + 1) + x1] - sb[y1 * (w + 1) + x0] + sb[y0 * (w + 1) + x0];
                        int nf = sf[y1 * (w + 1) + x1] - sf[y0 * (w + 1) + x1] - sf[y1 * (w + 1) + x0] + sf[y0 * (w + 1) + x0];

                        if (bright && nf > nb) { buf[i] = 0x31; buf[i + 1] = 0x7A; buf[i + 2] = 0x00; }
                        else if (forest && nb > nf) { buf[i] = 0x53; buf[i + 1] = 0xC8; buf[i + 2] = 0x00; }
                    }
            }

            Marshal.Copy(buf, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        /// <summary>
        /// Folds the bright rim of a forest-green shape back into it.
        ///
        /// Where a forest-green bar fades into the paper, its anti-aliased edge
        /// is a little lighter than the bar and crosses into the bright class,
        /// which left every bar and hillside with a notched bright-green edge.
        /// A bright pixel that sits between forest green and the background is
        /// that rim, and takes the forest colour. Where a bright leaf touches a
        /// dark one, only the few pixels within reach of all three change.
        /// </summary>
        static void AbsorbForestRim(Bitmap bmp, int radius)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);
            var src = (byte[])buf.Clone();

            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int i = y * stride + x * 4;
                    if (!Is(src, i, 0x00, 0xC8, 0x53)) continue;
                    bool forest = false, open = false;
                    for (int dy = -radius; dy <= radius && !(forest && open); dy++)
                        for (int dx = -radius; dx <= radius; dx++)
                        {
                            int nx = x + dx, ny = y + dy;
                            if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
                            int q = ny * stride + nx * 4;
                            if (Is(src, q, 0x00, 0x7A, 0x31)) forest = true;
                            else if (src[q + 3] == 0 || Is(src, q, 0xE6, 0xF6, 0xEE) || Is(src, q, 0xA9, 0xDC, 0xC5)) open = true;
                        }
                    if (forest && open) { buf[i] = 0x31; buf[i + 1] = 0x7A; buf[i + 2] = 0x00; }
                }

            Marshal.Copy(buf, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        /// <summary>
        /// Majority vote among the three light classes — paper, light grey and
        /// mint — so a pale shape comes out as one of them rather than a mottle
        /// of all three. Darker colours neither vote nor change.
        /// </summary>
        static void LightMode(Bitmap bmp, int radius, int passes)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);

            // 0 paper, 1 grey, 2 mint, -1 anything else
            Func<byte[], int, int> cls = (b, i) =>
                b[i + 3] == 0 ? 0 : Is(b, i, 0xE6, 0xE6, 0xE6) ? 1 : Is(b, i, 0xE6, 0xF6, 0xEE) ? 2 : -1;

            for (int pass = 0; pass < passes; pass++)
            {
                var sat = new int[3][];
                for (int k = 0; k < 3; k++) sat[k] = new int[(w + 1) * (h + 1)];
                for (int y = 0; y < h; y++)
                {
                    int r0 = 0, r1 = 0, r2 = 0;
                    for (int x = 0; x < w; x++)
                    {
                        int c = cls(buf, y * stride + x * 4);
                        if (c == 0) r0++; else if (c == 1) r1++; else if (c == 2) r2++;
                        int o = (y + 1) * (w + 1) + x + 1, u = y * (w + 1) + x + 1;
                        sat[0][o] = sat[0][u] + r0; sat[1][o] = sat[1][u] + r1; sat[2][o] = sat[2][u] + r2;
                    }
                }

                var src = (byte[])buf.Clone();
                for (int y = 0; y < h; y++)
                    for (int x = 0; x < w; x++)
                    {
                        int i = y * stride + x * 4;
                        int c = cls(src, i);
                        if (c < 0) continue;
                        int x0 = Math.Max(0, x - radius), x1 = Math.Min(w, x + radius + 1);
                        int y0 = Math.Max(0, y - radius), y1 = Math.Min(h, y + radius + 1);
                        int best = c, bestN = -1;
                        for (int k = 0; k < 3; k++)
                        {
                            var s = sat[k];
                            int n = s[y1 * (w + 1) + x1] - s[y0 * (w + 1) + x1] - s[y1 * (w + 1) + x0] + s[y0 * (w + 1) + x0];
                            if (n > bestN || (n == bestN && k == c)) { bestN = n; best = k; }
                        }
                        if (best == c) continue;
                        if (best == 0) { buf[i] = 255; buf[i + 1] = 255; buf[i + 2] = 255; buf[i + 3] = 0; }
                        else if (best == 1) { buf[i] = 0xE6; buf[i + 1] = 0xE6; buf[i + 2] = 0xE6; buf[i + 3] = 255; }
                        else { buf[i] = 0xEE; buf[i + 1] = 0xF6; buf[i + 2] = 0xE6; buf[i + 3] = 255; }
                    }
            }

            Marshal.Copy(buf, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        /// <summary>
        /// Folds the pale fringe along a green shape into the shape.
        ///
        /// The sheets light one edge of a bar or a block, and the palette reads
        /// that highlight as the mid-mint tint, leaving a pale strip down the
        /// side of every chart bar. At hero size that strip is exactly the soft
        /// edge the 21 September note describes. Mid-mint within reach of a
        /// green shape takes the green it sits against.
        /// </summary>
        static void AbsorbMintFringe(Bitmap bmp, int radius)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);
            var src = (byte[])buf.Clone();

            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int i = y * stride + x * 4;
                    if (!Is(src, i, 0xA9, 0xDC, 0xC5)) continue;
                    int nb = 0, nf = 0;
                    for (int dy = -radius; dy <= radius; dy++)
                        for (int dx = -radius; dx <= radius; dx++)
                        {
                            int nx = x + dx, ny = y + dy;
                            if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
                            int q = ny * stride + nx * 4;
                            if (Is(src, q, 0x00, 0xC8, 0x53)) nb++;
                            else if (Is(src, q, 0x00, 0x7A, 0x31)) nf++;
                        }
                    if (nb == 0 && nf == 0) continue;
                    if (nf > nb) { buf[i] = 0x31; buf[i + 1] = 0x7A; buf[i + 2] = 0x00; }
                    else { buf[i] = 0x53; buf[i + 1] = 0xC8; buf[i + 2] = 0x00; }
                }

            Marshal.Copy(buf, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        /// <summary>
        /// An opening that hands what it removes to the neighbouring colour.
        ///
        /// OpenColour sends removed pixels to paper, which is right for a grey
        /// halo on white but wrong for a rim sitting between two filled shapes:
        /// there it would leave a white hairline. Here each removed pixel takes
        /// the most common other colour around it instead.
        /// </summary>
        static void OpenReassign(Bitmap bmp, int r, int g, int b, int radius)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);

            var mask = new bool[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                    mask[y * w + x] = Is(buf, y * stride + x * 4, r, g, b);

            var eroded = new bool[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    if (!mask[y * w + x]) continue;
                    bool all = true;
                    for (int dy = -radius; dy <= radius && all; dy++)
                        for (int dx = -radius; dx <= radius; dx++)
                        {
                            int nx = x + dx, ny = y + dy;
                            if (nx < 0 || ny < 0 || nx >= w || ny >= h || !mask[ny * w + nx]) { all = false; break; }
                        }
                    eroded[y * w + x] = all;
                }

            var kept = new bool[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    if (!eroded[y * w + x]) continue;
                    for (int dy = -radius; dy <= radius; dy++)
                        for (int dx = -radius; dx <= radius; dx++)
                        {
                            int nx = x + dx, ny = y + dy;
                            if (nx >= 0 && ny >= 0 && nx < w && ny < h) kept[ny * w + nx] = true;
                        }
                }

            var src = (byte[])buf.Clone();
            var keys = new List<int>();
            var counts = new List<int>();
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int id = y * w + x;
                    if (!mask[id] || kept[id]) continue;

                    keys.Clear(); counts.Clear();
                    for (int dy = -2; dy <= 2; dy++)
                        for (int dx = -2; dx <= 2; dx++)
                        {
                            int nx = x + dx, ny = y + dy;
                            if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
                            if (mask[ny * w + nx]) continue;
                            int q = ny * stride + nx * 4;
                            int key = src[q + 3] == 0 ? -1 : (src[q + 2] << 16) | (src[q + 1] << 8) | src[q];
                            int k = keys.IndexOf(key);
                            if (k < 0) { keys.Add(key); counts.Add(1); } else counts[k]++;
                        }

                    int best = -1, bestN = 0;
                    for (int k = 0; k < keys.Count; k++)
                        if (counts[k] > bestN) { bestN = counts[k]; best = keys[k]; }

                    int i = y * stride + x * 4;
                    if (best == -1) { buf[i] = 255; buf[i + 1] = 255; buf[i + 2] = 255; buf[i + 3] = 0; }
                    else
                    {
                        buf[i] = (byte)(best & 0xFF); buf[i + 1] = (byte)((best >> 8) & 0xFF);
                        buf[i + 2] = (byte)((best >> 16) & 0xFF); buf[i + 3] = 255;
                    }
                }

            Marshal.Copy(buf, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        /// <summary>
        /// Makes the mint disc behind a figure an actual circle.
        ///
        /// The sheet's discs are soft-edged and only about 150px across, so the
        /// palette threshold cuts them unevenly and the trace follows every
        /// notch — at hero size that ragged rim is the "soft/pixelated" look the
        /// 21 September note describes. A circle is fitted to the stretch of rim
        /// that meets open paper (where the figure covers it, the edge is not the
        /// disc's), then the rim is trimmed and filled back to that circle.
        ///
        /// Only a thin band at the rim changes. Pixels deep inside the circle are
        /// left alone, because a white thobe standing in front of the disc is
        /// also "paper" to this image and must not turn mint.
        /// </summary>
        static void FitDisc(Bitmap bmp)
        {
            LastDisc = "";
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);

            try
            {
                var mint = new bool[w * h];
                for (int y = 0; y < h; y++)
                    for (int x = 0; x < w; x++)
                        mint[y * w + x] = Is(buf, y * stride + x * 4, 0xE6, 0xF6, 0xEE);

                // largest mint component
                var seen = new bool[w * h];
                var stack = new Stack<int>();
                var region = new List<int>();
                List<int> best = null;
                for (int s = 0; s < w * h; s++)
                {
                    if (!mint[s] || seen[s]) continue;
                    region = new List<int>();
                    stack.Push(s); seen[s] = true;
                    while (stack.Count > 0)
                    {
                        int cur = stack.Pop();
                        region.Add(cur);
                        int cx = cur % w, cy = cur / w;
                        for (int d = 0; d < 4; d++)
                        {
                            int nx = cx + (d == 0 ? 1 : d == 1 ? -1 : 0);
                            int ny = cy + (d == 2 ? 1 : d == 3 ? -1 : 0);
                            if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
                            int nid = ny * w + nx;
                            if (seen[nid] || !mint[nid]) continue;
                            seen[nid] = true; stack.Push(nid);
                        }
                    }
                    if (best == null || region.Count > best.Count) best = region;
                }

                if (best == null || best.Count < 0.015 * w * h) { LastDisc = "no disc"; return; }

                // rim points that meet open paper, away from the crop edge
                var px = new List<double>();
                var py = new List<double>();
                foreach (int id in best)
                {
                    int x = id % w, y = id / w;
                    if (x < 2 || y < 2 || x > w - 3 || y > h - 3) continue;
                    bool rim = false;
                    for (int d = 0; d < 4 && !rim; d++)
                    {
                        int nx = x + (d == 0 ? 1 : d == 1 ? -1 : 0);
                        int ny = y + (d == 2 ? 1 : d == 3 ? -1 : 0);
                        if (buf[ny * stride + nx * 4 + 3] == 0) rim = true;
                    }
                    if (rim) { px.Add(x); py.Add(y); }
                }
                if (px.Count < 200) { LastDisc = "disc rim too short"; return; }

                // The artwork keeps a thin white halo round every head and
                // shoulder, so the disc also meets paper all round the figures.
                // Those points belong to no circle. RANSAC finds the one circle
                // the most rim points agree on — the outer arc — and ignores them.
                var rng = new Random(20260921);
                int n = px.Count;
                double tol = 3.5;
                int bestIn = 0; double bcx = 0, bcy = 0, br = 0;
                for (int it = 0; it < 3000; it++)
                {
                    int a = rng.Next(n), b2 = rng.Next(n), c2 = rng.Next(n);
                    double qx, qy, qr;
                    if (!Circle3(px[a], py[a], px[b2], py[b2], px[c2], py[c2], out qx, out qy, out qr)) continue;
                    if (qr < 0.12 * Math.Min(w, h) || qr > 0.75 * Math.Max(w, h)) continue;
                    int cnt = 0;
                    for (int k = 0; k < n; k++)
                    {
                        double dd = Math.Sqrt((px[k] - qx) * (px[k] - qx) + (py[k] - qy) * (py[k] - qy)) - qr;
                        if (Math.Abs(dd) < tol) cnt++;
                    }
                    if (cnt > bestIn) { bestIn = cnt; bcx = qx; bcy = qy; br = qr; }
                }
                if (bestIn < 150) { LastDisc = string.Format("left as drawn (no circle, best {0} of {1})", bestIn, n); return; }

                // least-squares refit on the agreeing points
                var ix = new List<double>(); var iy = new List<double>();
                for (int k = 0; k < n; k++)
                {
                    double dd = Math.Sqrt((px[k] - bcx) * (px[k] - bcx) + (py[k] - bcy) * (py[k] - bcy)) - br;
                    if (Math.Abs(dd) < tol * 1.5) { ix.Add(px[k]); iy.Add(py[k]); }
                }
                double ccx, ccy, rad;
                if (!FitLeastSquares(ix, iy, out ccx, out ccy, out rad)) { LastDisc = "disc fit singular"; return; }

                double err = 0;
                var bins = new bool[36];
                for (int k = 0; k < ix.Count; k++)
                {
                    double dd = Math.Sqrt((ix[k] - ccx) * (ix[k] - ccx) + (iy[k] - ccy) * (iy[k] - ccy)) - rad;
                    err += dd * dd;
                    double ang = Math.Atan2(iy[k] - ccy, ix[k] - ccx);
                    bins[(int)((ang + Math.PI) / (2 * Math.PI) * 36) % 36] = true;
                }
                double rms = Math.Sqrt(err / ix.Count) / rad;
                int arc = 0;
                foreach (bool bb in bins) if (bb) arc++;

                int inside = 0;
                foreach (int id in best)
                {
                    double dx = id % w - ccx, dy = id / w - ccy;
                    if (Math.Sqrt(dx * dx + dy * dy) <= rad + 2) inside++;
                }
                double contained = (double)inside / best.Count;

                // At least a third of the rim visible, the fit tight, and the
                // mint really inside it — otherwise this is not a disc. A very
                // clean fit is trusted on a quarter of the rim. Anything with
                // more mint outside the circle than that is a disc with another
                // mint shape touching it, and trimming would cut that shape.
                bool ok = (arc >= 12 && rms <= 0.02 && contained >= 0.965)
                       || (arc >= 9 && rms <= 0.01 && contained >= 0.99);
                if (!ok)
                {
                    LastDisc = string.Format("left as drawn (arc {0}0deg, rms {1:0.000}, contained {2:0.00})", arc, rms, contained);
                    return;
                }

                var inBest = new bool[w * h];
                foreach (int id in best) inBest[id] = true;

                // trim: disc outside its circle
                int trimmed = 0;
                foreach (int id in best)
                {
                    double dx = id % w - ccx, dy = id / w - ccy;
                    if (Math.Sqrt(dx * dx + dy * dy) <= rad + 0.5) continue;
                    int i = (id / w) * stride + (id % w) * 4;
                    buf[i] = 255; buf[i + 1] = 255; buf[i + 2] = 255; buf[i + 3] = 0;
                    inBest[id] = false;
                    trimmed++;
                }

                // fill: notches in the rim, open paper only, never next to a
                // shape — the clearance is wider than the white halo round a head
                const int Band = 6, InkClear = 8, MintNear = 9;
                var fill = new List<int>();
                int x0 = Math.Max(0, (int)(ccx - rad) - 1), x1 = Math.Min(w - 1, (int)(ccx + rad) + 1);
                int y0 = Math.Max(0, (int)(ccy - rad) - 1), y1 = Math.Min(h - 1, (int)(ccy + rad) + 1);
                for (int y = y0; y <= y1; y++)
                    for (int x = x0; x <= x1; x++)
                    {
                        double dist = Math.Sqrt((x - ccx) * (x - ccx) + (y - ccy) * (y - ccy));
                        if (dist > rad || dist < rad - Band) continue;
                        if (buf[y * stride + x * 4 + 3] != 0) continue;

                        bool shape = false, near = false;
                        for (int dy = -MintNear; dy <= MintNear && !shape; dy++)
                            for (int dx = -MintNear; dx <= MintNear; dx++)
                            {
                                int nx = x + dx, ny = y + dy;
                                if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
                                int q = ny * stride + nx * 4;
                                if (inBest[ny * w + nx]) { near = true; continue; }
                                if (buf[q + 3] != 0 && Math.Abs(dx) <= InkClear && Math.Abs(dy) <= InkClear) { shape = true; break; }
                            }
                        if (near && !shape) fill.Add(y * w + x);
                    }
                foreach (int id in fill)
                {
                    int i = (id / w) * stride + (id % w) * 4;
                    buf[i] = 0xEE; buf[i + 1] = 0xF6; buf[i + 2] = 0xE6; buf[i + 3] = 255;
                }

                LastDisc = string.Format("disc r {0:0}, {1}0deg of rim, error {2:0.0%}, trimmed {3}, filled {4}", rad, arc, rms, trimmed, fill.Count);
            }
            finally
            {
                Marshal.Copy(buf, 0, bd.Scan0, len);
                bmp.UnlockBits(bd);
            }
        }

        /// <summary>The circle through three points.</summary>
        static bool Circle3(double x1, double y1, double x2, double y2, double x3, double y3,
                            out double cx, out double cy, out double r)
        {
            cx = cy = r = 0;
            double d = 2 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
            if (Math.Abs(d) < 1e-6) return false;
            double s1 = x1 * x1 + y1 * y1, s2 = x2 * x2 + y2 * y2, s3 = x3 * x3 + y3 * y3;
            cx = (s1 * (y2 - y3) + s2 * (y3 - y1) + s3 * (y1 - y2)) / d;
            cy = (s1 * (x3 - x2) + s2 * (x1 - x3) + s3 * (x2 - x1)) / d;
            r = Math.Sqrt((x1 - cx) * (x1 - cx) + (y1 - cy) * (y1 - cy));
            return true;
        }

        /// <summary>Algebraic (Kasa) least-squares circle.</summary>
        static bool FitLeastSquares(List<double> xs, List<double> ys, out double cx, out double cy, out double r)
        {
            cx = cy = r = 0;
            double sx = 0, sy = 0, sxx = 0, syy = 0, sxy = 0, sxz = 0, syz = 0, sz = 0;
            int n = xs.Count;
            if (n < 3) return false;
            for (int k = 0; k < n; k++)
            {
                double x = xs[k], y = ys[k], z = x * x + y * y;
                sx += x; sy += y; sxx += x * x; syy += y * y; sxy += x * y;
                sxz += x * z; syz += y * z; sz += z;
            }
            double[,] m = { { sxx, sxy, sx }, { sxy, syy, sy }, { sx, sy, n } };
            double[] v = { -sxz, -syz, -sz };
            double det = Det3(m);
            if (Math.Abs(det) < 1e-9) return false;
            double D = Det3(Swap(m, 0, v)) / det, E = Det3(Swap(m, 1, v)) / det, F = Det3(Swap(m, 2, v)) / det;
            cx = -D / 2; cy = -E / 2;
            double q = cx * cx + cy * cy - F;
            if (q <= 0) return false;
            r = Math.Sqrt(q);
            return true;
        }

        static double Det3(double[,] a)
        {
            return a[0, 0] * (a[1, 1] * a[2, 2] - a[1, 2] * a[2, 1])
                 - a[0, 1] * (a[1, 0] * a[2, 2] - a[1, 2] * a[2, 0])
                 + a[0, 2] * (a[1, 0] * a[2, 1] - a[1, 1] * a[2, 0]);
        }

        static double[,] Swap(double[,] a, int col, double[] v)
        {
            var c = (double[,])a.Clone();
            for (int r = 0; r < 3; r++) c[r, col] = v[r];
            return c;
        }
    }
}
