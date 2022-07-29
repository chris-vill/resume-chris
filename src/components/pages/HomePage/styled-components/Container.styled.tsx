import type { HTMLAttributes, ReactNode } from "react";

import styled from "@emotion/styled";

export default function Container(P: ContainerProps) {
  const StyledParent = styled.div`
    padding: 0 2rem;
  `
  return <>
    <StyledParent className="container">
      {P.children}
    </StyledParent>
  </>
};

export {
  Container
};

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}