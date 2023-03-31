const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: "",
  typescript: {
    ignoreBuildErrors: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
  withPlugins: [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      },
    ],

    // your other plugins here
  ],
  images: {
    loader: "custom",
    unoptimized: true,
  },
};
