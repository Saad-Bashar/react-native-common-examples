import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "../Text/Text";

export interface ButtonProps {
  onPress: () => void;
  text: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button = ({
  onPress,
  variant = "primary",
  text,
  disabled,
}: ButtonProps) => {
  const variantStyles: { [key in ButtonProps["variant"]]: string } = {
    primary: "bg-purple",
    secondary: "bg-transparent border border-purple",
  };

  const textStyles: { [key in ButtonProps["variant"]]: string } = {
    primary: "text-white",
    secondary: "text-purple",
  };

  return (
    <TouchableOpacity
      className={`h-12 rounded-lg justify-center items-center ${
        variantStyles[variant]
      } ${disabled ? "opacity-25" : ""}`}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      <Text variant="heading-small" className={`${textStyles[variant]}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
