
export const assetUrl = (p: string) => {
  if (!p) {
    console.warn('assetUrl called with empty path')
    return import.meta.env.BASE_URL
  }
  const clean = p.replace(/^\/+/, '')
  return import.meta.env.BASE_URL + clean
}
