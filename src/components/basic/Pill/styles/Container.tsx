import styled from "@emotion/styled";
import { fonts } from "@styles";
import type { HTMLAttributes, ReactNode } from "react";

function Container(P: ContainerProps) {
  const Parent = styled.div`
    ${fonts.pill}

    background: var(--clr-primary-t20);
    border-radius: 6px;
    background-color: var(--clr-primary);
    color: var(--clr-light);
    padding: 4px 6px;
  `;

  return (
    <>
      <Parent className="pill-container">{P.children}</Parent>
    </>
  );
}

export { Container };

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

