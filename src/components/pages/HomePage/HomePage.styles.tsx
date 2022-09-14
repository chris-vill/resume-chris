import type { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { fonts } from "@styles";
import { createStyledComponent } from "@utils";

const Container = createStyledComponent<ContainerProps, HTMLAttributes<HTMLDivElement>>(
  "div.home-page_container",
  (P) => ({
    base: css`
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 1072px;
      margin: 48px auto 0px;
      /* width: 612px; */
      width: 790px;
    `,
  })
);

const ContentContainer = createStyledComponent<
  ContentContainerProps,
  HTMLAttributes<HTMLDivElement>
>("div.home-page_content-container", (P) => ({
  base: css`
    display: flex;
    flex-grow: 1;
  `,
}));

const Description = createStyledComponent<DescriptionProps, HTMLAttributes<HTMLParagraphElement>>(
  "p.home-page_description",
  () => ({
    base: css`
      ${fonts.itemBody}

      padding: 24px 24px 12px 12px;
    `,
  })
);

const MainContent = createStyledComponent<MainContentProps, HTMLAttributes<HTMLDivElement>>(
  "div.home-page_main-content",
  (P) => ({
    base: css``,
  })
);

const SideContent = createStyledComponent<SideContentProps, HTMLAttributes<HTMLDivElement>>(
  "div.home-page_side-content",
  (P) => ({
    base: css`
      border-right: 2px solid var(--clr-accent-s20);
      /* max-width: 217px; */
      max-width: 428px;
      padding-top: 24px;

      .contacts-section_container {
        padding-top: 0px;
      }

      .education-header_container {
        max-width: 154px;
        margin: 0px 0px 0px auto;
      }
    `,
  })
);

export { Container, ContentContainer, Description, MainContent, SideContent };

type DescriptionProps = {};
type ContainerProps = {};
type ContentContainerProps = {};
type MainContentProps = {};
type SideContentProps = {};

