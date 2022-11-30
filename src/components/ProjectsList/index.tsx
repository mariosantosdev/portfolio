import { Container, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { memo } from "react";
import { ProjectCard } from "../ProjectCard";

export interface ProjectsListProps {
  title?: string;
  projects: Array<{
    title: string;
    description: string;
    slug: string;
  }>;
}

export const ProjectsListComponent: React.FC<ProjectsListProps> = ({
  title = "Últimos Projetos...",
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
          {title}
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
            <ProjectCard key={project.slug} {...project} />
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export const ProjectsList = memo(ProjectsListComponent);
