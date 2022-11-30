import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PathsLink } from "./PathsLink";

export interface BannerProps {
  title: string;
  image: string;
}

export const Banner: React.FC<BannerProps> = ({ title, image }) => {
  const { query } = useRouter();

  return (
    <Flex as="header" w="full" minH="40vh" bg="bgHeader">
      <Container
        as={Flex}
        flexDir="column"
        color="white"
        maxW="container.lg"
        mx="auto"
        justifyContent="flex-end"
        pb={20}
        gap={2}
      >
        <PathsLink
          paths={[
            { label: "Home", href: "/" },
            { label: "Projetos", href: "/projects" },
            { label: title, href: String(query.slug), isCurrentPage: true },
          ]}
        />
        <Heading>{title}</Heading>
      </Container>
    </Flex>
  );
};
