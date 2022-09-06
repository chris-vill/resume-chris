import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { PageHeader as Component } from "./PageHeader";
import { URLS } from "@constants";

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
      url: URLS.FIGMA.PAGE_HEADER,
    },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const PageHeader = Template.bind({});

