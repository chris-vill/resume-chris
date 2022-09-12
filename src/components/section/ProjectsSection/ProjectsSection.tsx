import type * as T from "@types";

import * as SC from "./ProjectsSection.styles";
import { MainSectionHeader, ProjectsItem } from "@components";

function ProjectsSection(props: ProjectsSectionProps) {
  const { projects } = props;

  return (
    <>
      <SC.Container>
        <MainSectionHeader label="Projects" />
        <SC.ProjectsContainer>
          {projects.map((project) => (
            <ProjectsItem {...project} />
          ))}
        </SC.ProjectsContainer>
      </SC.Container>
    </>
  );
}

export { ProjectsSection };

export type ProjectsSectionProps = {
  projects: T.ProjectsItemProps[];
};

