import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

import { fonts } from "@styles";

function Details(P: DetailsProps) {
  const Parent = styled.span`
    ${fonts.itemSubheader}

    color: var(--clr-accent);
  `;

  return (
    <>
      <Parent className="education-header-details">{P.children}</Parent>
    </>
  );
}

export { Details };

type DetailsProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

