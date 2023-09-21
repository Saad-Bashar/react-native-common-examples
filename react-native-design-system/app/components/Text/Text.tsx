import React from "react";
import { Text as RNText, StyleSheet, TextStyle } from "react-native";

interface Props {
  variant?: "heading-medium" | "heading-small" | "body-medium" | "body-small";
  className?: string;
  children?: React.ReactNode | string;
  style?: TextStyle | TextStyle[];
  numberOfLines?: number;
}

const Text = ({
  variant = "body-medium",
  children,
  className,
  style: styleOverride,
  ...props
}: Props) => {
  const customStyles = [styles[variant], styleOverride];
  return (
    <RNText style={customStyles} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  "heading-medium": {
    fontFamily: "InstrumentSans-Bold",
    fontSize: 32,
    lineHeight: 32 * 1.5, // 150% of 32px
  },
  "heading-small": {
    fontFamily: "InstrumentSans-Bold",
    fontSize: 16,
    lineHeight: 16 * 1.5, // 150% of 16px
  },
  "body-medium": {
    fontFamily: "InstrumentSans-Regular",
    fontSize: 16,
    lineHeight: 16 * 1.5, // 150% of 16px
  },
  "body-small": {
    fontFamily: "InstrumentSans-Regular",
    fontSize: 12,
    lineHeight: 12 * 1.5, // 150% of 12px
  },
});

export default Text;
