/**
 * Converts the original Dalonlogo.jpg (black marks on white paper) into
 * transparent PNGs for use on the dark site:
 *   public/logo-white.png — white logo, transparent background
 *   public/logo-gold.png  — gold (#C8A96E) logo, transparent background
 *
 * Method: trim the white border, read luminance, then map darkness to alpha
 * (black ink -> opaque, paper -> transparent) with a soft threshold to kill
 * JPEG halo noise around the strokes.
 */
import sharp from 'sharp';

const INPUT = new URL('../Dalonlogo.jpg', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

const { data, info } = await sharp(INPUT)
  .trim()
  .greyscale()
  .normalise()
  .negate() // ink becomes bright, paper becomes dark
  .raw()
  .toBuffer({ resolveWithObject: true });

function buildRGBA(r, g, b) {
  const out = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < data.length; i++) {
    const v = data[i];
    // soft threshold: <=50 -> 0, >=200 -> 255, ramp between
    const a = v <= 50 ? 0 : v >= 200 ? 255 : Math.round(((v - 50) * 255) / 150);
    out[i * 4] = r;
    out[i * 4 + 1] = g;
    out[i * 4 + 2] = b;
    out[i * 4 + 3] = a;
  }
  return out;
}

const raw = { raw: { width: info.width, height: info.height, channels: 4 } };

await sharp(buildRGBA(255, 255, 255), raw)
  .resize({ width: 1000, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile('public/logo-white.png');

await sharp(buildRGBA(200, 169, 110), raw)
  .resize({ width: 1000, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile('public/logo-gold.png');

console.log(`Done: ${info.width}x${info.height} source -> logo-white.png, logo-gold.png`);
