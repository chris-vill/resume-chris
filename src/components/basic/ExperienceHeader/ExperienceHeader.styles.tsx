import type { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.experience-header-container",
  (P) => ({
    base: css`
      display: flex;
      gap: 6px;
    `,
  })
);

const Label = createStyledComponent<LabelProps, HTMLAttributes<HTMLDivElement>>(
  "div.experience-header-label",
  (P) => ({
    base: css`
      h4 {
        display: inline;
        color: var(--clr-primary-s20);

        &:first-of-type {
          ${fonts.itemHeader}
        }

        &:nth-of-type(2) {
          ${fonts.itemSubheader}
        }
      }
    `,
  })
);

const Sublabel = createStyledComponent<SublabelProps, HTMLAttributes<HTMLDivElement>>(
  "div.experience-header-sublabel",
  (P) => ({
    base: css`
      span {
        display: inline;
        color: var(--clr-accent);

        &:first-of-type {
          ${fonts.date}
        }

        &:nth-of-type(2) {
          ${fonts.itemSubheader}
        }
      }
    `,
  })
);

export { Container, Label, Sublabel };

type ContainerProps = {};
type LabelProps = {};
type SublabelProps = {};

