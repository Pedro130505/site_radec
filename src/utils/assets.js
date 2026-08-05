/**
 * Helper to get proper asset URLs respecting Vite base path (e.g. /site_radec/)
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
