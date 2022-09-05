import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icons as Component } from "./Icon";

export default {
  title: "Basic/Icon",
  component: Component,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p8V2utLD1a3oN9ujXemCug/Resume?node-id=142%3A484",
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

