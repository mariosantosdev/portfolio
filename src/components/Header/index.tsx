import { Flex, Container } from "@chakra-ui/react";

import Image from "next/image";
import { HeroLabel } from "./HeroLabel";

export const Header: React.FC = () => {
  return (
    <Flex as="header" bg="bgHeader">
      <Container
        as={Flex}
        maxW="container.lg"
        mx="auto"
        minH={["100vh", "100vh", "80vh"]}
        flexDir={{ base: "column", md: "row" }}
        alignItems={["center"]}
        justifyContent={{ base: "center", md: "space-between" }}
      >
        <HeroLabel />

        <Flex
          display={{ base: "none", md: "flex" }}
          alignSelf={{ base: "auto", md: "flex-end" }}
          maxW={{ base: "100%", md: "40%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            alt="Mário Santos Memoji"
            src="/images/memoji-hello.png"
            width={400}
            height={400}
            quality={100}
            style={{ objectFit: "contain" }}
          />
        </Flex>
      </Container>
    </Flex>
  );
};
