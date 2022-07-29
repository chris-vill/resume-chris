import { HTMLAttributes, ReactNode } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Logo(P: LogoProps) {
  const StyledParent = styled.span`
    height: 1em;
    margin-left: 0.5rem;

    ${imgStyles}
  `;

  return <>
    <StyledParent className="logo">
      {P.children}
    </StyledParent>
  </>
}

const imgStyles = css`
  @media (prefers-color-scheme: dark) {
    img {
      filter: invert(1);
    }
  }
`

export { Logo };

type LogoProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};