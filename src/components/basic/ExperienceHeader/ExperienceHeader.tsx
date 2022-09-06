import * as SC from "./styles";
import { Icon } from "@components";

function ExperienceHeader(props: ExperienceHeaderProps) {
  const { company, date, location, title } = props;

  return (
    <>
      <SC.Container>
        <Icon as="star" />
        <SC.LabelsContainer>
          <SC.Label>
            <h4>{title}</h4>
            <h4> @ {company}</h4>
          </SC.Label>
          <SC.Sublabel>
            <span>{date}</span>
            <span> ~ {location}</span>
          </SC.Sublabel>
        </SC.LabelsContainer>
      </SC.Container>
    </>
  );
}

export { ExperienceHeader };

type ExperienceHeaderProps = {
  company: string;
  date: string;
  location: string;
  title: string;
};

