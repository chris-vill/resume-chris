import type { AnchorHTMLAttributes, HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.contact-item_container",
  (P) => ({
    base: css`
      display: flex;
      flex-direction: row;
      gap: 8px;
      justify-content: center;
    `,
  })
);

const IconContainer = createStyledComponent<IconContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.contact-item_icon-container",
  (P) => ({
    base: css`
      align-items: center;
      border: 1px solid var(--clr-accent-s20);
      border-radius: 50%;
      display: flex;
      height: 32px;
      justify-content: center;
      width: 32px;
    `,
  })
);

const Label = createStyledComponent<LabelProps, HTMLAttributes<HTMLHeadingElement>>(
  "h4.ocntact-item_label",
  (P) => ({
    base: css`
      ${fonts.itemHeader}

      color: var(--clr-primary-s20);
    `,
  })
);

const LabelsContainer = createStyledComponent<LabelsContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.contact-item_labels-container",
  (P) => ({
    base: css`
      display: flex;
      flex-direction: column;
      justify-content: center;

      & > * {
        text-align: right;
      }
    `,
  })
);

const Link = createStyledComponent<LinkProps, AnchorHTMLAttributes<HTMLAnchorElement>>(
  "a.contact-item_link",
  (P) => ({
    base: css`
      ${fonts.itemSubheader}

      color: var(--clr-link);
    `,
  })
);

const Sublabel = createStyledComponent<SublabelProps, HTMLAttributes<HTMLSpanElement>>(
  "span.contact-item_sublabel",
  (P) => ({
    base: css`
      ${fonts.itemSubheader}

      color: var(--clr-primary);
    `,
  })
);

export { Container, IconContainer, Label, LabelsContainer, Link, Sublabel };

type ContainerProps = {};
type IconContainerProps = {};
type LabelProps = {};
type LabelsContainerProps = {};
type LinkProps = {};
type SublabelProps = {};

