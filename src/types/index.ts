import { ICONS } from "@constants";

export type IconKeys = typeof ICONS[number];

export type SvgKeys = Uppercase<IconKeys>;

export type {
  ContactItemProps,
  EducationHeaderProps,
  ExperienceHeaderProps,
  ExperienceItemProps,
  ProjectsHeaderProps,
  ProjectsItemProps,
} from "@components";
export type { HomePageProps } from "./../components/pages/HomePage/HomePage";

