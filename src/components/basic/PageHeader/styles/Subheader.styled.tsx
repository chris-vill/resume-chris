import type { HTMLAttributes, ReactNode } from "react";

import styled from "@emotion/styled";
import { fonts } from "@styles";

function Subheader(P: SubheaderProps) {
  const Parent = styled.h2`
    ${fonts.pageSubheader}

    color: var(--clr-light);
    line-height: 16px;
    text-align: center;
  `;

  return (
    <>
      <Parent className="page-header-subheader">{P.children}</Parent>
    </>
  );
}

export { Subheader };

type SubheaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

