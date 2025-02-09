import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../components/IconButton';


const meta = {
  title: 'Text/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alt: {
      control: 'text', description: '아이콘의 대체 텍스트',
    },
    iconPath: {
      control: 'text', description: '아이콘의 경로', defaultValue: '/calcel.svg'
    },
    onClick: {
      action: 'clicked', description: '아이콘 클릭시 호출되는 함수'
    }
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: '아이콘',
    iconPath: '/calcel.svg',
  },
};
