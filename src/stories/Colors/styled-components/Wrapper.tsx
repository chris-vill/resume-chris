import styled from "@emotion/styled";
import { ReactNode } from "react";

function Wrapper(P: WrapperProps) {
  const Parent = styled.div`
    display: flex;
    gap: 16px;
  `;

  return (
    <>
      <Parent className="colors-wrapper">{P.children}</Parent>
    </>
  );
}

export { Wrapper };

type WrapperProps = {
  children: ReactNode;
};

