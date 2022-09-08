import styled from "@emotion/styled";
import { AnchorHTMLAttributes } from "react";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLDivElement>(
  "projects-header-container",
  styled.div`
    display: flex;
    gap: 8px;
  `
);

const Detail = createStyledComponent<DetailProps, HTMLSpanElement>(
  "projects-header-detail",
  styled.span`
    ${fonts.itemSubheader}

    color: var(--clr-accent);
  `
);

const Label = createStyledComponent<LabelProps, HTMLHeadingElement>(
  "projects-header-container",
  styled.h4`
    ${fonts.itemHeader}

    color: var(--clr-primary-s20);
  `
);

const Link = createStyledComponent<
  LinkProps,
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>(
  "projects-header-container",
  styled.a`
    ${fonts.itemSubheader}

    color: var(--clr-link);
  `
);

const TextsContainer = createStyledComponent<TextsContainerProps, HTMLDivElement>(
  "projects-header-container",
  styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4px;
  `
);

export { Container, Detail, Label, Link, TextsContainer };

type ContainerProps = {};
type DetailProps = {};
type LabelProps = {};
type LinkProps = {};
type TextsContainerProps = {};

