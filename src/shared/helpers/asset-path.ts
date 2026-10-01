/** Prefix a file in `public/` so it loads at the site root and on GitHub Pages. */
export function assetPath(path: string): string {
  if (!path || /^(https?:|data:)/.test(path)) return path;
  const base = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
