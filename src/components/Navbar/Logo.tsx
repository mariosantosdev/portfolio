import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      color="white"
    >
      Mário{" "}
      <Text as="span" color="pink.500">
        Santos
      </Text>
    </Text>
  );
}
