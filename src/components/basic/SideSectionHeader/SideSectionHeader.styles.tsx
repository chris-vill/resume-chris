import styled from "@emotion/styled";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLDivElement>(
  "side-section-header-container",
  styled.div`
    align-items: center;
    display: flex;
  `
);

const Divider = createStyledComponent<DividerProps, HTMLHRElement>(
  "side-section-header-divider",
  styled.hr`
    background-color: var(--clr-primary);
    flex-grow: 1;
    height: 2px;
  `,
  true
);

const Label = createStyledComponent<LabelProps, HTMLDivElement>(
  "side-section-header-container",
  styled.div`
    ${fonts.sectionHeader}

    background: linear-gradient(90deg, var(--clr-accent-s20) 0%, var(--clr-primary) 100%);
    border-radius: 10px 0px 0px 10px;
    color: var(--clr-white);
    padding: 4px 12px;
  `
);

export { Container, Divider, Label };

type ContainerProps = {};
type DividerProps = {};
type LabelProps = {};

