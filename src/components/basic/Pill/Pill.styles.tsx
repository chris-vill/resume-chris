import styled from "@emotion/styled";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLHeadingElement>(
  "pill-container",
  styled.h5`
    ${fonts.pill}

    background-color: var(--clr-primary-t20);
    border-radius: 6px;
    color: var(--clr-light);
    padding: 4px 6px;
  `
);

export { Container };

type ContainerProps = {};

