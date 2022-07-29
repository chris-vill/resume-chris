import type { HTMLAttributes, ReactNode } from "react";

import styled from "@emotion/styled";

function Main(P: MainProps) {
  const Parent = styled.main`
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return <>
    <Parent>
      {P.children}
    </Parent>
  </>
};

export { Main };

type MainProps = HTMLAttributes<HTMLBaseElement> & {
  children: ReactNode;
}