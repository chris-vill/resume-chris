import type { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.contacts-section_container",
  (P) => ({
    base: css`
      align-items: flex-end;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 8px;
      /* height: 100%; */
      padding: 12px;
    `,
  })
);

export { Container };

type ContainerProps = {};

