/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

module.exports = {
  siteUrl,

  generateRobotsTxt: true,
  exclude: ["/404"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/404" },
    ],

    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
  generateIndexSitemap: false,
};
