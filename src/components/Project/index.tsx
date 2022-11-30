import { Flex, Text } from "@chakra-ui/react";
import ReactHtmlParser from "html-react-parser";

type Project = {
  title: string;
  description: string;
  slug: string;
};

export const Project: React.FC<Project> = ({ title, description, slug }) => {
  return (
    <Flex flexDir="column" w="full" gap={2}>
      <Text>{ReactHtmlParser(description)}</Text>
    </Flex>
  );
};
