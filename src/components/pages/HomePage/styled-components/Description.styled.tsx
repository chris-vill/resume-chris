import type { HTMLAttributes, ReactNode } from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

function Description(P: DescriptionProps) {
  const StyledParent = styled.p`
    margin: 4rem 0;
    line-height: 1.5;
    font-size: 1.5rem;
    text-align: center;

    ${codeStyles}
  `
  return <>
    <StyledParent className="description">
      {P.children}
    </StyledParent>
  </>
};

export {
  Description
};

const codeStyles = css`
  code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
      Bitstream Vera Sans Mono, Courier New, monospace;
  }

  @media (prefers-color-scheme: dark) {
    code {
      background: #111;
    }
  }
`

type DescriptionProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode
}