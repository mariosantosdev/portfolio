import { getPrismicClient } from "@/services/prismic";
import { formatProjects } from "@/utils/formatPrismic";
import { GetServerSideProps } from "next";
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const prismic = getPrismicClient({});
  const rawProjects = await prismic.getAllByType("projects");
  const projects = formatProjects(rawProjects);

  const sitemapProjects = projects.map((project) => ({
    loc: `${baseUrl}/projects/${project.slug}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...sitemapProjects];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
