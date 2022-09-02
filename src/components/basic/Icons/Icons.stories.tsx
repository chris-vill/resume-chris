import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icons as IconsComp } from "./Icons";

export default {
  title: "Basic",
  component: IconsComp,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p8V2utLD1a3oN9ujXemCug/Resume?node-id=142%3A484",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof IconsComp>;

const Template: ComponentStory<typeof IconsComp> = (args) => <IconsComp />;

export const Icons = Template.bind({});
Icons.args = {};

