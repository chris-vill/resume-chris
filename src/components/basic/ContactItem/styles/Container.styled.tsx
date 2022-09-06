import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

function Container(P: ContainerProps) {
  const Parent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
  `;

  return (
    <>
      <Parent className="contact-item-container">{P.children}</Parent>
    </>
  );
}

export { Container };

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

