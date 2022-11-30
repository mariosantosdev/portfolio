import { Container, Flex, Text } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <Flex as="footer" w="full" bg="bgHeader" color="white" py={4}>
      <Container
        as={Flex}
        maxW="container.lg"
        mx="auto"
        justifyContent="center"
      >
        <Text textAlign="center" fontSize="sm">
          © {new Date().getFullYear()} - Todos os direitos reservados,
          Desenvolvido com ❤️ por Mário Santos
        </Text>
      </Container>
    </Flex>
  );
};
