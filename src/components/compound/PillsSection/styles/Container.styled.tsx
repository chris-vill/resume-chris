import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

import { fonts } from "@styles";

function Container(P: ContainerProps) {
  const Parent = styled.div`
    display: flex;
    flex-direction: column;
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

