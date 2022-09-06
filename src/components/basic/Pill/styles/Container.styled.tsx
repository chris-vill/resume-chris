import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

import { fonts } from "@styles";

function Container(P: ContainerProps) {
  const Parent = styled.div`
    ${fonts.pill}

    background-color: var(--clr-primary-t20);
    border-radius: 6px;
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
