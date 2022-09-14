import type * as T from "@types";

import * as SC from "./ExperienceSection.styles";
import { MainSectionHeader, ExperienceItem } from "@components";

function ExperienceSection(props: ExperienceSectionProps) {
  const { experience } = props;

  return (
    <>
      <SC.Container>
        <MainSectionHeader label="Experience" />
        <SC.Experiences>
          {experience.map((exp) => (
            <ExperienceItem {...exp} />
          ))}
        </SC.Experiences>
      </SC.Container>
    </>
  );
}

export { ExperienceSection };

type ExperienceSectionProps = {
  experience: T.ExperienceItemProps[];
};

