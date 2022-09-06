import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

import { fonts } from "@styles";

function Header(P: HeaderProps) {
  const Parent = styled.div`
    ${fonts.sectionHeader}

    background: linear-gradient(90deg, var(--clr-accent-s20) 0%, var(--clr-primary) 100%);
    border-radius: 0px 10px 10px 0px;
    color: var(--clr-white);
    padding: 4px 12px;
  `;

  return (
    <>
      <Parent className="main-section-header-header">{P.children}</Parent>
    </>
  );
}

export { Header };

type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};
