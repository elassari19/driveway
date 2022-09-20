// src/components/buttons/__stories__/Button.stories.tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
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
