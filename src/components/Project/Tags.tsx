import { randomColorSchema } from "@/utils/randomColor";
import { Badge, Flex, Heading } from "@chakra-ui/react";

interface TagsProps {
  tags: string[];
}

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <Flex flexDir="column" gap={4}>
      <Heading textTransform="uppercase" color="pink.500" fontSize="lg">
        Tags
      </Heading>

      <Flex flexWrap="wrap" flexDir="row" gap={2}>
        {tags.map((tag) => (
          <Badge key={tag} colorScheme={randomColorSchema()}>
            {tag}
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
};
