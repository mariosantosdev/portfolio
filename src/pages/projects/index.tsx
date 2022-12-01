import { Container, Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import { Aside } from "@/components/Aside";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectsList } from "@/components/ProjectsList";
import { Memoji } from "@/components/Memoji";
import { getPrismicClient } from "@/services/prismic";
import { formatProjects } from "@/utils/formatPrismic";
import { NextSeo } from "next-seo";

type Project = {
  title: string;
  description: string;
  slug: string;
};
interface ProjectsProps {
  projects: Project[];
  nextPage?: string;
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Flex flexDir="column" minH="100vh">
      <NextSeo
        title="Mário Santos - Projetos"
        description="Veja os projetos desenvolvidos por Mário Santos e entre em contato para desenvolver o seu."
      />

      <Navbar />

      <Container
        as={Flex}
        maxW="container.lg"
        w="full"
        justifyContent={["center", "center", "flex-start"]}
      >
        <Memoji
          image="/images/memoji-writting.png"
          maxW={["100%", 220]}
          w={{ base: "full", md: "20%" }}
          display="flex"
        />
      </Container>

      <Flex
        maxW="container.lg"
        mx="auto"
        my={12}
        gap={[12, 12, 4]}
        flexDir={["column", "column", "row"]}
        flex={1}
      >
        <ProjectsList title="Meus Projetos" projects={projects} />
        <Aside display={{ base: "none", md: "flex" }} />
      </Flex>

      <Footer />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const { next_page, results } = await prismic.getByType("projects", {
    pageSize: 5,
  });

  return {
    props: {
      projects: formatProjects(results),
      nextPage: next_page ?? null,
    },
    revalidate: 60 * 60 * 4, // 4 hours
  };
};
