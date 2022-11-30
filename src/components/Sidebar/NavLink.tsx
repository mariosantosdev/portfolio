import { Icon, Text, TextProps as ChakraTextProps } from "@chakra-ui/react";
import { ElementType, HTMLAttributeAnchorTarget } from "react";
import { ActiveLink } from "@/components/ActiveLink";

interface NavLinkProps extends ChakraTextProps {
  href: string;
  icon?: ElementType;
  children: string;
  target?: HTMLAttributeAnchorTarget;
}

export function NavLink({
  icon,
  children,
  href,
  target,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref target={target}>
      <Text display="flex" alignItems="center" {...rest}>
        {icon && <Icon as={icon} fontSize="20" />}
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </Text>
    </ActiveLink>
  );
}
