import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

import { fonts } from "@styles";

function Date(P: DateProps) {
  const Parent = styled.span`
    ${fonts.date}

    color: var(--clr-accent);
  `;

  return (
    <>
      <Parent className="education-header-date">{P.children}</Parent>
    </>
  );
}

export { Date };

type DateProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

