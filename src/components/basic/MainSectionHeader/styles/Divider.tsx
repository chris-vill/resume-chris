import type { HTMLAttributes, ReactNode } from "react";

import styled from "@emotion/styled";

function Divider(P: DividerProps) {
  const Parent = styled.hr`
    background-color: var(--clr-primary);
    flex-grow: 1;
    height: 2px;

    /* NOTE: to remove the small whitespace between SC.Divider and SC.Header */
    position: relative;
    left: -1px;
  `;

  return (
    <>
      <Parent className="main-section-header-divider" />
    </>
  );
}

export { Divider };

type DividerProps = HTMLAttributes<HTMLDivElement>;

