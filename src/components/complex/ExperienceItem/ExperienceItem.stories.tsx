import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ExperienceItem as Component } from "./ExperienceItem";
import { URLS } from "@constants";

export default {
  title: "Complex",
  component: Component,
  args: {
    title: "Fiction Writer",
    company: "Eldritch Horror",
    date: "08/1890 - 03/1937",
    location: "Providence, Rhode Island",
    details: [
      "Sacrificed people to Yog-Sothoth",
      "Communicated to Cthulhu inside a dream",
      "Summoned the Yellow King",
    ],
  },
  parameters: {
    // design: {
    //   type: "figma",
    //   url: URLS.FIGMA.PILLS_SECTION,
    // },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const ExperienceItem = Template.bind({});

