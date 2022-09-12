import type { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.side-section-header-container",
  (P) => ({
    base: css`
      align-items: center;
      display: flex;
    `,
  })
);

const Divider = createStyledComponent<DividerProps, HTMLAttributes<HTMLHRElement>>(
  "hr.side-section-header-divider",
  (P) => ({
    base: css`
      background-color: var(--clr-primary);
      flex-grow: 1;
      height: 2px;
    `,
  }),
  true
);

const Label = createStyledComponent<LabelProps, HTMLAttributes<HTMLDivElement>>(
  "div.side-section-header-container",
  (P) => ({
    base: css`
      ${fonts.sectionHeader}

      background: linear-gradient(90deg, var(--clr-accent-s20) 0%, var(--clr-primary) 100%);
      border-radius: 10px 0px 0px 10px;
      color: var(--clr-white);
      padding: 4px 12px;
    `,
  })
);

export { Container, Divider, Label };

type ContainerProps = {};
type DividerProps = {};
type LabelProps = {};

