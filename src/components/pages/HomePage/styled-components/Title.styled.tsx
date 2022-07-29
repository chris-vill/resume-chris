import type { HTMLAttributes, ReactNode } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Title(P: TitleProps) {
  const StyledParent = styled.h1`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;

    ${aStyles}
  `;

  return <>
    <StyledParent className="title">
      {P.children}
    </StyledParent>
  </>
}

const aStyles = css`
  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`

export { Title };

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};