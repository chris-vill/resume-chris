import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { MainSectionHeader as Component } from "./MainSectionHeader";

export default {
  title: "Basic",
  component: Component,
  args: {
    label: "Main Section Header",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p8V2utLD1a3oN9ujXemCug/Resume?node-id=37%3A7",
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

