import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ExperienceSection as Component } from "./ExperienceSection";
import { URLS } from "@constants";

export default {
  title: "Sections",
  component: Component,
  args: {
    experience: [
      {
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
      {
        title: "Fiction Writer",
        company: "Epic Fantasy",
        date: "01/1892 - 09/1973",
        location: "Bloemfontein, South Africa",
        details: [
          "Invented conlang",
          "Forgot about the giant eagles",
          "Gandalf is a walking Deus ex Machina",
        ],
      },
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

export const ExperienceSection = Template.bind({});

