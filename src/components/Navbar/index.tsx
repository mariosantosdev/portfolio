import {
  Container,
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiMenu2Line } from "react-icons/ri";
import { useSidebarDrawer } from "@/contexts/SidebarDrawerContext";
import { NavLink } from "@/components/Sidebar/NavLink";

import { Logo } from "./Logo";

export const Navbar: React.FC = () => {
  const { onOpen } = useSidebarDrawer();

  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex as="nav" w="full" h="20" align="center" bg="bgHeader">
      <Container
        maxW="container.lg"
        mx="auto"
        as={Flex}
        flexDir="row"
        alignItems="center"
        w="full"
        justifyContent="space-between"
      >
        {/* Brand Logo */}
        <Logo />

        {isLargeScreen ? (
          <Flex>
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/projects">Projetos</NavLink>
          </Flex>
        ) : (
          <IconButton
            aria-label="Open sidebar"
            icon={<Icon as={RiMenu2Line} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="2"
            color="white"
          />
        )}
      </Container>
    </Flex>
  );
};
