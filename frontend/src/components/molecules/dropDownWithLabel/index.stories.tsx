import DropdownWithLabel from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { MENU_ITEMS } from "../../../utils/constants";

export default {
  title: "molecules/DropdownWithLabel",
  component: DropdownWithLabel,
} as ComponentMeta<typeof DropdownWithLabel>;

const Template: ComponentStory<typeof DropdownWithLabel> = (args) => (
  <DropdownWithLabel {...args} />
);

export const dropdownwithlabel = Template.bind({});
dropdownwithlabel.args = {
  label: "Quickbooks category",
  text: "Enter Quickbooks category",
  itemsList:MENU_ITEMS,
  sx:{width:"456px"}
};
