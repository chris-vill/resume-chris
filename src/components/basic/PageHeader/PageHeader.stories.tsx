import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageHeader as Component } from "./PageHeader";

export default {
  title: "Basic",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = () => <Component />;

export const PageHeader = Template.bind({});
PageHeader.args = {};

