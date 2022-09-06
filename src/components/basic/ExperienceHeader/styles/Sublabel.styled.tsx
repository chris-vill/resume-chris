import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

import { fonts } from "@styles";

function Sublabel(P: SublabelProps) {
  const Parent = styled.div`
    span {
      display: inline;
      color: var(--clr-accent);

      &:first-of-type {
        ${fonts.date}
      }

      &:nth-of-type(2) {
        ${fonts.itemSubheader}
      }
    }
  `;

  return (
    <>
      <Parent className="experience-header-sublabel">{P.children}</Parent>
    </>
  );
}

export { Sublabel };

type SublabelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

