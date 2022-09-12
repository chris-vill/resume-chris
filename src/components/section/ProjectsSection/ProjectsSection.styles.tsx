import type { HTMLAttributes, HtmlHTMLAttributes } from "react";

import { css } from "@emotion/react";

import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HtmlHTMLAttributes<HTMLDivElement>>(
  "div.projects-section-container",
  () => ({
    base: css`
      display: flex;
      flex-direction: column;
    `,
  })
);

const ProjectsContainer = createStyledComponent<
  ProjectsContainerProps,
  HTMLAttributes<HTMLDivElement>
>("div.experience-section-container", () => ({
  base: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 6px;
  `,
}));

export { Container, ProjectsContainer };

type ContainerProps = {};
type ProjectsContainerProps = {};

