import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

import { fonts } from "@styles";

function Header(P: HeaderProps) {
  const Parent = styled.h4`
    ${fonts.itemHeader}

    color: var(--clr-primary-s20);
  `;

  return (
    <>
      <Parent className="projects-header-header">{P.children}</Parent>
    </>
  );
}

export { Header };

type HeaderProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

