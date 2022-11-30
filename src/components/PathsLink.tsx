import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { IoChevronForwardSharp } from "react-icons/io5";

export interface PathsLinkProps {
  paths: Array<{
    label: string;
    href: string;
    isCurrentPage?: boolean;
  }>;
}

export const PathsLink: React.FC<PathsLinkProps> = ({ paths }) => (
  <Breadcrumb separator={<IoChevronForwardSharp color="gray.500" />}>
    {paths.map((path) => (
      <BreadcrumbItem key={path.label}>
        <BreadcrumbLink href={path.href} isCurrentPage={path.isCurrentPage}>
          {path.label}
        </BreadcrumbLink>
      </BreadcrumbItem>
    ))}
  </Breadcrumb>
);
