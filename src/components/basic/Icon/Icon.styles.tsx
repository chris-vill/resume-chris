import { ImgHTMLAttributes } from "react";

import styled from "@emotion/styled";

import { createStyledComponent } from "@utils";

const Container = createStyledComponent<
  ContainerProps,
  HTMLImageElement,
  ImgHTMLAttributes<HTMLImageElement>
>(
  "icon-container",
  styled.img`
    height: 20px;
    width: 20px;
  `,
  true
);

export { Container };

type ContainerProps = {};

