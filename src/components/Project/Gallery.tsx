import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

interface GalleryProps {
  images: Array<{
    alt?: string;
    copyright?: string;
    dimensions: {
      width: number;
      height: number;
    };
    url: string;
  }>;
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Flex flexDir="column" gap={4}>
      <Heading textTransform="uppercase" color="pink.500" fontSize="lg">
        Galeria
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={4}>
        {images.map((image) => (
          <Box key={image?.alt || image.url} bg="red" w="fit-content">
            <Image
              alt={image?.alt || ""}
              src={image.url}
              width={640}
              height={640}
              style={{ objectFit: "contain" }}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};
