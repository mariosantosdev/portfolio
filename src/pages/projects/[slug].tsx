import { useMemo } from "react";
import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { PrismicDocument } from "@prismicio/types";
import { asText } from "@prismicio/helpers";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import { Aside } from "@/components/Aside";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Project } from "@/components/Project";
import { Banner } from "@/components/Banner";
import { getPrismicClient } from "@/services/prismic";

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
      images: response.data?.images || [],
      tags: response.tags,
    }),
    [response]
  );

  return (
    <Flex flexDir="column" minH="100vh">
      <NextSeo
        title={`Mário Santos - ${project.title}`}
        description={project.short_description}
        openGraph={{
          title: `Mário Santos - ${project.title}`,
          description: project.short_description,
          images: [
            {
              url:
                project.images[0]?.image?.url ||
                "devmario.me/images/memoji-writting.png",
              width: project.images[0]?.image.dimensions.width,
              height: project.images[0]?.image.dimensions.height,
              alt: project.images[0]?.image.alt,
            },
          ],
          siteName: "Mário Santos - Portfolio",
        }}
      />

      <Navbar />

      <Banner title={project.title} />

      <Flex
        maxW="container.lg"
        mx="auto"
        my={12}
        gap={[12, 12, 4]}
        flexDir={["column", "column", "row"]}
        flex={1}
      >
        <Project {...project} />
        <Aside />
      </Flex>

      <Footer />
    </Flex>
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
