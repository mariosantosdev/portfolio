import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import { memo, useState } from "react";
import { Gallery as GridGallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import "react-image-lightbox/style.css";

type ImageType = {
  alt?: string;
  copyright?: string;
  src: string;
  width: number;
  height: number;
};

interface GalleryProps {
  images: ImageType[];
}

const GalleryComponent: React.FC<GalleryProps> = ({ images }) => {
  const rowHeight = useBreakpointValue({
    base: 250,
    sm: 250,
  });
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: ImageType) => setIndex(index);
  const handleClose = () => {
    setIndex(-1);
    enableBodyScroll(document.body);
  };
  const afterOpen = () => disableBodyScroll(document.body);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <Flex flexDir="column" gap={4}>
      <Heading textTransform="uppercase" color="pink.500" fontSize="lg">
        Galeria
      </Heading>

      <GridGallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        margin={4}
      />
      {Boolean(currentImage) && (
        <Lightbox
          mainSrc={currentImage.src}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onAfterOpen={afterOpen}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </Flex>
  );
};

export const Gallery = memo(GalleryComponent);
