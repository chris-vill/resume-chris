import type { AnchorHTMLAttributes, ReactNode } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { omit } from "lodash";

function Card(P: CardProps) {
  const htmlAttr = omit(P, ["children"]);

  const Parent = styled.a`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;

    ${childH2}
    ${childP}

    &:hover,
    &:focus,
    &:active {
      color: #0070f3;
      border-color: #0070f3;
    }

    @media (prefers-color-scheme: dark) {
      & {
        background: #111;
      }
    }
  `
  return <>
    <Parent className="card" {...htmlAttr}>
      {P.children}
    </Parent>
  </>
};

const childH2 = css`
  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
`

const childP = css`
  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`

export {
  Card
};

type CardProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}