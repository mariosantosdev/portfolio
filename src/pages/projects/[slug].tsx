import { Fragment, useMemo } from "react";
import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { PrismicDocument } from "@prismicio/types";
import { asText } from "@prismicio/helpers";

import { Aside } from "@/components/Aside";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Project } from "@/components/Project";
import { Banner } from "@/components/Banner";
import { getPrismicClient } from "@/services/prismic";
import { useRouter } from "next/router";

type ImageType = {
  alt?: string;
  copyright?: string;
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
};

type Project = {
  slug: string;
  title: string;
  description: any;
  short_description: string;
  tags: string[];
  images: Array<{
    image: ImageType;
  }>;
};
interface ProjectProps {
  response: PrismicDocument<Record<string, any>, string, string>;
}

export default function ProjectPage({ response }: ProjectProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const project: Project = useMemo(
    () => ({
      slug: response.uid!,
      title: asText(response.data.title)!,
      short_description: asText(response.data.description)!,
      description: response.data.description,
      images: response.data.images,
      tags: response.tags,
    }),
    [response]
  );

  return (
    <Fragment>
      <Head>
        <title>Mário Santos - {project.title}</title>
        <meta name="description" content={project.short_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Banner title={project.title} />

      <Flex
        maxW="container.lg"
        mx="auto"
        my={12}
        gap={[12, 12, 4]}
        flexDir={["column", "column", "row"]}
      >
        <Project {...project} />
        <Aside />
      </Flex>

      <Footer />
    </Fragment>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient({});
  const { results } = await prismic.getByType("projects", { pageSize: 5 });

  return {
    paths: results.map((post) => ({ params: { slug: post.uid! } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug;
  const prismic = getPrismicClient({});
  const response = await prismic.getByUID("projects", String(slug));

  return {
    props: {
      response,
    },
    revalidate: 60 * 60 * 4, // 4 hours
  };
};
