import type * as T from "@types";

import * as SC from "./EducationSection.styles";
import { EducationHeader, SideSectionHeader } from "@components";

function EducationSection(props: EducationSectionProps) {
  const { education } = props;

  return (
    <>
      <SC.Container>
        <SideSectionHeader label="Education" />
        {education.map((ed) => (
          <EducationHeader {...ed} />
        ))}
      </SC.Container>
    </>
  );
}

export { EducationSection };

type EducationSectionProps = {
  education: T.EducationHeaderProps[];
};

