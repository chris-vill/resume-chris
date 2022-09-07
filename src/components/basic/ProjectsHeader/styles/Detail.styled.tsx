import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

import { fonts } from "@styles";

function Detail(P: DetailProps) {
  const Parent = styled.span`
    ${fonts.itemSubheader}

    color: var(--clr-accent);
  `;

  return (
    <>
      <Parent className="projects-header-detail">{P.children}</Parent>
    </>
  );
}

export { Detail };

type DetailProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

