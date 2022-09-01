import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography as TypographyComp } from "./Typography";

export default {
  title: "Style Guide",
  component: TypographyComp,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p8V2utLD1a3oN9ujXemCug/Resume?node-id=108%3A399",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof TypographyComp>;

const Template: ComponentStory<typeof TypographyComp> = (args) => <TypographyComp />;

export const Typography = Template.bind({});
Typography.args = {};

