import styled from "@emotion/styled";
import { omit } from "lodash";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { fonts } from "@styles";

function Link(P: LinkProps) {
  const Parent = styled.a`
    ${fonts.itemSubheader}

    color: var(--clr-link);
  `;

  return (
    <>
      <Parent className="projects-header-link" {...omit(P, "children")}>
        {P.children}
      </Parent>
    </>
  );
}

export { Link };

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

