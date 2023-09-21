import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MuiTypography from ".";


export default {
    title: "atoms/Typography",
    component:MuiTypography,
}as ComponentMeta<typeof MuiTypography>
const Template:ComponentStory<typeof MuiTypography> = (args) => <MuiTypography {...args} />

export const heading1 = Template.bind({});
heading1.args = {
    text:"heading1",
    variant:"h1",
};
