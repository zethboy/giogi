/** @type {import('next').NextConfig} */
const nextConfig = {
  // Menonaktifkan linting saat build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Menonaktifkan type checking saat build
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
