import styled from "@emotion/styled";
import type { HTMLAttributes } from "react";

function Divider(P: DividerProps) {
  const Parent = styled.hr`
    background-color: var(--clr-primary);
    flex-grow: 1;
    height: 2px;
  `;

  return (
    <>
      <Parent className="main-section-header-divider" />
    </>
  );
}

export { Divider };

type DividerProps = HTMLAttributes<HTMLDivElement>;

