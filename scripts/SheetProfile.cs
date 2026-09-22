using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Text;

namespace StartSah
{
    /// <summary>
    /// Ink profiles for a sheet whose tiles are not framed.
    ///
    /// The "For Saudi Ambition" sheet separates its columns with thin vertical
    /// rules and puts a caption under each drawing, so the bands are read from
    /// two profiles: long vertical rules for the columns, and the blank rows
    /// between a drawing and its caption for the rows.
    /// </summary>
    public static class SheetProfile
    {
        static byte[] Pixels(Bitmap bmp, out int stride)
        {
            var d = bmp.LockBits(new Rectangle(0, 0, bmp.Width, bmp.Height), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
            stride = d.Stride;
            var buf = new byte[stride * bmp.Height];
            System.Runtime.InteropServices.Marshal.Copy(d.Scan0, buf, 0, buf.Length);
            bmp.UnlockBits(d);
            return buf;
        }

        /// <summary>Columns where a light rule runs most of the height of [y0, y1).</summary>
        public static string Rules(Bitmap bmp, int y0, int y1)
        {
            int stride; var buf = Pixels(bmp, out stride);
            var sb = new StringBuilder();
            for (int x = 0; x < bmp.Width; x++)
            {
                int c = 0;
                for (int y = y0; y < y1; y++)
                {
                    int i = y * stride + x * 4;
                    int lum = (buf[i + 2] * 299 + buf[i + 1] * 587 + buf[i] * 114) / 1000;
                    if (lum > 200 && lum < 248) c++;
                }
                if (c > (y1 - y0) * 0.6) sb.Append(x + " " + c + "\n");
            }
            return sb.ToString();
        }

        /// <summary>For each row in [x0, x1), how many pixels are not paper.</summary>
        public static string RowInk(Bitmap bmp, int x0, int x1)
        {
            int stride; var buf = Pixels(bmp, out stride);
            var sb = new StringBuilder();
            for (int y = 0; y < bmp.Height; y++)
            {
                int c = 0;
                for (int x = x0; x < x1; x++)
                {
                    int i = y * stride + x * 4;
                    int lum = (buf[i + 2] * 299 + buf[i + 1] * 587 + buf[i] * 114) / 1000;
                    if (lum < 240) c++;
                }
                sb.Append(c + (y % 20 == 19 ? "\n" : " "));
            }
            return sb.ToString();
        }
    }
}
