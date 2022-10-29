const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');

const withPWA  = require("next-pwa");
module.exports = withPWA({
  //...before
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  //...after
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withPlugins([withFonts], nextConfig,)
