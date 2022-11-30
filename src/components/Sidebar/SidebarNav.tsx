import { Stack } from "@chakra-ui/react";
import { RiFolder5Line, RiHomeLine, RiFilePaperLine } from "react-icons/ri";

import { SiGithub, SiLinkedin, SiTwitter, SiInstagram } from "react-icons/si";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      {/* Geral */}
      <NavSection title="Geral">
        <NavLink icon={RiHomeLine} href="/">
          Inicio
        </NavLink>
        <NavLink icon={RiFolder5Line} href="/projects">
          Projetos
        </NavLink>
      </NavSection>

      {/* Automation */}
      <NavSection title="Redes Sociais">
        <NavLink
          icon={SiGithub}
          href="https://github.com/mariosantosdev"
          target="_blank"
        >
          Github
        </NavLink>
        <NavLink
          icon={SiLinkedin}
          href="https://www.linkedin.com/in/mariosantos-dev/"
          target="_blank"
        >
          Linkedin
        </NavLink>
        <NavLink
          icon={SiTwitter}
          href="https://twitter.com/mariosantosdev"
          target="_blank"
        >
          Twitter
        </NavLink>
        <NavLink
          icon={SiInstagram}
          href="https://www.instagram.com/mariosantos.dev/"
          target="_blank"
        >
          Instagram
        </NavLink>
        <NavLink
          icon={RiFilePaperLine}
          href="https://www.devmario.me/Curriculo.pdf"
          target="_blank"
        >
          Curriculo
        </NavLink>
      </NavSection>
    </Stack>
  );
}
