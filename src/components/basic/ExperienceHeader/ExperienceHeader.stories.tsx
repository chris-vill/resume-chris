import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ExperienceHeader as Component } from "./ExperienceHeader";
import { URLS } from "@constants";

export default {
  title: "Basic",
  component: Component,
  args: {
    company: "Eldritch Horror",
    title: "Fiction Writer",
    location: "Providence, Rhode Island",
    date: "08/1890 - 03/1937",
  },
  parameters: {
    design: {
      type: "figma",
      url: URLS.FIGMA.EXPERIENCE_HEADER,
    },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const ExperienceHeader = Template.bind({});
ExperienceHeader.args = {};

