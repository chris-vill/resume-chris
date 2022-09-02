import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

import { fonts } from "@styles";

function Container(P: ContainerProps) {
  const Parent = styled.div`
    align-items: flex-end;
    display: flex;
    flex-direction: column;

    h4 {
      ${fonts.itemHeader}

      color: var(--clr-primary-s20);
    }
  `;

  return (
    <>
      <Parent className="education-header-container">{P.children}</Parent>
    </>
  );
}

export { Container };

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

