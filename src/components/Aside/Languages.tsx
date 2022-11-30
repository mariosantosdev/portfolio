import { ButtonProps, Flex, Heading, Icon, IconButton } from "@chakra-ui/react";
import { SiNodedotjs, SiJavascript, SiTypescript } from "react-icons/si";
import { IconType } from "react-icons";
import Link from "next/link";

export type Language = {
  title: string;
  icon: IconType;
  colorScheme: ButtonProps["colorScheme"];
  color?: ButtonProps["color"];
  href: string;
};

const languages: Language[] = [
  {
    title: "NodeJS",
    icon: SiNodedotjs,
    colorScheme: "green",
    color: "white",
    href: "https://nodejs.org/en/",
  },
  {
    title: "Javascript",
    icon: SiJavascript,
    colorScheme: "yellow",
    color: "white",
    href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    title: "Typescript",
    icon: SiTypescript,
    colorScheme: "blue",
    href: "https://www.typescriptlang.org/",
  },
];

export const Languages: React.FC = () => {
  return (
    <Flex flexDir="column">
      <Heading textTransform="uppercase" color="pink.500" fontSize="lg">
        Linguagens de programação
      </Heading>

      <Flex flexDir="row" gap={2} mt={4} flexWrap="wrap">
        {languages.map((language) => (
          <Link
            key={language.title}
            href={language.href}
            target="_blank"
            passHref
          >
            <IconButton
              icon={<Icon as={language.icon} />}
              title={language.title}
              rounded="full"
              aria-label={language.title}
              colorScheme={language.colorScheme}
              color={language.color}
            />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};
