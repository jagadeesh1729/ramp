import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ModalHeader from ".";

export default {
    title: "molecules/ModalHeader",
    component:ModalHeader,
}as ComponentMeta<typeof ModalHeader>
const Template:ComponentStory<typeof ModalHeader> = (args) => <ModalHeader {...args} />

export const modalHeader = Template.bind({});
modalHeader.args = {
    text:"Create Ramp category ",
};