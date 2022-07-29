import { HTMLAttributes, ReactNode } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Footer(P: FooterProps) {
  const StyledParent = styled.footer`
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;

    ${aStyles}

    @media (prefers-color-scheme: dark) {
      & {
        border-color: #222;
      }
    }
  `
  return <>
    <StyledParent>
      {P.children}
    </StyledParent>
  </>
}

const aStyles = css`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`

export { Footer };

type FooterProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};