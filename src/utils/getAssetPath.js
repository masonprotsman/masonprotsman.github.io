// Helper function to get the correct asset path with base URL
export const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Ensure base ends with slash
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  return `${baseWithSlash}${cleanPath}`;
};
