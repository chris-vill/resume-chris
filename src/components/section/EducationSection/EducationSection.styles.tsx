import type { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.education-section_container",
  (P) => ({
    base: css``,
  })
);

export { Container };

type ContainerProps = {};

