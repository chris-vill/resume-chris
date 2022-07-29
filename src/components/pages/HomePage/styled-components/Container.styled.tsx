import type { HTMLAttributes, ReactNode } from "react";

import styled from "@emotion/styled";

export default function Container(P: ContainerProps) {
  const Parent = styled.div`
    padding: 0 2rem;
  `
  return <>
    <Parent className="container">
      {P.children}
    </Parent>
  </>
};

export {
  Container
};

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}