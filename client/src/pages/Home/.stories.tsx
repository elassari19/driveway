// src/components/buttons/__stories__/Button.stories.tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import Home from './index';

export default {
  title: 'Components/Button',
  component: Home,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Home',
  variants: 'primary',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: (
    <div className="flex items-center gap-2">
      <span>Search</span>
    </div>
  ),
};
