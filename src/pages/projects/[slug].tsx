import { Fragment } from "react";
import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { Aside } from "@/components/Aside";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Project } from "@/components/Project";
import { Banner } from "@/components/Banner";

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla`;

const project = {
  title: "Projeto 1",
  description,
  slug: "projeto-1",
};

type Project = {
  title: string;
  description: string;
  slug: string;
  images?: string[];
};
interface ProjectProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <Fragment>
      <Head>
        <title>Mário Santos - {project.title}</title>
        <meta name="description" content={project.description} />
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      project,
    },
    revalidate: 60 * 60 * 4, // 4 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "projeto-1" } }],
    fallback: true,
  };
};
