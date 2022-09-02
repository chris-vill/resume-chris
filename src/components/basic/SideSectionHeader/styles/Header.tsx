import type { HTMLAttributes, ReactNode } from "react";

import styled from "@emotion/styled";
import { fonts } from "@styles";

function Header(P: HeaderProps) {
  const Parent = styled.div`
    ${fonts.sectionHeader}

    background: linear-gradient(90deg, var(--clr-accent-s20) 0%, var(--clr-primary) 100%);
    border-radius: 10px 0px 0px 10px;
    color: var(--clr-white);
    padding: 4px 12px;
  `;

  return (
    <>
      <Parent className="side-section-header-header">{P.children}</Parent>
    </>
  );
}

export { Header };

type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

