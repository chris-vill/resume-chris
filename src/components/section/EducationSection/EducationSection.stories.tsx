import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { EducationSection as Component } from "./EducationSection";
import { URLS } from "@constants";

export default {
  title: "Sections",
  component: Component,
  args: {
    educations: [
      {
        course: "Bachelor of Science in Eldritch Horror",
        institution: "University of H.P. Lovecraft",
        location: "Providence, Rhode Island",
        date: "08/1890 - 03/1937",
      },
      {
        course: "Bachelor of Science in Eldritch Horror",
        institution: "University of H.P. Lovecraft",
        location: "Providence, Rhode Island",
        date: "08/1890 - 03/1937",
      },
    ],
  },
  parameters: {
    design: {
      type: "figma",
      url: URLS.FIGMA.CONTACTS,
    },
    layout: "centered",
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <StoryContainer>
      <Component {...args} />
    </StoryContainer>
  );
};

export const EducationSection = Template.bind({});

const StoryContainer = styled.div`
  width: 320px;
  height: 120px;
`;

