import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ContactsSection as Component } from "./ContactsSection";
import { URLS } from "@constants";

export default {
  title: "Sections",
  component: Component,
  args: {
    contacts: [
      {
        label: "LinkedIn",
        value: "/sample-linkedin",
        link: "https://linkedin.com",
        type: "linkedin",
      },
      {
        label: "HackerRank",
        value: "/sample-hackerrank",
        link: "https://hackerrank.com",
        type: "hackerrank",
      },
      {
        label: "GitHub",
        value: "/sample-github",
        link: "https://github.com",
        type: "github",
      },
      {
        label: "Mobile",
        value: "+63987654321",
        link: null,
        type: "mobile",
      },
      {
        label: "Email",
        value: "abc.def@test.com",
        link: null,
        type: "email",
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

export const ContactsSection = Template.bind({});

const StoryContainer = styled.div`
  width: 320px;
  height: 120px;
`;

