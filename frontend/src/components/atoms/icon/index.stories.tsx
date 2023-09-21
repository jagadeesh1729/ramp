import { ComponentMeta, ComponentStory } from "@storybook/react";
import MuiIcons from "."
import React from "react";
import eye from "../../../../public/images/eye.svg";
import search from "../../../../public/images/search.svg"
export default {
    title: "atoms/icon",
    component: MuiIcons,
  } as ComponentMeta<typeof MuiIcons>;

const Template: ComponentStory<typeof MuiIcons> = (args) => <MuiIcons {...args} />;

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  src: search,
  style: {
    height: " 24px",
    width: "24px",
    left: "474px",
    top: "-154px",
    borderRadius: " 0px",
  },
  alt: "Search Icon",
};

export const HiddenIcon = Template.bind({});
HiddenIcon.args = {
  ...SearchIcon.args,
  src: eye,
  alt: "Hidden icon for password",
};

