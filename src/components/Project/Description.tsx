import { Flex, Heading, Text } from "@chakra-ui/react";
import { PrismicRichText, JSXMapSerializer } from "@prismicio/react";

interface DescriptionProps {
  description: any;
}

const components: JSXMapSerializer = {
  heading1: ({ children }) => <Heading mb={4}>{children}</Heading>,
  heading2: ({ children }) => (
    <Heading fontSize="3xl" mb={4}>
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading fontSize="2xl" mb={4}>
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading fontSize="1xl" mb={4}>
      {children}
    </Heading>
  ),
  heading5: ({ children }) => (
    <Heading fontSize="xl" mb={4}>
      {children}
    </Heading>
  ),
  heading6: ({ children }) => (
    <Heading fontSize="lg" mb={4}>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <Text mb={3}>{children}</Text>,
};

export const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <Flex flexDir="column" gap={4}>
      <Heading textTransform="uppercase" color="pink.500" fontSize="lg">
        Sobre
      </Heading>

      <PrismicRichText field={description} components={components} />
    </Flex>
  );
};
