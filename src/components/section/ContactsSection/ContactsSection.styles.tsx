import styled from "@emotion/styled";

import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLDivElement>(
  "contacts-section-container",
  styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 4px;
    height: 100%;
    max-width: max-content;
  `
);

export { Container };

type ContainerProps = {};

