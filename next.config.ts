// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: "export",
// };

// export default nextConfig;
const withPagefind = require("next-pagefind");

const nextConfig = withPagefind({
  // your existing config
  output: "export", // required to generate HTML pages
  experimental: {
    appDir: true,
  },
});

module.exports = nextConfig;
