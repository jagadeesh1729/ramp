import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import NavBar from ".";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "organisms/navBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;
const Template: ComponentStory<typeof NavBar> = () => <BrowserRouter><NavBar /></BrowserRouter>;
export const NavBarDemo = Template.bind({});
