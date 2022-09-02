import type { HTMLAttributes, ReactNode } from "react";

import styled from "@emotion/styled";

function Container(P: ContainerProps) {
  const Parent = styled.div`
    align-items: center;
    display: flex;
  `;

  return (
    <>
      <Parent className="side-section-header-container">{P.children}</Parent>
    </>
  );
}

export { Container };

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

