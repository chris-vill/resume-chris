import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EducationHeader as Component } from "./EducationHeader";

export default {
  title: "Basic",
  component: Component,
  args: {
    course: "Bachelor of Science in Eldritch Horror",
    institution: "University of H.P. Lovecraft",
    location: "Providence, Rhode Island",
    date: "08/1890 - 03/1937",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p8V2utLD1a3oN9ujXemCug/Resume?node-id=83%3A509",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const EducationHeader = Template.bind({});
EducationHeader.args = {};

