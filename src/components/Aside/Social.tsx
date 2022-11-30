import { ButtonProps, Flex, Heading, Icon, IconButton } from "@chakra-ui/react";
import {
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiInstagram,
  SiGmail,
} from "react-icons/si";
import { IconType } from "react-icons";
import Link from "next/link";

export type SocialLink = {
  title: string;
  href: string;
  icon: IconType;
  colorScheme: ButtonProps["colorScheme"];
};

const socialLinks: SocialLink[] = [
  {
    title: "Github",
    href: "https://github.com/mariosantosdev",
    icon: SiGithub,
    colorScheme: "gray",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/mariosantos-dev/",
    icon: SiLinkedin,
    colorScheme: "linkedin",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/mariosantosdev",
    icon: SiTwitter,
    colorScheme: "twitter",
  },
  {
    title: "Intagram",
    href: "https://www.instagram.com/mariosantos.dev/",
    icon: SiInstagram,
    colorScheme: "pink",
  },
  {
    title: "Email",
    href: `mailto:mariodev7@gmail.com?Subject=${encodeURI(
      "Contato através do portfólio"
    )}`,
    icon: SiGmail,
    colorScheme: "red",
  },
];

export const Social: React.FC = () => {
  return (
    <Flex flexDir="column">
      <Heading textTransform="uppercase" color="pink.500" fontSize="lg">
        Redes Sociais
      </Heading>

      <Flex flexDir="row" gap={2} mt={4} flexWrap="wrap">
        {socialLinks.map((link) => (
          <Link key={link.title} href={link.href} target="_blank">
            <IconButton
              icon={<Icon as={link.icon} />}
              title={link.title}
              rounded="full"
              aria-label={link.title}
              colorScheme={link.colorScheme}
            />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};
