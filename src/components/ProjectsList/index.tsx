import { Container, Flex, Heading } from "@chakra-ui/react";
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
    <Flex as="main" w="full" my={12}>
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

        {projects.map((project) => (
          <Project key={project.slug} {...project} />
        ))}
      </Container>
    </Flex>
  );
};

export const ProjectsList = memo(ProjectsListComponent);
