import styled from "@emotion/styled";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLDivElement>(
  "experience-header-container",
  styled.div`
    display: flex;
    gap: 6px;
  `
);

const Label = createStyledComponent<LabelProps, HTMLDivElement>(
  "experience-header-label",
  styled.div`
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
  `
);

const Sublabel = createStyledComponent<SublabelProps, HTMLDivElement>(
  "experience-header-sublabel",
  styled.div`
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
  `
);

export { Container, Label, Sublabel };

type ContainerProps = {};
type LabelProps = {};
type SublabelProps = {};

