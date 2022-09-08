import styled from "@emotion/styled";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLDivElement>(
  "education-header-container",
  styled.div`
    align-items: flex-end;
    display: flex;
    flex-direction: column;

    h4 {
      ${fonts.itemHeader}

      color: var(--clr-primary-s20);
    }
  `
);

const Date = createStyledComponent<DateProps, HTMLSpanElement>(
  "education-header-date",
  styled.span`
    ${fonts.date}

    color: var(--clr-accent);
  `
);

const Detail = createStyledComponent<DetailProps, HTMLSpanElement>(
  "education-header-detail",
  styled.span`
    ${fonts.itemSubheader}

    color: var(--clr-accent);
  `
);

export { Container, Date, Detail };

type ContainerProps = {};
type DateProps = {};
type DetailProps = {};

