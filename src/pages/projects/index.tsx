import { Fragment } from "react";
import { Container, Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { Aside } from "@/components/Aside";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectsList } from "@/components/ProjectsList";
import { Memoji } from "@/components/Memoji";

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla`;

const projects = [
  {
    title: "Projeto 1",
    description,
    slug: "projeto-1",
  },
  {
    title: "Projeto 2",
    description,
    slug: "projeto-2",
  },
  {
    title: "Projeto 3",
    description,
    slug: "projeto-3",
  },
  {
    title: "Projeto 4",
    description,
    slug: "projeto-4",
  },
  {
    title: "Projeto 5",
    description,
    slug: "projeto-5",
  },
  {
    title: "Projeto 6",
    description,
    slug: "projeto-6",
  },
  {
    title: "Projeto 7",
    description,
    slug: "projeto-7",
  },
];

type Project = {
  title: string;
  description: string;
  slug: string;
};
interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Fragment>
      <Head>
        <title>Mário Santos - Projetos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Container as={Flex} maxW="container.lg" w="full">
        <Memoji
          image="/images/memoji-writting.png"
          maxW={{ base: "100%", md: "20%" }}
        />
      </Container>

      <Flex
        maxW="container.lg"
        mx="auto"
        my={12}
        gap={[12, 12, 4]}
        flexDir={["column", "column", "row"]}
      >
        <ProjectsList title="Meus Projetos" projects={projects} />
        <Aside />
      </Flex>

      <Footer />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 4, // 4 hours
  };
};
