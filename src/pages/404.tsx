import { Memoji } from "@/components/Memoji";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Fragment } from "react";
import { NextSeo } from "next-seo";

export default function NotFound() {
  return (
    <Fragment>
      <NextSeo title="Mário Santos - Página não encontrada" noindex={true} />

      <Container maxW="container.lg" h="100vh">
        <Flex
          justifyContent="center"
          alignItems="center"
          h="full"
          flexDir="column"
        >
          <Memoji
            display="flex"
            image="/images/memoji-notfound.png"
            maxW={["60%", "30%"]}
            alignSelf="center"
          />

          <Flex flexDir="column" alignItems="center" mt={4}>
            <Heading>404</Heading>
            <Text fontSize="1.25rem" textAlign="center">
              Essa página não existe ou foi removida.
            </Text>

            <Box mt={4}>
              <Link href="/" passHref>
                <Button variant="link" colorScheme="pink">
                  Voltar ao inicio
                </Button>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Fragment>
  );
}
