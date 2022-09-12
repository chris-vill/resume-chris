import type * as T from "@types";

function HomePage(props: HomePageProps) {
  console.log(props);

  return <>Hello</>;
}

export { HomePage };

export type HomePageProps = {
  contacts: T.ContactItemProps[];
  education: T.EducationHeaderProps[];
  experience: T.ExperienceItemProps[];
  name: string;
  projects: T.ProjectsItemProps[];
  role: string;
  soft_skills: string[];
  technical_skills: string[];
  technologies: string[];
};

