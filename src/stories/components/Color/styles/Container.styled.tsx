import styled from "@emotion/styled";
import { ReactNode } from "react";

function Container(P: ContainerProps) {
  const Parent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `;

  return (
    <>
      <Parent className="color-container">{P.children}</Parent>
    </>
  );
}

export { Container };

type ContainerProps = {
  children: ReactNode;
};

