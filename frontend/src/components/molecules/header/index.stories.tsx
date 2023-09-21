import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Header from ".";
export default {
  title: "molecules/header",
  component: Header,
} as ComponentMeta<typeof Header>;
const Template: ComponentStory<typeof Header> = () => <Header />;
export const header = Template.bind({});
