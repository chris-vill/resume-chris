import type * as T from "@types";

import * as SC from "./HomePage.styles";
import { PageHeader, Section } from "@components";

function HomePage(props: HomePageProps) {
  const {
    contacts,
    description,
    education,
    experience,
    name,
    projects,
    role,
    soft_skills,
    technical_skills,
    technologies,
  } = props;

  return (
    <>
      <SC.Container>
        <PageHeader header={name} subheader={role} />
        <SC.ContentContainer>
          <SC.SideContent>
            <Section.Contacts {...{ contacts }} />
            <Section.Pills label="Technologies" items={technologies} />
            <Section.Pills label="Technical Skills" items={technical_skills} />
            <Section.Pills label="Soft Skills" items={soft_skills} />
            <Section.Education {...{ education }} />
          </SC.SideContent>
          <SC.MainContent>
            <SC.Description>{description}</SC.Description>
            <Section.Experience {...{ experience }} />
            <Section.Projects {...{ projects }} />
          </SC.MainContent>
        </SC.ContentContainer>
      </SC.Container>
    </>
  );
}

export { HomePage };

export type HomePageProps = {
  contacts: T.ContactItemProps[];
  description: string;
  education: T.EducationHeaderProps[];
  experience: T.ExperienceItemProps[];
  name: string;
  projects: T.ProjectsItemProps[];
  role: string;
  soft_skills: string[];
  technical_skills: string[];
  technologies: string[];
};

