import type { Meta, StoryObj } from '@storybook/react';
import { ICON_NAMES } from '../Icon';
import { Button } from './Button';
import { BUTTON_VARIANTS, BUTTON_SIZES } from './Button.types';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: BUTTON_VARIANTS,
    },
    size: {
      control: 'select',
      options: BUTTON_SIZES,
    },
    iconLeft: {
      control: 'select',
      options: ICON_NAMES,
    },
    iconRight: {
      control: 'select',
      options: ICON_NAMES,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Variants: Story = {
  args: {
    children: 'Button',
    size: 'md',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {BUTTON_VARIANTS.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      {BUTTON_SIZES.map((size) => (
        <Button key={size} {...args} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    children: 'Add',
    variant: 'primary',
    size: 'md',
    iconLeft: 'plus-circle',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button {...args} iconLeft="plus-circle">
        Add
      </Button>
      <Button {...args} iconRight="reload" iconLeft={undefined}>
        Refresh
      </Button>
      <Button {...args} iconLeft="dots" iconRight={undefined}>
        More
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button {...args} variant="primary">
        Primary disabled
      </Button>
      <Button {...args} variant="secondary">
        Secondary disabled
      </Button>
    </div>
  ),
};

export const AllCombinations: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        padding: '24px',
      }}
    >
      {BUTTON_VARIANTS.map((variant) => (
        <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ margin: 0, fontSize: '14px', textTransform: 'capitalize' }}>
            {variant}
          </h4>
          {BUTTON_SIZES.map((size) => (
            <Button key={size} {...args} variant={variant} size={size}>
              {size}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};

/** Figma design: fill #2430DB, gradient overlay, stroke #367AFF, radius 12px, inner + drop shadow */
const loginButtonStyles = `
  .login-button-custom button {
    border-radius: 12px !important;
    border: 1px solid #367AFF !important;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 100%), #2430DB !important;
    box-shadow: inset 0 -2px 0 1px rgba(0,0,0,0.08), 0 8px 8px 0 rgba(54,122,255,0.03) !important;
  }
  .login-button-custom button:hover:not(:disabled) {
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 100%), color-mix(in srgb, #2430DB 85%, black) !important;
  }
`;

export const Login: Story = {
  args: {
    children: 'Войти',
    variant: 'primary',
    size: 'md',
  },
  decorators: [
    (Story) => (
      <>
        <style>{loginButtonStyles}</style>
        <div className="login-button-custom">
          <Story />
        </div>
      </>
    ),
  ],
};
