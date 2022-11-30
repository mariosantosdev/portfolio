import { Flex, FlexProps } from "@chakra-ui/react";
import Image from "next/image";

export interface MemojiProps extends FlexProps {
  image: string;
}

export const Memoji: React.FC<MemojiProps> = ({ image, ...rest }) => {
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      alignSelf={{ base: "auto", md: "flex-end" }}
      maxW={{ base: "100%", md: "40%" }}
      justifyContent="center"
      alignItems="center"
      {...rest}
    >
      <Image
        alt="Mário Santos Memoji"
        src={image}
        width={400}
        height={400}
        quality={100}
        style={{ objectFit: "contain" }}
      />
    </Flex>
  );
};
