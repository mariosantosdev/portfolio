import { Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import { Aside } from "@/components/Aside";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { ProjectsList } from "@/components/ProjectsList";
import { getPrismicClient } from "@/services/prismic";
import { formatProjects } from "@/utils/formatPrismic";
import { NextSeo } from "next-seo";

type Project = {
  title: string;
  description: string;
  slug: string;
};

interface HomeProps {
  projects: Project[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <Flex flexDir="column" minH="100vh">
      <NextSeo
        title="Mário Santos - Portfólio"
        description="Conheça o portfólio de Mário Santos, desenvolvedor fullstack web e mobile."
      />

      <Navbar />

      <Header />

      <Flex
        maxW="container.lg"
        mx="auto"
        my={12}
        gap={[12, 12, 4]}
        flexDir={["column", "column", "row"]}
        flex={1}
      >
        <ProjectsList projects={projects} />
        <Aside />
      </Flex>

      <Footer />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const { results } = await prismic.getByType("projects", {
    pageSize: 5,
  });

  return {
    props: {
      projects: formatProjects(results),
    },
    revalidate: 60 * 60 * 4, // 4 hours
  };
};
