import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Colors as ColorsComp } from './Colors';

export default {
  title: 'Style Guide',
  component: ColorsComp,
} as ComponentMeta<typeof ColorsComp>;

const Template: ComponentStory<typeof ColorsComp> = (args) => <ColorsComp />;

export const Colors = Template.bind({});
Colors.args = {};