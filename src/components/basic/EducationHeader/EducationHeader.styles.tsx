import type { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.education-header_container",
  (P) => ({
    base: css`
      align-items: flex-end;
      display: flex;
      flex-direction: column;
      padding: 6px 12px 12px 12px;

      & * {
        text-align: right;
      }

      h4 {
        ${fonts.itemHeader}

        color: var(--clr-primary-s20);
      }
    `,
  })
);

const Date = createStyledComponent<DateProps, HTMLAttributes<HTMLSpanElement>>(
  "span.education-header_date",
  (P) => ({
    base: css`
      ${fonts.date}

      color: var(--clr-accent);
    `,
  })
);

const Detail = createStyledComponent<DetailProps, HTMLAttributes<HTMLSpanElement>>(
  "span.education-header_detail",
  (P) => ({
    base: css`
      ${fonts.itemSubheader}

      color: var(--clr-accent);
    `,
  })
);

export { Container, Date, Detail };

type ContainerProps = {};
type DateProps = {};
type DetailProps = {};

