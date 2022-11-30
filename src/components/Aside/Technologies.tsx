import { ButtonProps, Flex, Heading, Icon, IconButton } from "@chakra-ui/react";
import {
  SiReact,
  SiNextdotjs,
  SiVite,
  SiAdonisjs,
  SiChakraui,
  SiTailwindcss,
  SiSass,
} from "react-icons/si";
import { IconType } from "react-icons";
import Link from "next/link";

export type Stack = {
  title: string;
  icon: IconType;
  colorScheme: ButtonProps["colorScheme"];
  color?: ButtonProps["color"];
  href: string;
};

const stacks: Stack[] = [
  {
    title: "React",
    icon: SiReact,
    colorScheme: "cyan",
    color: "white",
    href: "https://reactjs.org/",
  },
  {
    title: "NextJS",
    icon: SiNextdotjs,
    colorScheme: "blackAlpha",
    href: "https://nextjs.org/",
  },
  {
    title: "ViteJS",
    icon: SiVite,
    colorScheme: "purple",
    href: "https://vitejs.dev/",
  },
  {
    title: "Chakra UI",
    icon: SiChakraui,
    colorScheme: "cyan",
    color: "white",
    href: "https://chakra-ui.com/",
  },
  {
    title: "Saas",
    icon: SiSass,
    colorScheme: "pink",
    color: "white",
    href: "https://sass-lang.com/",
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    colorScheme: "cyan",
    color: "white",
    href: "https://tailwindcss.com/",
  },

  {
    title: "AdonisJS",
    icon: SiAdonisjs,
    colorScheme: "purple",
    href: "https://adonisjs.com/",
  },
];

export const Technologies: React.FC = () => {
  return (
    <Flex flexDir="column">
      <Heading textTransform="uppercase" color="pink.500" fontSize="lg">
        Tecnologias
      </Heading>

      <Flex flexDir="row" gap={2} mt={4} flexWrap="wrap">
        {stacks.map((stack) => (
          <Link key={stack.title} href={stack.href} target="_blank" passHref>
            <IconButton
              icon={<Icon as={stack.icon} />}
              title={stack.title}
              rounded="full"
              aria-label={stack.title}
              colorScheme={stack.colorScheme}
              color={stack.color}
            />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};
