import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { SideSectionHeader as Component } from "./SideSectionHeader";

export default {
  title: "Basic",
  component: Component,
  args: {
    label: "Side Section Header",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p8V2utLD1a3oN9ujXemCug/Resume?node-id=46%3A44",
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

export const SideSectionHeader = Template.bind({});

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

