import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Pill as Component } from "./Pill";

export default {
  title: "Basic",
  component: Component,
  args: {
    label: "Sample Pill",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p8V2utLD1a3oN9ujXemCug/Resume?node-id=50%3A20524",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Pill = Template.bind({});

