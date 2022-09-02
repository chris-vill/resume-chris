import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageHeader as Component } from "./PageHeader";

export default {
  title: "Basic",
  component: Component,
  args: {
    header: "Page Header",
    subheader: "Page Subheader",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p8V2utLD1a3oN9ujXemCug/Resume?node-id=10%3A2",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const PageHeader = Template.bind({});

