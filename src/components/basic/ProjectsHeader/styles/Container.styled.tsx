import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

function Container(P: ContainerProps) {
  const Parent = styled.div`
    display: flex;
    gap: 8px;
  `;

  return (
    <>
      <Parent className="projects-header-container">{P.children}</Parent>
    </>
  );
}

export { Container };

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

