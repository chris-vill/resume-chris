import styled from "@emotion/styled";
import type { HTMLAttributes, ReactNode } from "react";

import { fonts } from "@styles";

function SubLabel(P: SubLabelProps) {
  const Parent = styled.span`
    ${fonts.itemSubheader}

    color: var(--clr-primary);
  `;

  return (
    <>
      <Parent className="contact-item-sublabel">{P.children}</Parent>
    </>
  );
}

export { SubLabel };

type SubLabelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

