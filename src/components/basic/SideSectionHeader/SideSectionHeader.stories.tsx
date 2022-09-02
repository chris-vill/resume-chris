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
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <>
      <SampleSection>
        <Component {...args} />
        <div className="sample-content-body">Sample Section Content</div>
      </SampleSection>
    </>
  );
};

export const SideSectionHeader = Template.bind({});

const SampleSection = styled.div`
  border: 2px solid #000000;
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 400px;

  .sample-content-body {
    margin: auto;
  }
`;

