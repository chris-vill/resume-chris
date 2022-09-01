import styled from "@emotion/styled";
import { ReactNode } from "react";

function Container(P: ContainerProps) {
  const Parent = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 13px;
    height: 240px;
    width: 485px;
  `;

  return (
    <>
      <Parent className="colors-container">{P.children}</Parent>
    </>
  );
}

export { Container };

type ContainerProps = {
  children: ReactNode;
};

