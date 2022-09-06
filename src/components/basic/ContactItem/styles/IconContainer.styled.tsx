import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

function IconContainer(P: IconContainerProps) {
  const Parent = styled.div`
    align-items: center;
    border: 1px solid var(--clr-accent-s20);
    border-radius: 50%;
    display: flex;
    height: 32px;
    justify-content: center;
    width: 32px;
  `;

  return (
    <>
      <Parent className="contact-item-icon-container">{P.children}</Parent>
    </>
  );
}

export { IconContainer };

type IconContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

