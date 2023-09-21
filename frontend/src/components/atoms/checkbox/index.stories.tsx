import { ComponentMeta, ComponentStory } from "@storybook/react";
import MuiCheckbox from ".";
import React from "react";
import MuiTypography from "../typography";

export default{
    title:"atoms/Checkbox",
    component:MuiCheckbox
}as ComponentMeta<typeof MuiCheckbox>
const Template:ComponentStory<typeof MuiCheckbox> = (args) => <MuiCheckbox {...args} />
export const checkbox=Template.bind({})
checkbox.args={
    label: <MuiTypography text="Stay signed in for a week" variant="body2" />,
}