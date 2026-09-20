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
    ///   #A9DCC5  mid tint, for skylines and secondary shapes
    ///   #E6F6EE  light tint, for the discs behind figures
    ///   #2E2E2E  charcoal line work
    ///   #E6E6E6  light grey fills
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

                    Quantise(big);
                    OpenColour(big, 0xE6, 0xE6, 0xE6, 4);
                    CloseColour(big, 0xE6, 0xE6, 0xE6, 5);
                    FillHoles(big, 0xE6, 0xE6, 0xE6);
                    FillHoles(big, 0xE6, 0xF6, 0xEE);
                    Despeckle(big, 900);
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
                bool greenish = g > r + 18 && g > b + 8 && g > 60;

                int nr, ng, nb;
                if (greenish && lum >= MintFloor) { nr = 0xE6; ng = 0xF6; nb = 0xEE; }
                else if (greenish && r > AccentMaxRed) { nr = 0xA9; ng = 0xDC; nb = 0xC5; }
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
    }
}
