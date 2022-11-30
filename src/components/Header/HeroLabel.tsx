import { Button, Flex, FlexProps, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export const HeroLabel: React.FC<FlexProps> = (props) => {
  return (
    <Flex
      flexDir="column"
      textAlign={["center", "start"]}
      color="white"
      maxW={320}
      {...props}
    >
      <Heading fontSize="1.25rem">👋 Olá, Eu sou o</Heading>
      <Heading fontSize="3.5rem">Mário</Heading>

      <Text color="pink.500">FullStack Developer</Text>
      <Text textAlign={["center", "start"]}>
        Eu crio projetos com diversos objetivos, seja bem vindo(a) ao meu
        portfolio!
      </Text>

      <Link href="/projects" passHref>
        <Button colorScheme="pink" rounded="full" mt={12} px={8} w="full">
          Projetos
        </Button>
      </Link>
    </Flex>
  );
};
