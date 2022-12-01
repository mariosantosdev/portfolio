import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PathsLink } from "./PathsLink";

export interface BannerProps {
  title: string;
  demo?: string;
  repository?: string;
}

export const Banner: React.FC<BannerProps> = ({ title, demo, repository }) => {
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
        pb={12}
        gap={2}
      >
        <PathsLink
          paths={[
            { label: "Home", href: "/" },
            { label: "Projetos", href: "/projects" },
            { label: title, href: String(query.slug), isCurrentPage: true },
          ]}
        />
        <Heading mb={2}>{title}</Heading>

        <Flex gap={4} flexWrap="wrap">
          {demo && (
            <Link href={demo} passHref target="_blank">
              <Button variant="outline" colorScheme="whiteAlpha">
                Demo
              </Button>
            </Link>
          )}

          {repository && (
            <Link href={repository} passHref target="_blank">
              <Button variant="outline" colorScheme="whiteAlpha">
                Repositório
              </Button>
            </Link>
          )}
        </Flex>
      </Container>
    </Flex>
  );
};
