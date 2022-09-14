import type { AnchorHTMLAttributes, HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.projects-header_container",
  (P) => ({
    base: css`
      display: flex;
      gap: 8px;
    `,
  })
);

const Detail = createStyledComponent<DetailProps, HTMLAttributes<HTMLSpanElement>>(
  "span.projects-header_detail",
  (P) => ({
    base: css`
      ${fonts.itemSubheader}

      color: var(--clr-accent);
    `,
  })
);

const Label = createStyledComponent<LabelProps, HTMLAttributes<HTMLHeadingElement>>(
  "h4.projects-header_container",
  (P) => ({
    base: css`
      ${fonts.itemHeader}

      color: var(--clr-primary-s20);
    `,
  })
);

const Link = createStyledComponent<LinkProps, AnchorHTMLAttributes<HTMLAnchorElement>>(
  "a.projects-header_container",
  (P) => ({
    base: css`
      ${fonts.itemSubheader}

      color: var(--clr-link);
    `,
  })
);

const TextsContainer = createStyledComponent<TextsContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.projects-header-container",
  (P) => ({
    base: css`
      display: flex;
      flex-direction: column;
      margin-top: 4px;
    `,
  })
);

export { Container, Detail, Label, Link, TextsContainer };

type ContainerProps = {};
type DetailProps = {};
type LabelProps = {};
type LinkProps = {};
type TextsContainerProps = {};

