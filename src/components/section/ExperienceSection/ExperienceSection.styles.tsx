import type { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.experience-section_container",
  (P) => ({
    base: css`
      display: flex;
      flex-direction: column;
    `,
  })
);

const Experiences = createStyledComponent<ExperiencesProps, HTMLAttributes<HTMLDivElement>>(
  "div.experience-section_experience-container",
  (P) => ({
    base: css`
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: 12px 24px 12px 12px;
    `,
  })
);

export { Container, Experiences };

type ContainerProps = {};
type ExperiencesProps = {};

