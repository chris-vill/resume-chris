import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

function LabelsContainer(P: LabelsContainerProps) {
  const Parent = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <>
      <Parent className="contact-item-labels-container">{P.children}</Parent>
    </>
  );
}

export { LabelsContainer };

type LabelsContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

