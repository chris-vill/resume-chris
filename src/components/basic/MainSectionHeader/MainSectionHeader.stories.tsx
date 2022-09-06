import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { MainSectionHeader as Component } from "./MainSectionHeader";
import { URLS } from "@constants";

export default {
  title: "Basic",
  component: Component,
  args: {
    label: "Main Section Header",
  },
  parameters: {
    design: {
      type: "figma",
      url: URLS.FIGMA.MAIN_SECTION_HEADER,
    },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <>
      <StoryContainer>
        <Component {...args} />
        <div className="sample-content-body">Sample Section Content</div>
      </StoryContainer>
    </>
  );
};

export const MainSectionHeader = Template.bind({});

const StoryContainer = styled.div`
  border: 2px solid #000000;
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 400px;

  .sample-content-body {
    margin: auto;
  }
`;

