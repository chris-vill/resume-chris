import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

function Container(P: ContainerProps) {
  const Parent = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 4px;
    height: 100%;
    max-width: max-content;

    .contact-item-container {
      flex-grow: 0;
      flex-shrink: 1;
    }
  `;

  return (
    <>
      <Parent className="contacts-container">{P.children}</Parent>
    </>
  );
}

export { Container };

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

