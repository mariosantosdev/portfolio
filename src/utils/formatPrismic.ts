import { PrismicDocument } from "@prismicio/types";
import { asText } from "@prismicio/helpers";

type Project = {
  title: string;
  description: string;
  slug: string;
};

export function formatProjects(
  data: PrismicDocument<Record<string, any>, string, string>[]
): Project[] {
  return data.map((project) => ({
    slug: project.uid!,
    title: asText(project.data.title)!,
    description: asText(project.data.description)!,
  }));
}
