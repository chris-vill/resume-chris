import styled from "@emotion/styled";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";
import { AnchorHTMLAttributes } from "react";

const Container = createStyledComponent<ContainerProps, HTMLDivElement>(
  "contact-item-container",
  styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
  `
);

const IconContainer = createStyledComponent<IconContainerProps, HTMLDivElement>(
  "contact-item-icon-container",
  styled.div`
    align-items: center;
    border: 1px solid var(--clr-accent-s20);
    border-radius: 50%;
    display: flex;
    height: 32px;
    justify-content: center;
    width: 32px;
  `
);

const Label = createStyledComponent<LabelProps, HTMLHeadingElement>(
  "contact-item-label",
  styled.h4`
    ${fonts.itemHeader}

    color: var(--clr-primary-s20);
  `
);

const LabelsContainer = createStyledComponent<LabelsContainerProps, HTMLDivElement>(
  "contact-item-labels-container",
  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
);

const Link = createStyledComponent<
  LinkProps,
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>(
  "contact-item-link",
  styled.a`
    ${fonts.itemSubheader}

    color: var(--clr-link);
  `
);

const Sublabel = createStyledComponent<SublabelProps, HTMLSpanElement>(
  "contact-item-sublabel",
  styled.span`
    ${fonts.itemSubheader}

    color: var(--clr-primary);
  `
);

export { Container, IconContainer, Label, LabelsContainer, Link, Sublabel };

type ContainerProps = {};
type IconContainerProps = {};
type LabelProps = {};
type LabelsContainerProps = {};
type LinkProps = {};
type SublabelProps = {};

