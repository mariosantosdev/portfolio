import { Container, Flex } from "@chakra-ui/react";

import { Gallery } from "./Gallery";
import { Description } from "./Description";
import { Tags } from "./Tags";
import { useMemo } from "react";

type ImageType = {
  alt?: string;
  copyright?: string;
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
};

type Project = {
  tags: string[];
  title: string;
  slug: string;
  description: any;
  images: Array<{
    image: ImageType;
  }>;
};

export const Project: React.FC<Project> = ({
  tags,
  images: imagesRaw,
  description,
}) => {
  const images = useMemo(
    () =>
      imagesRaw.map(({ image }) => ({
        ...image,
        src: image.url,
        width: image.dimensions.width,
        height: image.dimensions.height,
      })),
    [imagesRaw]
  );

  return (
    <Flex flexDir="column" w="full" gap={2}>
      <Container
        as={Flex}
        gap={4}
        flexDir="column"
        mx="auto"
        maxW="container.lg"
      >
        <Tags tags={tags} />

        <Description description={description} />

        <Gallery images={images} />
      </Container>
    </Flex>
  );
};
