import { Icon, Text, TextProps as ChakraTextProps } from "@chakra-ui/react";
import { ElementType, HTMLAttributeAnchorTarget } from "react";
import { ActiveLink } from "@/components/ActiveLink";

interface NavLinkProps extends ChakraTextProps {
  href: string;
  icon?: ElementType;
  children: string;
  target?: HTMLAttributeAnchorTarget;
  shouldMatchHref?: boolean;
}

export function NavLink({
  icon,
  children,
  href,
  target,
  shouldMatchHref = false,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink
      href={href}
      target={target}
      shouldMatchHref={shouldMatchHref}
      passHref
    >
      <Text display="flex" alignItems="center" {...rest}>
        {icon && <Icon as={icon} fontSize="20" />}
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </Text>
    </ActiveLink>
  );
}
