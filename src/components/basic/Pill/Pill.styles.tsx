import type { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLHeadingElement>>(
  "h5.pill-container",
  (P) => ({
    base: css`
      ${fonts.pill}

      background-color: var(--clr-primary-t20);
      border-radius: 6px;
      color: var(--clr-light);
      padding: 4px 6px;
    `,
  })
);

export { Container };

type ContainerProps = {};

