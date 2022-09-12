import type { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.experience-section-container",
  (P) => ({
    base: css`
      display: flex;
      flex-direction: column;
    `,
  })
);

const ExperienceContainer = createStyledComponent<
  ExperienceContainerProps,
  HTMLAttributes<HTMLDivElement>
>("div.experience-section-container", (P) => ({
  base: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 6px;
  `,
}));

export { Container, ExperienceContainer };

type ContainerProps = {};
type ExperienceContainerProps = {};

