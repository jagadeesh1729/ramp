import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ModalFooter from ".";
import MuiTypography from "../../atoms/typography";

export default {
    title: "molecules/ModalFooter",
    component:ModalFooter,
}as ComponentMeta<typeof ModalFooter>
const Template:ComponentStory<typeof ModalFooter> = (args) => <ModalFooter {...args} />

export const modalFooter = Template.bind({});
modalFooter.args = {
    button1Text:<MuiTypography text={"Cancel"} />,
    button2Text:"Create Rule",
    button2Disable:true,
};