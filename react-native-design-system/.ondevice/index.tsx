import { getStorybookUI } from "@storybook/react-native";
import "./doctools";
import "./storybook.requires";
import FontLoader from "./FontLoader";
import React from "react";

const StorybookUIRoot = getStorybookUI({});

export default () => (
  <FontLoader>
    <StorybookUIRoot />
  </FontLoader>
);
