import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RampCategoryModal from ".";


export default {
    title: "organisms/RampCategoryModal",
    component:RampCategoryModal,
}as ComponentMeta<typeof RampCategoryModal>
const Template:ComponentStory<typeof RampCategoryModal> = (args) => <RampCategoryModal {...args}  />

export const rampCategoryModal = Template.bind({});

rampCategoryModal.args = {
    showModal:true
}
