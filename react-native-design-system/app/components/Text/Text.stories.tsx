import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import Text from "./Text";

const variantDescriptions = {
  "heading-medium":
    "Heading Medium:  Instrument Sans Bold 32px 150% Line Height",
  "heading-small": "Heading Small:  Instrument Sans Bold 16px 150% Line Height",
  "body-medium": "Body Medium: Instrument Sans Regular 16px 150% Line Height",
  "body-small": "Body Small: Instrument Sans Regular 12px 150% Line Height",
};

const TextMeta: ComponentMeta<typeof Text> = {
  title: "Text",
  component: Text,
  args: {
    variant: "body-medium",
  },
  argTypes: {
    variant: {
      options: ["heading-medium", "heading-small", "body-medium", "body-small"],
      control: {
        type: "radio",
      },
    },
  },
  decorators: [
    Story => (
      <View style={{ padding: 16 }}>
        <Text className="pb-2">Typograhy</Text>
        <Story />
      </View>
    ),
  ],
};

export default TextMeta;

type TextStory = ComponentStory<typeof Text>;

export const Basic: TextStory = ({ variant }) => (
  <Text variant={variant} children={variantDescriptions[variant]} />
);
