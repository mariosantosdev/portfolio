import { Container, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { memo } from "react";
import { Project } from "../Project";

export interface ProjectsListProps {
  projects: Array<{
    title: string;
    description: string;
    slug: string;
  }>;
}

export const ProjectsListComponent: React.FC<ProjectsListProps> = ({
  projects,
}) => {
  return (
    <Flex as="main" w="full">
      <Container
        as={Flex}
        maxW="container.lg"
        mx="auto"
        flexDir="column"
        gap={8}
      >
        <Heading textTransform="uppercase" color="pink.500" fontSize="lg">
          Últimos Projetos...
        </Heading>

        <Flex
          flexDir="column"
          gap={8}
          as={motion.div}
          variants={{
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <Project key={project.slug} {...project} />
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export const ProjectsList = memo(ProjectsListComponent);
