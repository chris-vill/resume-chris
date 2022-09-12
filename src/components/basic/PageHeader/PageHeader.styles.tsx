import type { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.page-header-container",
  (P) => ({
    base: css`
      background-color: var(--clr-primary);
      border: 2px solid var(--clr-accent);
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 18px 64px;
    `,
  })
);

const Title = createStyledComponent<TitleProps, HTMLAttributes<HTMLDivElement>>(
  "div.page-header-title",
  (P) => ({
    base: css`
      ${fonts.pageHeader}

      color: var(--clr-white);
      text-align: center;
    `,
  })
);

const Subtitle = createStyledComponent<SubtitleProps, HTMLAttributes<HTMLDivElement>>(
  "div.page-header-subtitle",
  (P) => ({
    base: css`
      ${fonts.pageSubheader}

      color: var(--clr-light);
      text-align: center;
    `,
  })
);

export { Container, Title, Subtitle };

type ContainerProps = {};
type TitleProps = {};
type SubtitleProps = {};

