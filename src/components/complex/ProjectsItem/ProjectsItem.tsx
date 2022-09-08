import type * as T from "@types";

import * as SC from "./ProjectsItem.styles";
import { ProjectsHeader } from "@components";

function ProjectsItem(props: ProjectsItemProps) {
  const { details, ...headerProps } = props;

  return (
    <>
      <SC.Container>
        <ProjectsHeader {...headerProps} />
        <SC.DetailsList>
          {details.map((detail, i) => (
            <SC.Detail key={i}>{detail}</SC.Detail>
          ))}
        </SC.DetailsList>
      </SC.Container>
    </>
  );
}

export { ProjectsItem };

type ProjectsItemProps = T.ProjectsHeaderProps & {
  details: string[];
};

