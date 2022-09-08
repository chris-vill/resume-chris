import type * as T from "@types";

import * as SC from "./ExperienceItem.styles";
import { ExperienceHeader } from "@components";

function ExperienceItem(props: ExperienceItemProps) {
  const { details, ...headerProps } = props;

  return (
    <>
      <SC.Container>
        <ExperienceHeader {...headerProps} />
        <SC.DetailsList>
          {details.map((detail, i) => (
            <SC.Detail key={i}>{detail}</SC.Detail>
          ))}
        </SC.DetailsList>
      </SC.Container>
    </>
  );
}

export { ExperienceItem };

export type ExperienceItemProps = T.ExperienceHeaderProps & {
  details: string[];
};

