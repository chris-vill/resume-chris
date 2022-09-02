import type { HTMLAttributes, ReactNode } from "react";

import styled from "@emotion/styled";
import { fonts } from "@styles";

function Header(P: HeaderProps) {
  const Parent = styled.h1`
    ${fonts.pageHeader}

    color: var(--clr-white);
    line-height: 37px;
    text-align: center;
  `;

  return (
    <>
      <Parent className="page-header-header">{P.children}</Parent>
    </>
  );
}

export { Header };

type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

