import React from "react";
import styled from "@emotion/styled";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PillsSection as Component } from "./PillsSection";

export default {
  title: "Sections",
  component: Component,
  args: {
    label: "Manga",
    items: [
      "One Piece",
      "Naruto",
      "Bleach",
      "Shingeki no Kyojin",
      "Demon Slayer",
      "One Punch Man",
      "Mob Psycho 100",
      "Made in Abyss",
      "Berserk",
    ],
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/p8V2utLD1a3oN9ujXemCug/Resume?node-id=174%3A942",
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

export const PillsSection = Template.bind({});

const StoryContainer = styled.div`
  width: 240px;
`;

