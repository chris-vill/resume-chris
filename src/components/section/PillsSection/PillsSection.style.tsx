import styled from "@emotion/styled";

import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLDivElement>(
  "pills-section-container",
  styled.div`
    display: flex;
    flex-direction: column;
  `
);

const Pills = createStyledComponent<PillsProps, HTMLDivElement>(
  "pills-section-pills",
  styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    gap: 4px;
    padding: 6px;
  `
);

export { Container, Pills };

type ContainerProps = {};
type PillsProps = {};

