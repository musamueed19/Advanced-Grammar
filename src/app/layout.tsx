import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { PropsWithChildren } from "react";

export const metadata = {
  metadataBase: new URL("https://xuangrammar.vercel.app"),
  title: {
    template: "%s - Xuan Yuanyou Advanced Grammar",
  },
  description: "Conquer English sentence writing",
  applicationName: "Xuan Yuanyou Advanced Grammar",
  generator: "Next.js",
  appleWebApp: {
    title: "Xuan Yuanyou Advanced Grammar",
  },
  other: {
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    card: "summary_large_image",
    site: "xuangrammar.vercel.app",
    url: "https://xuangrammar.vercel.app",
  },
};

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={<b>Xuan Yuanyou Advanced Grammer</b>}
    projectLink="https://github.com/musamueed19/advanced-grammar"
    // ... Your additional navbar options
  />
);

const footer = (
  <Footer>
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        title="Creative Commons homepage"
        href="https://creativecommons.org/licenses/by-nc/4.0/"
        style={{ color: "#0070f3" }}
      >
        CC BY-NC 4.0
      </a>
      <span> {new Date().getFullYear()} © Sen Yuan You</span>
      <span
        style={{
          fontWeight: "bold",
          color: "#ddd",
        }}
      >
        . Re-developed by Muhammad Musa Mueed
      </span>
    </div>
  </Footer>
);

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          feedback={{
            content: "Found a problem? Feedback is welcome",
            labels: "feedback",
          }}
          docsRepositoryBase="https://github.com/musamueed19/advanced-grammar/edit/main"
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          toc={{
            title: "Page Navigation",
            backToTop: "Back to top",
          }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
