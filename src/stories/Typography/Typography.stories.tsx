import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography as TypographyComp } from "./Typography";
import { URLS } from "@constants";

export default {
  title: "Style Guide",
  component: TypographyComp,
  parameters: {
    design: {
      type: "figma",
      url: URLS.FIGMA.TYPOGRAPHY,
    },
    layout: "centered",
  },
} as ComponentMeta<typeof TypographyComp>;

const Template: ComponentStory<typeof TypographyComp> = (args) => <TypographyComp />;

export const Typography = Template.bind({});
Typography.args = {};

