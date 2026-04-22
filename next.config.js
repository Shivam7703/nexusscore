/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
  },
   async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // trailingSlash: true,
};

export default nextConfig;