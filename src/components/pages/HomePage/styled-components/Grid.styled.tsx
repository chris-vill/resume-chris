import type { HTMLAttributes, ReactNode } from "react";

import styled from "@emotion/styled";

function Grid(P: GridProps) {
  const Parent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;

    @media (max-width: 600px) {
      .grid {
        width: 100%;
        flex-direction: column;
      }
    }
  `
  return <>
    <Parent className="grid">
      {P.children}
    </Parent>
  </>
};

export {
  Grid
};

type GridProps = HTMLAttributes<HTMLDivElement> &  {
  children: ReactNode
}