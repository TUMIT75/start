using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

namespace StartSah
{
    /// <summary>
    /// Prepares an illustration for tracing: crop it out of the sheet, scale it
    /// up smoothly, snap every pixel to the brand palette, and key the sheet's
    /// white background to transparent.
    ///
    /// Quantising first is what makes the trace clean — the tracer then sees a
    /// handful of flat regions instead of thousands of anti-aliased shades.
    /// </summary>
    public static class Prep
    {
        // Four colours, as the brief says. A mid grey was tried and removed: it
        // caught the anti-aliasing along every line and traced into a grey halo
        // beside the ink.
        public static int[] Palette = new int[] {
            unchecked((int)0xFFFFFFFF), // paper
            unchecked((int)0xFFE6E6E6), // light grey
            unchecked((int)0xFF2E2E2E), // charcoal
            unchecked((int)0xFF00C853), // START green
        };

        // Three bands rather than two. Splitting ink from paper near the
        // mid-point keeps the strokes at their drawn weight; anything between
        // that and the light-grey band is anti-aliasing, and becomes paper.
        /// <summary>Below this brightness a pixel is ink.</summary>
        public static double InkCeiling = 165;
        /// <summary>Light grey fills sit between these two. The band is wide
        /// because the sheets draw grey anywhere from #C0C0C0 to #E6E6E6; the
        /// anti-aliasing it also catches is removed by opening the mask.</summary>
        public static double GreyFloor = 172;
        public static double PaperFloor = 247;

        /// <summary>Colour histogram of a crop, for checking what is actually there.</summary>
        public static string Histogram(Bitmap src, int x, int y, int w, int h, int top)
        {
            var counts = new Dictionary<int, int>();
            using (var crop = src.Clone(new Rectangle(x, y, w, h), PixelFormat.Format32bppArgb))
            {
                var bd = crop.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
                int len = bd.Stride * h;
                var buf = new byte[len];
                Marshal.Copy(bd.Scan0, buf, 0, len);
                crop.UnlockBits(bd);
                for (int i = 0; i < len; i += 4)
                {
                    // round to the nearest 16 so near-identical shades group
                    int key = ((buf[i + 2] / 16) << 16) | ((buf[i + 1] / 16) << 8) | (buf[i] / 16);
                    int c;
                    counts.TryGetValue(key, out c);
                    counts[key] = c + 1;
                }
            }
            var list = new List<KeyValuePair<int, int>>(counts);
            list.Sort((a, b) => b.Value.CompareTo(a.Value));
            var sb = new System.Text.StringBuilder();
            for (int i = 0; i < Math.Min(top, list.Count); i++)
            {
                int k = list[i].Key;
                int r = ((k >> 16) & 0xFF) * 16, g = ((k >> 8) & 0xFF) * 16, b = (k & 0xFF) * 16;
                sb.AppendLine(string.Format("  #{0:X2}{1:X2}{2:X2}  {3,8}", r, g, b, list[i].Value));
            }
            return sb.ToString();
        }

        public static void Build(Bitmap source, int x, int y, int w, int h,
                                 int scale, string outPath)
        {
            using (var crop = source.Clone(new Rectangle(x, y, w, h), PixelFormat.Format32bppArgb))
            {
                // The sheets' flat fills are speckled: a light grey block reads
                // 246 with stray 255 pixels through it, against a 254 ground.
                // Eight levels is not much to threshold on, so the salt is taken
                // out first, at source resolution where a speck is one pixel and
                // a median barely touches the line work.
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
                    OpenGrey(big, 4);      // remove anti-aliasing beside the ink
                    CloseGrey(big, 5);     // close the smaller pinholes
                    FillGreyHoles(big);    // and any enclosed gap of any size
                    DespeckleGrey(big, 900);
                    big.Save(outPath, ImageFormat.Png);
                }
            }
        }

        /// <summary>
        /// Opens the grey mask: erode then dilate. A band of anti-aliasing beside
        /// a line is only a few pixels wide and disappears; a real grey fill is
        /// far thicker and comes back unchanged. This is what lets the grey band
        /// be wide enough to catch every shade the sheets actually use.
        /// </summary>
        static void OpenGrey(Bitmap bmp, int radius)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);

            Func<byte[], int, int, bool> grey = (b, x, y) =>
            {
                int i = y * stride + x * 4;
                return b[i + 3] != 0 && b[i] == 0xE6 && b[i + 1] == 0xE6 && b[i + 2] == 0xE6;
            };

            var mask = new bool[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                    mask[y * w + x] = grey(buf, x, y);

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

            var dilated = new bool[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    if (!eroded[y * w + x]) continue;
                    for (int dy = -radius; dy <= radius; dy++)
                        for (int dx = -radius; dx <= radius; dx++)
                        {
                            int nx = x + dx, ny = y + dy;
                            if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
                            dilated[ny * w + nx] = true;
                        }
                }

            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int id = y * w + x;
                    if (!mask[id] || dilated[id]) continue;
                    int i = y * stride + x * 4;
                    buf[i] = 255; buf[i + 1] = 255; buf[i + 2] = 255; buf[i + 3] = 0;
                }

            Marshal.Copy(buf, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        /// <summary>
        /// Closes the grey mask: dilate then erode. The sheets are AI-generated
        /// and their flat fills are not quite flat, so a grey block comes out of
        /// quantising peppered with pinholes. Closing fills them without moving
        /// the block's outline. Ink is protected, so a fill never grows over a
        /// line that crosses it.
        /// </summary>
        static void CloseGrey(Bitmap bmp, int radius)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);

            var grey = new bool[w * h];
            var ink = new bool[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int i = y * stride + x * 4;
                    bool opaque = buf[i + 3] != 0;
                    grey[y * w + x] = opaque && buf[i] == 0xE6 && buf[i + 1] == 0xE6 && buf[i + 2] == 0xE6;
                    ink[y * w + x] = opaque && buf[i] == 0x2E && buf[i + 1] == 0x2E && buf[i + 2] == 0x2E;
                }

            var dil = new bool[w * h];
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    if (!grey[y * w + x]) continue;
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
                    if (!closed[id] || grey[id] || ink[id]) continue;
                    int i = y * stride + x * 4;
                    buf[i] = 0xE6; buf[i + 1] = 0xE6; buf[i + 2] = 0xE6; buf[i + 3] = 255;
                }

            Marshal.Copy(buf, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        /// <summary>
        /// Fills paper that is completely enclosed by grey. Two of the sheets
        /// draw their grey blocks with a visible texture, which quantises into
        /// holes far bigger than a close can bridge. Flooding from the border
        /// finds the real outside, so anything left over is a hole whatever its
        /// size, and the block's own outline never moves.
        /// </summary>
        static void FillGreyHoles(Bitmap bmp)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);

            Func<int, int, bool> isGrey = (x, y) =>
            {
                int i = y * stride + x * 4;
                return buf[i + 3] != 0 && buf[i] == 0xE6 && buf[i + 1] == 0xE6 && buf[i + 2] == 0xE6;
            };
            Func<int, int, bool> isPaper = (x, y) => buf[y * stride + x * 4 + 3] == 0;

            var outside = new bool[w * h];
            var stack = new Stack<int>();
            for (int x = 0; x < w; x++)
            {
                if (!isGrey(x, 0)) { outside[x] = true; stack.Push(x); }
                int b = (h - 1) * w + x;
                if (!isGrey(x, h - 1)) { outside[b] = true; stack.Push(b); }
            }
            for (int y = 0; y < h; y++)
            {
                int l = y * w;
                if (!isGrey(0, y)) { outside[l] = true; stack.Push(l); }
                int r = y * w + w - 1;
                if (!isGrey(w - 1, y)) { outside[r] = true; stack.Push(r); }
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
                    if (outside[nid] || isGrey(nx, ny)) continue;
                    outside[nid] = true;
                    stack.Push(nid);
                }
            }

            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    int id = y * w + x;
                    if (outside[id] || isGrey(x, y) || !isPaper(x, y)) continue;
                    int i = y * stride + x * 4;
                    buf[i] = 0xE6; buf[i + 1] = 0xE6; buf[i + 2] = 0xE6; buf[i + 3] = 255;
                }

            Marshal.Copy(buf, 0, bd.Scan0, len);
            bmp.UnlockBits(bd);
        }

        /// <summary>
        /// Drops isolated specks of light grey. The sheets carry a scatter of
        /// faint dots that go unnoticed in a soft raster but trace into crisp
        /// little shapes. Real grey fills — blocks, boards, steps — run to
        /// thousands of pixels, so a size threshold separates them cleanly.
        /// </summary>
        static void DespeckleGrey(Bitmap bmp, int minArea)
        {
            int w = bmp.Width, h = bmp.Height;
            var bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = bd.Stride, len = stride * h;
            var buf = new byte[len];
            Marshal.Copy(bd.Scan0, buf, 0, len);

            Func<int, int, bool> isGrey = (x, y) =>
            {
                int i = y * stride + x * 4;
                return buf[i + 3] != 0 && buf[i] == 0xE6 && buf[i + 1] == 0xE6 && buf[i + 2] == 0xE6;
            };

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

        /// <summary>
        /// Median filter applied only where the image is already light.
        /// A plain median erases the line work — a one-pixel stroke is a minority
        /// inside a 3x3 window, so the median picks the background and the line
        /// comes out dashed. Skipping any pixel near ink leaves the drawing alone
        /// and still lifts the salt out of the flat fills.
        /// </summary>
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
                    if (lum < 225) continue; // ink, green, or an edge — leave it

                    // and leave anything sitting next to ink, so edges stay put
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

                // Classify rather than pick the nearest colour. Nearest-colour
                // sends the anti-aliasing along every line into the grey bucket,
                // which traces into a ghost outline beside the ink. Green is
                // decided on its own; everything else splits on brightness, with
                // the grey band kept narrow so only real grey fills land in it.
                int nr, ng, nb;
                bool isGreen = g > r + 28 && g > b + 18 && g > 70;

                if (isGreen)
                {
                    nr = 0x00; ng = 0xC8; nb = 0x53;
                }
                else
                {
                    double lum = 0.299 * r + 0.587 * g + 0.114 * b;
                    if (lum < InkCeiling) { nr = 0x2E; ng = 0x2E; nb = 0x2E; }
                    else if (lum >= GreyFloor && lum < PaperFloor) { nr = 0xE6; ng = 0xE6; nb = 0xE6; }
                    else { nr = 0xFF; ng = 0xFF; nb = 0xFF; }
                }

                // paper becomes transparent, exactly as the raster version did,
                // so an illustration still drops onto any light section
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
    }
}
