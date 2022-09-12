import type { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.pills-section-container",
  (P) => ({
    base: css`
      display: flex;
      flex-direction: column;
    `,
  })
);

const Pills = createStyledComponent<PillsProps, HTMLAttributes<HTMLDivElement>>(
  "div.pills-section-pills",
  (P) => ({
    base: css`
      display: flex;
      flex-direction: row-reverse;
      flex-wrap: wrap;
      gap: 4px;
      padding: 6px;
    `,
  })
);

export { Container, Pills };

type ContainerProps = {};
type PillsProps = {};

