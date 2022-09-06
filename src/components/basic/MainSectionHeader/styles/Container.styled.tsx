import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

function Container(P: ContainerProps) {
  const Parent = styled.div`
    align-items: center;
    display: flex;
  `;

  return (
    <>
      <Parent className="main-section-header-container">{P.children}</Parent>
    </>
  );
}

export { Container };

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

