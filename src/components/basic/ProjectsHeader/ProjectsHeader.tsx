import * as SC from "./ProjectsHeader.styles";
import { Icon } from "@components";

function ProjectsHeader(props: ProjectsHeaderProps) {
  const { design, name, repository } = props;

  return (
    <>
      <SC.Container>
        <Icon as="star" />
        <SC.TextsContainer>
          <SC.Label>{name}</SC.Label>
          <SC.Detail>
            repository: <SC.Link href={`https://${repository}`}>{repository}</SC.Link>
          </SC.Detail>
          <SC.Detail>
            design: <SC.Link href={`https://${design}`}>{design}</SC.Link>
          </SC.Detail>
        </SC.TextsContainer>
      </SC.Container>
    </>
  );
}

export { ProjectsHeader };

type ProjectsHeaderProps = {
  design: string;
  name: string;
  repository: string;
};

