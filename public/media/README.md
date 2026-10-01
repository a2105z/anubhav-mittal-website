# Media Cover Images

Optional cover images for the four article cards on the `/media` page. The
site uses a polished typographic cover by default, so dropping in real
images is purely an aesthetic upgrade — the page already looks finished
without them.

| Filename             | Used for                                                                  |
| -------------------- | ------------------------------------------------------------------------- |
| `usatoday.png`       | USA Today — $10B M&A track record press feature                           |
| `fingerlakes1.png`   | FingerLakes1.com — CFO leadership feature                                 |
| `republicaneagle.png`| Republican Eagle — finance leader and M&A strategist profile              |
| `sme.png`            | Social Media Explorer — career retrospective                              |
| `netlify.png`        | anubhavmittal.netlify.app — Anubhav's primary executive site              |

## Sizing guidance

- Aspect ratio: **16:9** — the cover frame is `aspect-[16/9]`
- Recommended size: **1280 × 720 px** (or larger; the image is rendered at
  card width with `object-cover`)
- Format: PNG or JPG

If you'd rather keep the typographic covers, simply leave this folder
without the PNGs above — the fallback renders automatically.
