/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/nikorablin.github.io/' : '',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/i,
      use: 'raw-loader',
    });
    return config;
  },
};
