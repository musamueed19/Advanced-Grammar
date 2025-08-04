import nextra from "nextra";

// setup nextra with its configuration
const withNextra = nextra({
  // Add Nextra specific options here...
  //   theme: "nextra-theme-docs",
  //   themeConfig: "./theme.config.tsx",
});

// export final Next.js config with Nextra included
export default withNextra({
  // Add regular Next.js configurations here...
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/codeyu/EnglishGrammarBook/master/images/chapter_9/*",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/",
        destination: "/introduction/",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
});
