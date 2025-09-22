// src/lib/assetUrl.ts
export const assetUrl = (p: string) => {
  if (!p) {
    console.warn('assetUrl called with empty path')
    return import.meta.env.BASE_URL
  }
  // Ensure we never double-prepend the base
  const clean = p.replace(/^\/+/, '')
  return import.meta.env.BASE_URL + clean
}
