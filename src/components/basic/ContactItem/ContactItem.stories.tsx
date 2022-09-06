import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ContactItem as Component } from "./ContactItem";
import { URLS } from "@constants";

export default {
  title: "Basic/Contact Item",
  component: Component,
  args: {
    label: "Label",
    type: "email",
  },
  parameters: {
    design: {
      type: "figma",
      url: URLS.FIGMA.CONTACTS,
    },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const WithoutLink = Template.bind({});
WithoutLink.args = {
  link: null,
  value: "sub label",
};

export const WithLink = Template.bind({});
WithLink.args = {
  link: "https://youtube.com",
  value: "/link",
};

