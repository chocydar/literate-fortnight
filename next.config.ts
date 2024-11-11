import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',                                   // Export as a static site
  basePath: isProd ? '/literate-fortnight' : '',      // Replace '/repo-name' with the actual repo name
  images: { unoptimized: true },                      // Disable image optimization for GitHub Pages
};

export default nextConfig;
