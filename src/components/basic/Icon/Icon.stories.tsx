import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon as Component } from "./Icon";
import { URLS } from "@constants";

export default {
  title: "Basic/Icon",
  component: Component,
  parameters: {
    design: {
      type: "figma",
      url: URLS.FIGMA.ICONS,
    },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Email = Template.bind({});
Email.args = {
  as: "email",
};

export const Github = Template.bind({});
Github.args = {
  as: "github",
};

export const HackerRank = Template.bind({});
HackerRank.args = {
  as: "hackerrank",
};

export const LinkedIn = Template.bind({});
LinkedIn.args = {
  as: "linkedin",
};

export const Mobile = Template.bind({});
Mobile.args = {
  as: "mobile",
};

export const Star = Template.bind({});
Star.args = {
  as: "star",
};

