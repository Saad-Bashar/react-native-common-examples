import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { Button } from "./Button";

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    text: "Hello world",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    Story => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Basic: ButtonStory = args => <Button {...args} />;
export const Primary: ButtonStory = args => (
  <Button {...args} variant="primary" />
);
export const Secondary: ButtonStory = args => (
  <Button {...args} variant="secondary" />
);
