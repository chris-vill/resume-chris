import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Contacts as Component } from "./Contacts";
import { URLS } from "@constants";

export default {
  title: "Sections",
  component: Component,
  parameters: {
    design: {
      type: "figma",
      url: URLS.FIGMA.CONTACTS,
    },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <StoryContainer>
      <Component />
    </StoryContainer>
  );
};

export const Contacts = Template.bind({});

const StoryContainer = styled.div`
  width: 240px;
`;

