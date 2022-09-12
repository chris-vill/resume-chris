import type { ImgHTMLAttributes } from "react";

import { css } from "@emotion/react";

import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, ImgHTMLAttributes<HTMLImageElement>>(
  "img.icon-container",
  (P) => ({
    base: css`
      height: 20px;
      width: 20px;
    `,
  }),
  true
);

export { Container };

type ContainerProps = {};

