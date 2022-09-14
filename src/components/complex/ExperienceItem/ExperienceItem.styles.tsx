import type { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.experience-item_container",
  (P) => ({
    base: css``,
  })
);

const Detail = createStyledComponent<DetailProps, HTMLAttributes<HTMLLIElement>>(
  "li.experience-item_detail",
  (P) => ({
    base: css`
      ${fonts.itemBody}

      display: flex;

      &:not(:last-child) {
        margin-bottom: 2px;
      }

      &::before {
        background-color: var(--clr-primary);
        border-radius: 50%;
        content: "";
        display: inline-block;
        flex-shrink: 0;
        height: 6px;
        margin-right: 8px;
        margin-top: 2px;
        width: 6px;
      }
    `,
  })
);

const DetailsList = createStyledComponent<DetailsListProps, HTMLAttributes<HTMLUListElement>>(
  "ul.experience-item_details-list",
  (P) => ({
    base: css`
      margin-left: 28px;
      margin-top: 6px;
    `,
  })
);

export { Container, Detail, DetailsList };

type ContainerProps = {};
type DetailProps = {};
type DetailsListProps = {};

