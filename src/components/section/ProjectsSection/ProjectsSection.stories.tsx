import type { ComponentStory, ComponentMeta } from "@storybook/react";

import styled from "@emotion/styled";
import React from "react";

import { ProjectsSection as Component } from "./ProjectsSection";
import { URLS } from "@constants";

export default {
  title: "Sections",
  component: Component,
  args: {
    projects: [
      {
        name: "My Resume",
        repository: "github.com/chris-vill/resume-chris",
        design: "figma.com/file/p8V2utLD1a3oN9ujXemCug/Resume",
        details: [
          "This project contains the codebase for this resume",
          "The purpose of this project is to sharpen my skills in codebase architecture, use of Storybook, styled components, Atomic Design principles and also improve my understanding of basic UI/UX design",
          "Technologies: TypeScript, React.js, Next.js, Storybook, Emotion, Atomic Design, Figma",
        ],
      },
      {
        name: "My Resume",
        repository: "github.com/chris-vill/resume-chris",
        design: "figma.com/file/p8V2utLD1a3oN9ujXemCug/Resume",
        details: [
          "This project contains the codebase for this resume",
          "The purpose of this project is to sharpen my skills in codebase architecture, use of Storybook, styled components, Atomic Design principles and also improve my understanding of basic UI/UX design",
          "Technologies: TypeScript, React.js, Next.js, Storybook, Emotion, Atomic Design, Figma",
        ],
      },
    ],
  },
  parameters: {
    // design: {
    //   type: "figma",
    //   url: URLS.FIGMA.PILLS_SECTION,
    // },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <>
      <StoryContainer>
        <Component {...args} />
      </StoryContainer>
    </>
  );
};

export const ProjectsSection = Template.bind({});

const StoryContainer = styled.div`
  border: 2px solid #000000;
  height: 300px;
  width: 400px;

  .sample-content-body {
    margin: auto;
  }
`;

