import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ProjectsHeader as Component } from "./ProjectsHeader";
import { URLS } from "@constants";

export default {
  title: "Basic",
  component: Component,
  args: {
    design: "sample-link-b.com",
    name: "Sample Project",
    repository: "sample-link-a.com",
  },
  parameters: {
    design: {
      type: "figma",
      url: URLS.FIGMA.PROJECTS_HEADER,
    },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const ProjectsHeader = Template.bind({});

