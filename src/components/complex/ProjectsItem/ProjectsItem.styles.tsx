import styled from "@emotion/styled";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLDivElement>(
  "projects-item-container",
  styled.div`
    display: flex;
    flex-direction: column;
  `
);

const Detail = createStyledComponent<DetailProps, HTMLLIElement>(
  "projects-item-detail",
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
  "projects-item-details-list",
  styled.ul`
    margin-left: 26px;
    margin-top: 6px;
  `
);

export { Container, Detail, DetailsList };

type ContainerProps = {};
type DetailProps = {};
type DetailsListProps = {};

