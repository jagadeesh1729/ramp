import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import LogoutBody from ".";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "organisms/logout",
  component: LogoutBody,
} as ComponentMeta<typeof LogoutBody>;
const Template: ComponentStory<typeof LogoutBody> = () => <BrowserRouter><LogoutBody /> </BrowserRouter>;
export const Logout = Template.bind({});
