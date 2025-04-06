/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://placeholder_domain",
  generateRobotsTxt: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  additionalPaths: async (config) => [
    // This will force the root / to be included in sitemap.xml
    {
      loc: "/",
      changefreq: "weekly",
      priority: 1.0,
    },
  ],
};

export default config;
