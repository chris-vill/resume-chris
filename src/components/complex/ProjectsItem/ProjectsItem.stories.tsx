import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ProjectsItem as Component } from "./ProjectsItem";
import { URLS } from "@constants";
import styled from "@emotion/styled";

export default {
  title: "Complex",
  component: Component,
  args: {
    name: "My Resume",
    repository: "github.com/chris-vill/resume-chris",
    design: "figma.com/file/p8V2utLD1a3oN9ujXemCug/Resume",
    details: [
      "This project contains the codebase for this resume",
      "The purpose of this project is to sharpen my skills in codebase architecture, use of Storybook, styled components, Atomic Design principles and also improve my understanding of basic UI/UX design",
      "Technologies: TypeScript, React.js, Next.js, Storybook, Emotion, Atomic Design, Figma",
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

export const ProjectsItem = Template.bind({});

const StoryContainer = styled.div`
  border: 2px solid #000000;
  height: 130px;
  width: 400px;

  .sample-content-body {
    margin: auto;
  }
`;

