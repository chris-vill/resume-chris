import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Colors as ColorsComp } from "./Colors";

export default {
  title: "Style Guide",
  component: ColorsComp,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p8V2utLD1a3oN9ujXemCug/Resume?node-id=8%3A2",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof ColorsComp>;

const Template: ComponentStory<typeof ColorsComp> = (args) => <ColorsComp />;

export const Colors = Template.bind({});
Colors.args = {};

