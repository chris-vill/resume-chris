import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Colors as ColorsComp } from "./Colors";
import { URLS } from "@constants";

export default {
  title: "Style Guide",
  component: ColorsComp,
  parameters: {
    design: {
      type: "figma",
      url: URLS.FIGMA.COLORS,
    },
    layout: "centered",
  },
} as ComponentMeta<typeof ColorsComp>;

const Template: ComponentStory<typeof ColorsComp> = (args) => <ColorsComp />;

export const Colors = Template.bind({});
Colors.args = {};

