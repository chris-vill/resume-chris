import type { HTMLAttributes, ReactNode } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Logo(P: LogoProps) {
  const Parent = styled.span`
    height: 1em;
    margin-left: 0.5rem;

    ${childImg}
  `;

  return <>
    <Parent className="logo">
      {P.children}
    </Parent>
  </>
}

const childImg = css`
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