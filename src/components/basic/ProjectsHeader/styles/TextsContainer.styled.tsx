import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

function TextsContainer(P: TextsContainerProps) {
  const Parent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4px;
  `;

  return (
    <>
      <Parent className="projects-header-texts-container">{P.children}</Parent>
    </>
  );
}

export { TextsContainer };

type TextsContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

