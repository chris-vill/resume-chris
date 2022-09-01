import type { HTMLAttributes, ReactNode } from "react";

import styled from "@emotion/styled";

function Container(P: ContainerProps) {
  const Parent = styled.div`
    background-color: var(--clr-primary);
    border: 2px solid var(--clr-accent);
    border-radius: 6px;
    padding: 18px 64px;
  `;

  return (
    <>
      <Parent className="page-header-container">{P.children}</Parent>
    </>
  );
}

export { Container };

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

