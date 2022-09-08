import styled from "@emotion/styled";

import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLDivElement>(
  "experience-section-container",
  styled.div`
    display: flex;
    flex-direction: column;
  `
);

const ExperienceContainer = createStyledComponent<ExperienceContainerProps, HTMLDivElement>(
  "experience-section-container",
  styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 6px;
  `
);

export { Container, ExperienceContainer };

type ContainerProps = {};
type ExperienceContainerProps = {};

