import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

import { fonts } from "@styles";

function Pills(P: PillsProps) {
  const Parent = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    gap: 4px;
    padding: 6px;
  `;

  return (
    <>
      <Parent className="pill-pills">{P.children}</Parent>
    </>
  );
}

export { Pills };

type PillsProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

