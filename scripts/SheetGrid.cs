using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Text;

namespace StartSah
{
    /// <summary>
    /// Finds the tile frames on an illustration sheet.
    ///
    /// The 20 September sheet draws each illustration inside a thin grey box,
    /// and the artwork runs right up to that box — figures are deliberately cut
    /// off by it. Guessing the grid from an ink profile cropped inside the
    /// frames and cut the figures a second time, so the frame lines themselves
    /// are detected here and the crop is taken from just inside them.
    /// </summary>
    public static class SheetGrid
    {
        /// <summary>Rows (or columns) that are mostly frame-grey across their length.</summary>
        public static string Profile(Bitmap bmp)
        {
            int w = bmp.Width, h = bmp.Height;
            var data = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
            int stride = data.Stride;
            byte[] buf = new byte[stride * h];
            System.Runtime.InteropServices.Marshal.Copy(data.Scan0, buf, 0, buf.Length);
            bmp.UnlockBits(data);

            var sb = new StringBuilder();

            // A frame pixel is light grey: clearly not white, clearly not ink.
            Func<int, int, bool> frame = (x, y) =>
            {
                int i = y * stride + x * 4;
                int b = buf[i], g = buf[i + 1], r = buf[i + 2];
                int lum = (r * 299 + g * 587 + b * 114) / 1000;
                int max = Math.Max(r, Math.Max(g, b));
                int min = Math.Min(r, Math.Min(g, b));
                return lum > 200 && lum < 250 && (max - min) < 14;
            };

            sb.Append("ROWS\n");
            for (int y = 0; y < h; y++)
            {
                int c = 0;
                for (int x = 0; x < w; x++) if (frame(x, y)) c++;
                if (c > w / 4) sb.Append(y + " " + c + "\n");
            }

            sb.Append("COLS\n");
            for (int x = 0; x < w; x++)
            {
                int c = 0;
                for (int y = 0; y < h; y++) if (frame(x, y)) c++;
                if (c > h / 2) sb.Append(x + " " + c + "\n");
            }

            return sb.ToString();
        }
    }
}
