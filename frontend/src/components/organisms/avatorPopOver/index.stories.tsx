import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import AvatorPopOver from ".";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "organisms/avatorPopOver",
  component: AvatorPopOver,
} as ComponentMeta<typeof AvatorPopOver>;
const Template: ComponentStory<typeof AvatorPopOver> = () => <BrowserRouter><AvatorPopOver /></BrowserRouter>;
export const AvatorList = Template.bind({});
