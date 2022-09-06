import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

import { fonts } from "@styles";

function Label(P: LabelProps) {
  const Parent = styled.h4`
    ${fonts.itemHeader}

    color: var(--clr-primary-s20);
  `;

  return (
    <>
      <Parent className="contact-item-label">{P.children}</Parent>
    </>
  );
}

export { Label };

type LabelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

