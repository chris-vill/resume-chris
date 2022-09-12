import type { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.contacts-section-container",
  (P) => ({
    base: css`
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 4px;
      height: 100%;
      max-width: max-content;
    `,
  })
);

export { Container };

type ContainerProps = {};

