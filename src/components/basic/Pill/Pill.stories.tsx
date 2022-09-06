import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Pill as Component } from "./Pill";
import { URLS } from "@constants";

export default {
  title: "Basic",
  component: Component,
  args: {
    label: "Sample Pill",
  },
  parameters: {
    design: {
      type: "figma",
      url: URLS.FIGMA.PILL,
    },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Pill = Template.bind({});

