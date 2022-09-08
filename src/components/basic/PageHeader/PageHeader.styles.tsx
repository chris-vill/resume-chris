import styled from "@emotion/styled";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLDivElement>(
  "page-header-container",
  styled.div`
    background-color: var(--clr-primary);
    border: 2px solid var(--clr-accent);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 18px 64px;
  `
);

const Title = createStyledComponent<TitleProps, HTMLDivElement>(
  "page-header-title",
  styled.div`
    ${fonts.pageHeader}

    color: var(--clr-white);
    text-align: center;
  `
);

const Subtitle = createStyledComponent<SubtitleProps, HTMLDivElement>(
  "page-header-subtitle",
  styled.div`
    ${fonts.pageSubheader}

    color: var(--clr-light);
    text-align: center;
  `
);

export { Container, Title, Subtitle };

type ContainerProps = {};
type TitleProps = {};
type SubtitleProps = {};

