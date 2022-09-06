import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

import { fonts } from "@styles";

function Label(P: LabelProps) {
  const Parent = styled.div`
    h4 {
      display: inline;
      color: var(--clr-primary-s20);

      &:first-of-type {
        ${fonts.itemHeader}
      }

      &:nth-of-type(2) {
        ${fonts.itemSubheader}
      }
    }
  `;

  return (
    <>
      <Parent className="experience-header-label">{P.children}</Parent>
    </>
  );
}

export { Label };

type LabelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

