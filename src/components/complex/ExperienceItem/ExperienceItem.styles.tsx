import styled from "@emotion/styled";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const baseClassName = "experience-item";

const Container = createStyledComponent<ContainerProps, HTMLDivElement>(
  "experience-item-container",
  styled.div``
);

const Detail = createStyledComponent<DetailProps, HTMLLIElement>(
  "experience-item-detail",
  styled.li`
    ${fonts.itemBody}

    &:not(:last-child) {
      margin-bottom: 2px;
    }

    &::before {
      background-color: var(--clr-primary);
      border-radius: 50%;
      content: "";
      display: inline-block;
      height: 6px;
      margin-right: 8px;
      width: 6px;
    }
  `
);

const DetailsList = createStyledComponent<DetailsListProps, HTMLUListElement>(
  "experience-item-details-list",
  styled.ul`
    margin-left: 26px;
    margin-top: 6px;
  `
);

export { Container, Detail, DetailsList };

type ContainerProps = {};
type DetailProps = {};
type DetailsListProps = {};

