import styled from "@emotion/styled";
import { ReactNode } from "react";

function Color(P: ColorProps) {
  const Parent = styled.div`
    color: var(--clr-primary-0);
  `;

  return (
    <>
      <Parent className="colors-color">{P.children}</Parent>
    </>
  );
}

export { Color };

type ColorProps = {
  children: ReactNode;
};

