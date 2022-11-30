import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";

export interface ProjectProps {
  title: string;
  description: string;
  slug: string;
}

export const ProjectComponent: React.FC<ProjectProps> = ({
  title,
  description,
  slug,
}) => {
  return (
    <Link href={`/projects/${slug}`} passHref>
      <Flex
        as={motion.div}
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
        flexDir="column"
        alignItems="flex-start"
        _hover={{ cursor: "pointer", color: "pink.500" }}
        gap={2}
      >
        <Heading fontSize="2xl">{title}</Heading>

        <Text noOfLines={4} color="gray">
          {description}
        </Text>

        <Button variant="link" colorScheme="pink">
          Ver Projeto
        </Button>
      </Flex>
    </Link>
  );
};

export const Project = memo(
  ProjectComponent,
  (prev, next) => prev.slug === next.slug
);
