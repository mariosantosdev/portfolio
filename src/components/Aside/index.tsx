import { Container, Flex, FlexProps } from "@chakra-ui/react";

import { Social } from "./Social";
import { Languages } from "./Languages";
import { Technologies } from "./Technologies";

export const Aside: React.FC<FlexProps> = (props) => {
  return (
    <Flex
      as="aside"
      w={["full", "full", "50%"]}
      h="fit-content"
      position="sticky"
      top={4}
      {...props}
    >
      <Container as={Flex} flexDir="column" gap={8}>
        <Social />
        <Languages />
        <Technologies />
      </Container>
    </Flex>
  );
};
