import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ProjectsSection as Component } from "./ProjectsSection";
import { URLS } from "@constants";

export default {
  title: "Sections",
  component: Component,
  parameters: {
    // design: {
    //   type: "figma",
    //   url: URLS.FIGMA.PILLS_SECTION,
    // },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component />;

export const ProjectsSection = Template.bind({});

