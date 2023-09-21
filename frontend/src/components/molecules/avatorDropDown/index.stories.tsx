import { ComponentMeta, ComponentStory } from "@storybook/react";
import Eye from "../../../../public/images/settings.svg";
import Logout from "../../../../public/images/logout.svg";
import React from "react";
import AvatorDropDown from ".";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "molecules/avatorDropDown",
  component: AvatorDropDown,
} as ComponentMeta<typeof AvatorDropDown>;
const Template: ComponentStory<typeof AvatorDropDown> = (args) => (
  <BrowserRouter><AvatorDropDown {...args} /></BrowserRouter>
);
export const AvatorList = Template.bind({});
const data1 = [
  {
    text: "My Ramp",
    icon: "-1",
    isHeading: true,
    route:"/"
  },
  {
    text: "Create Ramp category",
    icon: "-1",
    route:"/"
  },
  {
    text: "View Ramp category",
    icon: "-1",
    route:"/"
  },
  {
    text: "Delete Ramp category",
    icon: "-1",
    route:"/"
  },
  {
    text: "Settings",
    icon: Eye,
    route:"/"
  },
  {
    text: "Logout",
    icon: Logout,
    route:"/"
  },
];
AvatorList.args = {
  data: data1,
};
