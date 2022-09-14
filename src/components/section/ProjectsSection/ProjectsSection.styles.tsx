import type { HTMLAttributes, HtmlHTMLAttributes } from "react";

import { css } from "@emotion/react";

import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HtmlHTMLAttributes<HTMLDivElement>>(
  "div.projects-section_container",
  () => ({
    base: css`
      display: flex;
      flex-direction: column;
    `,
  })
);

const Projects = createStyledComponent<ProjectsProps, HTMLAttributes<HTMLDivElement>>(
  "div.projects-section_container",
  () => ({
    base: css`
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 12px 24px 12px 12px;
    `,
  })
);

export { Container, Projects };

type ContainerProps = {};
type ProjectsProps = {};

