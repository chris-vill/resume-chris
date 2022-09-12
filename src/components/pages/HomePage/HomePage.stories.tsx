import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HomePage as Component } from "./HomePage";
import { URLS } from "@constants";

export default {
  title: "Pages",
  component: Component,
  parameters: {
    design: {
      type: "figma",
      url: URLS.FIGMA.HOME_PAGE,
    },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = () => <Component />;

export const HomePage = Template.bind({});
HomePage.args = {};

